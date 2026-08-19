import React, { useRef, useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, ArrowRight, CheckCircle2, Circle, ChevronLeft, ChevronRight,
  Volume2, Pause, Bookmark, Sparkles, HelpCircle, Check, X, Lightbulb, 
  MessageSquareQuote, RotateCcw
} from 'lucide-react';
import { Module, Stage, QuizQuestion } from '../data/courseData';
import { ProgressState, ReadingSettings } from '../types';
import { useSpeech } from '../hooks/useSpeech';

interface ModuleViewProps {
  module: Module;
  stageIndex: number;
  progress: ProgressState;
  settings: ReadingSettings;
  onNavigateHome: () => void;
  onSelectStage: (index: number) => void;
  onToggleComplete: (moduleId: string, stageId: string) => void;
  onToggleBookmark: (stageId: string) => void;
  onSaveNote: (stageId: string, note: string) => void;
  onRecordQuiz: (stageId: string, passed: boolean) => void;
}

interface ShuffledOption {
  text: string;
  isCorrect: boolean;
}

function shuffleOptions(quiz: QuizQuestion): ShuffledOption[] {
  const list: ShuffledOption[] = quiz.options.map((opt, idx) => ({
    text: opt,
    isCorrect: idx === quiz.correctIndex,
  }));

  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }

  return list;
}

export const ModuleView: React.FC<ModuleViewProps> = ({
  module,
  stageIndex,
  progress,
  settings,
  onNavigateHome,
  onSelectStage,
  onToggleComplete,
  onToggleBookmark,
  onSaveNote,
  onRecordQuiz,
}) => {
  const stage = module.stages[stageIndex] || module.stages[0];
  const completedList = progress.completedStages[module.id] || [];
  const isStageCompleted = completedList.includes(stage.id);
  const isBookmarked = progress.bookmarks.includes(stage.id);
  const currentNote = progress.notes[stage.id] || '';

  const railRef = useRef<HTMLDivElement>(null);
  
  const quizPool: QuizQuestion[] = useMemo(() => {
    if (stage.quizzes && stage.quizzes.length > 0) {
      return stage.quizzes;
    }
    if (stage.quiz) {
      return [stage.quiz];
    }
    return [];
  }, [stage]);

  const [activeQuizIndex, setActiveQuizIndex] = useState<number>(0);
  const [currentShuffledOptions, setCurrentShuffledOptions] = useState<ShuffledOption[]>([]);
  const [selectedQuizOption, setSelectedQuizOption] = useState<number | null>(null);
  const [showQuizResult, setShowQuizResult] = useState<boolean>(false);
  const [noteText, setNoteText] = useState<string>(currentNote);
  const [isNoteSaved, setIsNoteSaved] = useState<boolean>(false);

  const { speak, stop, pause, resume, isPlaying, isPaused, speed, changeSpeed, isSupported } = useSpeech();

  const currentQuiz = quizPool[activeQuizIndex % (quizPool.length || 1)] || stage.quiz;

  useEffect(() => {
    setSelectedQuizOption(null);
    setShowQuizResult(false);
    setNoteText(progress.notes[stage.id] || '');
    setIsNoteSaved(false);
    stop();

    let chosenIdx = 0;
    if (quizPool.length > 0) {
      chosenIdx = Math.floor(Math.random() * quizPool.length);
      setActiveQuizIndex(chosenIdx);
    } else {
      setActiveQuizIndex(0);
    }

    const initialQuiz = quizPool[chosenIdx] || stage.quiz;
    if (initialQuiz) {
      setCurrentShuffledOptions(shuffleOptions(initialQuiz));
    }
  }, [stage.id, quizPool.length, stage.quiz, progress.notes, stop]);

  useEffect(() => {
    if (currentQuiz) {
      setCurrentShuffledOptions(shuffleOptions(currentQuiz));
    }
  }, [activeQuizIndex, currentQuiz]);

  useEffect(() => {
    if (railRef.current) {
      const activeBtn = railRef.current.children[stageIndex] as HTMLElement;
      if (activeBtn) {
        activeBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [stageIndex]);

  const scrollRail = (direction: 'left' | 'right') => {
    if (railRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      railRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const totalStages = module.stages.length;
  const completedCount = completedList.length;
  const percentComplete = Math.round((completedCount / totalStages) * 100);

  const handleReadAloud = () => {
    if (isPlaying) {
      pause();
    } else if (isPaused) {
      resume();
    } else {
      const fullText = `
        ${stage.title}. 
        ${stage.intro}. 
        ${stage.points.map(p => `${p.head}. ${p.text}`).join('. ')}. 
        Examples: ${stage.examples.join('. ')}.
      `;
      speak(fullText, speed);
    }
  };

  const handleQuizSubmit = (optIndex: number) => {
    if (showQuizResult || !currentShuffledOptions[optIndex]) return;
    setSelectedQuizOption(optIndex);
    setShowQuizResult(true);
    const isCorrect = currentShuffledOptions[optIndex].isCorrect;
    onRecordQuiz(stage.id, isCorrect);
  };

  const handleRetryCurrentQuestion = useCallback(() => {
    setSelectedQuizOption(null);
    setShowQuizResult(false);
    if (currentQuiz) {
      setCurrentShuffledOptions(shuffleOptions(currentQuiz));
    }
  }, [currentQuiz]);

  const handleNextQuestion = useCallback(() => {
    setSelectedQuizOption(null);
    setShowQuizResult(false);
    if (quizPool.length > 1) {
      const nextIdx = (activeQuizIndex + 1) % quizPool.length;
      setActiveQuizIndex(nextIdx);
      const nextQ = quizPool[nextIdx];
      if (nextQ) {
        setCurrentShuffledOptions(shuffleOptions(nextQ));
      }
    }
  }, [quizPool, activeQuizIndex]);

  const handleNoteSave = () => {
    onSaveNote(stage.id, noteText);
    setIsNoteSaved(true);
    setTimeout(() => setIsNoteSaved(false), 2000);
  };

  const isCurrentSelectionCorrect = selectedQuizOption !== null && currentShuffledOptions[selectedQuizOption]?.isCorrect;

  return (
    <div className="max-w-4xl mx-auto px-5 sm:px-8 py-8 sm:py-12 pb-32">
      {/* Top Navigation & Module Meta Header */}
      <motion.div 
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="pb-8 mb-8 border-b border-[#1c1917]/12 flex flex-col sm:flex-row sm:items-start justify-between gap-6"
      >
        <div>
          {/* Back to Dashboard */}
          <button
            onClick={onNavigateHome}
            className="group inline-flex items-center gap-1.5 pt-btn-standard text-[#0369a1] hover:text-[#075985] transition-colors mb-3.5 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Dashboard</span>
          </button>

          {/* Module Label */}
          <div className="pt-kicker text-[#78716c]">
            {module.kicker}
          </div>

          {/* Module Viewer Title */}
          <h1 className="pt-mod-viewer-title text-[#1c1917] mt-2">
            {module.title}
          </h1>
          
          {/* Citation line */}
          <div className="pt-mod-citation mt-1.5">
            {module.citation}
          </div>
        </div>

        {/* Top Right Progress Box */}
        <div className="bg-white border border-[#1c1917]/12 rounded-md p-5 sm:min-w-[240px] shadow-[0_1px_4px_rgba(0,0,0,0.04)] flex-none">
          <div className="flex items-baseline justify-between pt-kicker text-[#78716c]">
            <span>Progress</span>
            <span className="font-semibold text-[#1c1917] normal-case tracking-normal text-[16px]">{percentComplete}%</span>
          </div>
          <div className="h-2 bg-[#e7e5e4] rounded-full overflow-hidden mt-2.5">
            <motion.div
              className="h-full bg-[#0369a1] rounded-full"
              initial={false}
              animate={{ width: `${percentComplete}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
          <div className="text-[13px] text-[#57534e] mt-2.5 flex items-center justify-between">
            <span>{completedCount} of {totalStages} parts</span>
            {completedCount === totalStages && (
              <span className="text-emerald-700 font-semibold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Done
              </span>
            )}
          </div>
        </div>
      </motion.div>

      {/* Horizontal Part Navigation Rail */}
      <div className="flex items-center gap-2.5 mb-10">
        <button
          onClick={() => scrollRail('left')}
          className="flex-none w-9 h-9 bg-white border border-[#1c1917]/15 rounded-xs flex items-center justify-center text-[#1c1917] hover:border-[#0369a1] hover:text-[#0369a1] transition-colors cursor-pointer shadow-xs"
          aria-label="Scroll parts left"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div
          ref={railRef}
          className="pt-scroll flex items-center gap-2.5 py-2 flex-1 overflow-x-auto select-none"
        >
          {module.stages.map((st, idx) => {
            const isCompleted = completedList.includes(st.id);
            const isActive = idx === stageIndex;

            let chipStyle = "bg-white text-[#57534e] border border-[#1c1917]/12 hover:border-[#0369a1]/50";
            if (isActive) {
              chipStyle = "bg-[#0369a1] text-white border border-[#0369a1] shadow-xs";
            } else if (isCompleted) {
              chipStyle = "bg-[#f0f9ff] text-[#075985] border border-[#0369a1]/30 font-semibold";
            }

            return (
              <motion.button
                key={st.id}
                whileTap={{ scale: 0.97 }}
                onClick={() => onSelectStage(idx)}
                className={`flex-none inline-flex items-center gap-2 px-3.5 py-2 rounded-xs pt-chip transition-colors duration-150 cursor-pointer ${chipStyle}`}
              >
                {isCompleted ? (
                  <CheckCircle2 className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#0369a1]'}`} />
                ) : isActive ? (
                  <span className="w-2 h-2 rounded-full bg-white flex-none"></span>
                ) : (
                  <Circle className="w-3 h-3 text-[#a8a29e] flex-none" />
                )}
                <span>Part {idx + 1}: {st.label}</span>
              </motion.button>
            );
          })}
        </div>

        <button
          onClick={() => scrollRail('right')}
          className="flex-none w-9 h-9 bg-white border border-[#1c1917]/15 rounded-xs flex items-center justify-center text-[#1c1917] hover:border-[#0369a1] hover:text-[#0369a1] transition-colors cursor-pointer shadow-xs"
          aria-label="Scroll parts right"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Main Reading Canvas with Smooth Part Page Turn Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={stage.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="bg-white border border-[#1c1917]/12 rounded-md p-7 sm:p-12 shadow-[0_1px_4px_rgba(0,0,0,0.04)]"
        >
          {/* Stage Kicker Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-[#1c1917]/10">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="pt-kicker text-[#0369a1]">
                Part {stageIndex + 1}
              </span>
              {settings.showSourceRefs && stage.source && (
                <>
                  <span className="text-[#a8a29e] select-none text-xs">—</span>
                  <span className="pt-kicker text-[#78716c]">
                    {stage.source}
                  </span>
                </>
              )}
            </div>

            <div className="flex items-center gap-2.5">
              {/* Audio Read-Aloud */}
              {isSupported && (
                <div className="flex items-center gap-1.5 bg-[#f5f5f4] rounded-xs px-3 py-1.5 border border-[#1c1917]/8">
                  <button
                    onClick={handleReadAloud}
                    className="flex items-center gap-1.5 pt-btn-standard text-[13px] text-[#1c1917] hover:text-[#0369a1] cursor-pointer"
                    title="Listen to stage narration"
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-3.5 h-3.5 text-[#0369a1]" />
                        <span>Pause</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-3.5 h-3.5 opacity-80" />
                        <span>Listen</span>
                      </>
                    )}
                  </button>
                  {isPlaying && (
                    <button
                      onClick={() => changeSpeed(speed === 1.0 ? 1.25 : speed === 1.25 ? 1.5 : 1.0)}
                      className="ml-1 text-[11px] font-semibold px-1.5 py-0.5 bg-white rounded border border-[#1c1917]/10 hover:bg-neutral-100 cursor-pointer"
                    >
                      {speed}x
                    </button>
                  )}
                </div>
              )}

              {/* Bookmark button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => onToggleBookmark(stage.id)}
                className={`p-2 rounded-xs border transition-all cursor-pointer ${
                  isBookmarked 
                    ? 'bg-[#f0f9ff] border-[#0369a1] text-[#0369a1]' 
                    : 'bg-white border-[#1c1917]/15 text-[#78716c] hover:text-[#1c1917] hover:border-[#0369a1]'
                }`}
                title={isBookmarked ? 'Bookmarked' : 'Bookmark Stage'}
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
              </motion.button>
            </div>
          </div>

          {/* Stage Title */}
          <h2 className="pt-stage-title text-[#1c1917] mt-8 mb-6">
            {stage.title}
          </h2>

          {/* Opening Narrative Intro */}
          <p className="pt-stage-intro text-[#1c1917] mb-12 text-pretty">
            {stage.intro}
          </p>

          {/* Numbered Points */}
          <div className="flex flex-col gap-10 mb-12">
            {stage.points.map((pt) => (
              <div key={pt.n} className="grid grid-cols-[40px_1fr] sm:grid-cols-[52px_1fr] gap-4 sm:gap-6 items-start">
                <div className="text-[36px] sm:text-[40px] text-[#0369a1] font-semibold leading-none pt-0.5 select-none font-serif">
                  {pt.n}
                </div>
                <div>
                  <h4 className="pt-takeaway-head text-[#1c1917] mb-2">
                    {pt.head}
                  </h4>
                  <p className="pt-takeaway-body text-[#444141] text-pretty">
                    {pt.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Real-World Examples Box */}
          {stage.examples && stage.examples.length > 0 && (
            <div className="bg-[#f0f9ff]/80 border border-[#0369a1]/25 rounded-md p-6 sm:p-8 mb-10">
              <div className="flex items-center gap-2 pt-kicker text-[#0369a1] mb-4">
                <Lightbulb className="w-4 h-4 text-[#0369a1]" />
                Examples & Case Studies
              </div>
              <div className="flex flex-col gap-4">
                {stage.examples.map((ex, i) => (
                  <div key={i} className="pt-takeaway-body text-[#0c4a6e] flex items-start gap-3">
                    <span className="text-[#0369a1] font-semibold text-2xl leading-none">•</span>
                    <span className="text-pretty">{ex}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Takeaway Insight Callout */}
          {stage.keyTakeaway && (
            <div className="bg-[#fafaf9] border-l-4 border-[#0369a1] p-5 sm:p-6 mb-10 rounded-r-md">
              <div className="pt-kicker text-[#0369a1]">
                Key Insight
              </div>
              <div className="text-[19px] text-[#1c1917] font-semibold mt-1.5 leading-snug">
                {stage.keyTakeaway}
              </div>
            </div>
          )}

          {/* Interactive Knowledge Check Quiz */}
          {currentQuiz && (
            <div className="bg-[#fafaf9] border border-[#1c1917]/12 rounded-md p-6 sm:p-8 mb-10 shadow-2xs">
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-[#1c1917]/8">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-2 pt-kicker text-[#0369a1]">
                    <HelpCircle className="w-4 h-4 text-[#0369a1]" />
                    Knowledge Check
                  </div>
                  {quizPool.length > 1 && (
                    <span className="text-[12px] text-[#78716c] font-medium bg-[#e7e5e4]/70 px-2 py-0.5 rounded-xs">
                      Question {(activeQuizIndex % quizPool.length) + 1} of {quizPool.length}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  {quizPool.length > 1 && (
                    <button
                      onClick={handleNextQuestion}
                      className="inline-flex items-center gap-1.5 text-[12px] text-[#1c1917] hover:text-[#0369a1] bg-white border border-[#1c1917]/15 px-3 py-1 rounded-xs pt-btn-standard transition-colors cursor-pointer shadow-2xs hover:border-[#0369a1]"
                      title="Advance to next question in this stage"
                    >
                      <span>Next Question</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}

                  {showQuizResult && !isCurrentSelectionCorrect && (
                    <motion.button
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      onClick={handleRetryCurrentQuestion}
                      className="inline-flex items-center gap-1 text-[12px] font-semibold px-3 py-1 rounded-xs border bg-rose-50 border-rose-300 text-rose-800 hover:bg-rose-100 hover:border-rose-400 transition-all cursor-pointer shadow-2xs"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Retry</span>
                    </motion.button>
                  )}

                  {showQuizResult && isCurrentSelectionCorrect && (
                    <motion.span 
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-[12px] font-semibold px-2.5 py-1 rounded-xs bg-emerald-50 border border-emerald-300 text-emerald-800 flex items-center gap-1"
                    >
                      <Check className="w-3.5 h-3.5" /> Passed ✓
                    </motion.span>
                  )}
                </div>
              </div>

              {/* Question Text */}
              <p className="font-semibold text-[20px] text-[#1c1917] mb-5 leading-snug">
                {currentQuiz.question}
              </p>

              {/* Shuffled Answer Options */}
              <div className="flex flex-col gap-3">
                {currentShuffledOptions.map((opt, oIdx) => {
                  const isSelected = selectedQuizOption === oIdx;
                  const isCorrect = opt.isCorrect;

                  let optStyle = "bg-white border border-[#1c1917]/15 hover:border-[#0369a1] text-[#1c1917]";
                  if (showQuizResult) {
                    if (isCorrect) {
                      optStyle = "bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold shadow-xs";
                    } else if (isSelected) {
                      optStyle = "bg-rose-50 border-rose-400 text-rose-950";
                    }
                  } else if (isSelected) {
                    optStyle = "bg-[#f0f9ff] border-[#0369a1] text-[#075985]";
                  }

                  return (
                    <motion.button
                      key={`${oIdx}-${opt.text}`}
                      whileTap={{ scale: showQuizResult ? 1 : 0.99 }}
                      onClick={() => handleQuizSubmit(oIdx)}
                      disabled={showQuizResult}
                      className={`text-left p-4 rounded-xs text-[16px] leading-relaxed transition-all flex items-start gap-3.5 cursor-pointer ${optStyle}`}
                    >
                      <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center text-[12px] font-semibold flex-none mt-0.5">
                        {String.fromCharCode(65 + oIdx)}
                      </span>
                      <span className="flex-1">{opt.text}</span>
                      {showQuizResult && isCorrect && <Check className="w-5 h-5 text-emerald-700 flex-none" />}
                      {showQuizResult && isSelected && !isCorrect && <X className="w-5 h-5 text-rose-700 flex-none" />}
                    </motion.button>
                  );
                })}
              </div>

              {/* Explanation & Action Footer with Animation */}
              <AnimatePresence>
                {showQuizResult && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mt-5 p-5 bg-white border border-[#1c1917]/12 rounded-md shadow-xs overflow-hidden"
                  >
                    <div className="text-[15px] text-[#444141] leading-relaxed">
                      <strong className="text-[#1c1917] font-semibold">Explanation:</strong> {currentQuiz.explanation}
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#1c1917]/8 flex flex-wrap items-center justify-between gap-3">
                      <span className="text-[13px] text-[#78716c]">
                        {isCurrentSelectionCorrect ? 'Correct! Well done.' : 'Incorrect. Click "Retry" to reshuffle and try again.'}
                      </span>

                      <div className="flex items-center gap-2">
                        {!isCurrentSelectionCorrect && (
                          <button
                            onClick={handleRetryCurrentQuestion}
                            className="px-3.5 py-1.5 bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-800 rounded-xs pt-btn-standard text-[13px] flex items-center gap-1.5 cursor-pointer transition-colors shadow-2xs"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                            <span>Retry</span>
                          </button>
                        )}

                        {quizPool.length > 1 && (
                          <button
                            onClick={handleNextQuestion}
                            className="px-4 py-1.5 bg-[#0369a1] hover:bg-[#075985] text-white rounded-xs pt-btn-standard text-[13px] flex items-center gap-1.5 cursor-pointer transition-colors shadow-2xs"
                          >
                            <span>Next Question</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* Stage Reflection Notes */}
          <div className="bg-[#fafaf9] border border-[#1c1917]/12 rounded-md p-5 sm:p-6 mb-10">
            <div className="flex items-center justify-between gap-2 mb-3">
              <label className="pt-kicker text-[#57534e] flex items-center gap-1.5">
                <MessageSquareQuote className="w-3.5 h-3.5 text-[#0369a1]" />
                Study Notes & Reflections
              </label>
              {isNoteSaved && (
                <span className="text-[13px] text-emerald-700 font-semibold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Saved
                </span>
              )}
            </div>
            <textarea
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              placeholder="Record your personal notes, insights, or observations for this stage..."
              className="w-full h-24 p-3.5 bg-white border border-[#1c1917]/15 focus:border-[#0369a1] rounded-xs text-[15px] resize-y outline-none transition-colors leading-relaxed"
            />
            <div className="flex justify-end mt-3">
              <button
                onClick={handleNoteSave}
                className="px-4 py-2 bg-[#0369a1] hover:bg-[#075985] text-white rounded-xs pt-btn-standard text-[13px] uppercase tracking-wider cursor-pointer transition-colors shadow-2xs"
              >
                Save Note
              </button>
            </div>
          </div>

          {/* Bottom Stage Navigation Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#1c1917]/12">
            {/* Previous Stage Button */}
            <button
              onClick={() => onSelectStage(stageIndex - 1)}
              disabled={stageIndex === 0}
              className={`w-full sm:w-auto px-6 py-3 border border-[#1c1917]/20 rounded-xs pt-btn-footer flex items-center justify-center gap-2 cursor-pointer transition-colors ${
                stageIndex === 0
                  ? 'opacity-30 cursor-not-allowed bg-neutral-100 text-neutral-400'
                  : 'bg-white hover:border-[#0369a1] hover:text-[#0369a1] text-[#1c1917] shadow-xs'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            {/* Position Indicator */}
            <div className="pt-kicker text-[#78716c]">
              Part {stageIndex + 1} of {totalStages}
            </div>

            {/* Mark Complete & Continue Button */}
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={() => onToggleComplete(module.id, stage.id)}
              className={`w-full sm:w-auto px-7 py-3.5 rounded-xs pt-btn-footer flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-xs ${
                isStageCompleted
                  ? 'bg-emerald-700 hover:bg-emerald-800 text-white'
                  : 'bg-[#0369a1] hover:bg-[#075985] text-white'
              }`}
            >
              {isStageCompleted ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-200" />
                  <span>Completed ✓</span>
                </>
              ) : stageIndex < totalStages - 1 ? (
                <>
                  <span>Mark complete & continue</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span>Complete Module</span>
                  <Sparkles className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
