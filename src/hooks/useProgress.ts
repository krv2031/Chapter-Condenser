import { useState, useEffect, useCallback } from 'react';
import { ProgressState, ReadingSettings } from '../types';
import { MODULES_DATA } from '../data/courseData';
import confetti from 'canvas-confetti';

const STORAGE_KEY = 'pageturn_progress_v5';
const SETTINGS_KEY = 'pageturn_settings_v5';

const DEFAULT_PROGRESS: ProgressState = {
  completedStages: {
    m1: [],
    m2: [],
    m3: [],
    m4: [],
    m5: [],
    m6: [],
    m7: [],
  },
  currentModuleId: 'm1',
  currentStageIndex: 0,
  bookmarks: [],
  notes: {},
  quizScores: {},
};

const DEFAULT_SETTINGS: ReadingSettings = {
  autoAdvance: true,
  showSourceRefs: true,
  fontSize: 'md',
  narrationSpeed: 1.0,
};

export function useProgress() {
  const [progress, setProgress] = useState<ProgressState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...DEFAULT_PROGRESS,
          ...parsed,
          completedStages: {
            ...DEFAULT_PROGRESS.completedStages,
            ...(parsed.completedStages || {}),
          },
        };
      }
    } catch (e) {
      console.warn('Error reading progress state:', e);
    }
    return DEFAULT_PROGRESS;
  });

  const [settings, setSettings] = useState<ReadingSettings>(() => {
    try {
      const saved = localStorage.getItem(SETTINGS_KEY);
      if (saved) {
        return { ...DEFAULT_SETTINGS, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.warn('Error reading settings:', e);
    }
    return DEFAULT_SETTINGS;
  });

  // Save on updates
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.warn('Error saving progress:', e);
    }
  }, [progress]);

  useEffect(() => {
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    } catch (e) {
      console.warn('Error saving settings:', e);
    }
  }, [settings]);

  const triggerCelebration = useCallback(() => {
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#0369a1', '#10b981', '#f59e0b', '#8b5cf6'],
      });
    } catch (e) {
      // ignore
    }
  }, []);

  const toggleStageComplete = useCallback((moduleId: string, stageId: string, advanceOnComplete: boolean = settings.autoAdvance) => {
    setProgress(prev => {
      const currentList = prev.completedStages[moduleId] || [];
      const isAlreadyCompleted = currentList.includes(stageId);
      const updatedList = isAlreadyCompleted
        ? currentList.filter(id => id !== stageId)
        : [...currentList, stageId];

      const currentMod = MODULES_DATA.find(m => m.id === moduleId);
      const totalStages = currentMod?.stages.length || 0;

      if (!isAlreadyCompleted) {
        triggerCelebration();
      }

      let nextIndex = prev.currentStageIndex;
      if (!isAlreadyCompleted && advanceOnComplete && currentMod) {
        const currentStageIdx = currentMod.stages.findIndex(s => s.id === stageId);
        if (currentStageIdx >= 0 && currentStageIdx < totalStages - 1) {
          nextIndex = currentStageIdx + 1;
        }
      }

      return {
        ...prev,
        completedStages: {
          ...prev.completedStages,
          [moduleId]: updatedList,
        },
        currentStageIndex: nextIndex,
      };
    });
  }, [settings.autoAdvance, triggerCelebration]);

  const setModuleAndStage = useCallback((moduleId: string, stageIndex: number) => {
    setProgress(prev => ({
      ...prev,
      currentModuleId: moduleId,
      currentStageIndex: Math.max(0, stageIndex),
    }));
  }, []);

  const toggleBookmark = useCallback((stageId: string) => {
    setProgress(prev => {
      const exists = prev.bookmarks.includes(stageId);
      return {
        ...prev,
        bookmarks: exists
          ? prev.bookmarks.filter(id => id !== stageId)
          : [...prev.bookmarks, stageId],
      };
    });
  }, []);

  const saveNote = useCallback((stageId: string, noteText: string) => {
    setProgress(prev => ({
      ...prev,
      notes: {
        ...prev.notes,
        [stageId]: noteText,
      },
    }));
  }, []);

  const recordQuizResult = useCallback((stageId: string, passed: boolean) => {
    setProgress(prev => ({
      ...prev,
      quizScores: {
        ...prev.quizScores,
        [stageId]: passed,
      },
    }));
  }, []);

  const resetAllProgress = useCallback(() => {
    setProgress({
      completedStages: {
        m1: [],
        m2: [],
        m3: [],
        m4: [],
        m5: [],
        m6: [],
        m7: [],
      },
      currentModuleId: 'm1',
      currentStageIndex: 0,
      bookmarks: [],
      notes: {},
      quizScores: {},
    });
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem('pageturn_mastered_flashcards');
    } catch (e) {
      console.warn('Error clearing localStorage:', e);
    }
  }, []);

  // Compute overall stats
  const totalStagesInCourse: number = MODULES_DATA.reduce((acc, m) => acc + m.stages.length, 0);
  const totalCompletedStages: number = Object.keys(progress.completedStages || {}).reduce((acc: number, key: string) => {
    const list = progress.completedStages[key];
    return acc + (Array.isArray(list) ? list.length : 0);
  }, 0);
  const overallPercentage: number = totalStagesInCourse > 0 
    ? Math.round((totalCompletedStages / totalStagesInCourse) * 100) 
    : 0;

  return {
    progress,
    settings,
    setSettings,
    toggleStageComplete,
    setModuleAndStage,
    toggleBookmark,
    saveNote,
    recordQuizResult,
    resetAllProgress,
    totalStagesInCourse,
    totalCompletedStages,
    overallPercentage,
  };
}
