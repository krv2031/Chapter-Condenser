import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { ModuleView } from './components/ModuleView';
import { SearchModal } from './components/SearchModal';
import { FlashcardsModal } from './components/FlashcardsModal';
import { NotesDrawer } from './components/NotesDrawer';
import { SettingsModal } from './components/SettingsModal';
import { MODULES_DATA } from './data/courseData';
import { useProgress } from './hooks/useProgress';

export default function App() {
  const [view, setView] = useState<'dashboard' | 'module'>('dashboard');
  const [activeModuleId, setActiveModuleId] = useState<string>('m1');
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFlashcardsOpen, setIsFlashcardsOpen] = useState(false);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const {
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
  } = useProgress();

  const activeModule = MODULES_DATA.find(m => m.id === activeModuleId) || MODULES_DATA[0];

  const handleOpenModule = useCallback((moduleId: string, stageIndex: number = 0) => {
    setActiveModuleId(moduleId);
    setActiveStageIndex(stageIndex);
    setModuleAndStage(moduleId, stageIndex);
    setView('module');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [setModuleAndStage]);

  const handleSelectStage = useCallback((index: number) => {
    setActiveStageIndex(index);
    setModuleAndStage(activeModuleId, index);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeModuleId, setModuleAndStage]);

  const handleNavigateHome = useCallback(() => {
    setView('dashboard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleToggleStageComplete = useCallback((moduleId: string, stageId: string) => {
    toggleStageComplete(moduleId, stageId, settings.autoAdvance);
    if (settings.autoAdvance) {
      const currentMod = MODULES_DATA.find(m => m.id === moduleId);
      if (currentMod && activeStageIndex < currentMod.stages.length - 1) {
        setActiveStageIndex(prev => prev + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [toggleStageComplete, settings.autoAdvance, activeStageIndex]);

  const handleDeleteNote = useCallback((stageId: string) => {
    saveNote(stageId, '');
  }, [saveNote]);

  return (
    <div className="min-h-screen bg-[#f3f2f2] text-[#201e1d] flex flex-col selection:bg-[#e9f8ff] selection:text-[#004961]">
      {/* Navigation Header */}
      <Header
        onNavigateHome={handleNavigateHome}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenFlashcards={() => setIsFlashcardsOpen(true)}
        onOpenNotes={() => setIsNotesOpen(true)}
        onOpenSettings={() => setIsSettingsOpen(true)}
        bookmarkCount={progress.bookmarks.length}
      />

      {/* Main Content Area with Animated Transition */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {view === 'dashboard' ? (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Dashboard
                progress={progress}
                onOpenModule={handleOpenModule}
                totalCompleted={totalCompletedStages}
                totalStages={totalStagesInCourse}
                overallPercent={overallPercentage}
              />
            </motion.div>
          ) : (
            <motion.div
              key={`module-${activeModuleId}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <ModuleView
                module={activeModule}
                stageIndex={activeStageIndex}
                progress={progress}
                settings={settings}
                onNavigateHome={handleNavigateHome}
                onSelectStage={handleSelectStage}
                onToggleComplete={handleToggleStageComplete}
                onToggleBookmark={toggleBookmark}
                onSaveNote={saveNote}
                onRecordQuiz={recordQuizResult}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Simplified Broadsheet Footer */}
      <footer className="border-t border-[#201e1d]/12 bg-[#eae7e7] py-6 text-center text-xs text-[#605d5d]">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <strong>PageTurn</strong> — Curated stages from <em>The Design of Everyday Things</em> & <em>Designing the User Interface</em>.
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsFlashcardsOpen(true)}
              className="hover:text-[#0369a1] transition-colors font-medium cursor-pointer"
            >
              Flashcards
            </button>
            <span>•</span>
            <button
              onClick={() => setIsNotesOpen(true)}
              className="hover:text-[#0369a1] transition-colors font-medium cursor-pointer"
            >
              Study Notes
            </button>
            <span>•</span>
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hover:text-[#0369a1] transition-colors font-medium cursor-pointer"
            >
              Search
            </button>
          </div>
        </div>
      </footer>

      {/* Modals & Drawers with AnimatePresence */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectResult={(modId, stIdx) => handleOpenModule(modId, stIdx)}
      />

      <FlashcardsModal
        isOpen={isFlashcardsOpen}
        onClose={() => setIsFlashcardsOpen(false)}
      />

      <NotesDrawer
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
        progress={progress}
        onSelectStage={(modId, stIdx) => handleOpenModule(modId, stIdx)}
        onDeleteNote={handleDeleteNote}
      />

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        settings={settings}
        onUpdateSettings={(newS) => setSettings(prev => ({ ...prev, ...newS }))}
        onResetProgress={resetAllProgress}
      />
    </div>
  );
}
