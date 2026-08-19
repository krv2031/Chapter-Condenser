import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { MODULES_DATA } from '../data/courseData';
import { ProgressState } from '../types';

interface DashboardProps {
  progress: ProgressState;
  onOpenModule: (moduleId: string, stageIndex?: number) => void;
  totalCompleted: number;
  totalStages: number;
  overallPercent: number;
}

export const Dashboard: React.FC<DashboardProps> = ({
  progress,
  onOpenModule,
  totalCompleted,
  totalStages,
}) => {
  const [filterAuthor, setFilterAuthor] = useState<'all' | 'norman' | 'shneiderman'>('all');

  const filteredModules = MODULES_DATA.filter(mod => {
    if (filterAuthor === 'norman') return mod.citation.includes('Norman');
    if (filterAuthor === 'shneiderman') return mod.citation.includes('Shneiderman');
    return true;
  });

  // Find next uncompleted module/stage for quick resume
  let activeModuleId = 'm1';
  let activeStageIdx = 0;
  for (const m of MODULES_DATA) {
    const comp = progress.completedStages[m.id] || [];
    if (comp.length < m.stages.length) {
      activeModuleId = m.id;
      activeStageIdx = comp.length;
      break;
    }
  }
  const currentResumeMod = MODULES_DATA.find(m => m.id === activeModuleId) || MODULES_DATA[0];
  const currentResumeStage = currentResumeMod.stages[activeStageIdx] || currentResumeMod.stages[0];

  return (
    <div className="max-w-4xl mx-auto px-5 sm:px-8 py-10 sm:py-14 pb-28">
      {/* Top Header */}
      <motion.div 
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="mb-10 sm:mb-12"
      >
        <h1 className="pt-dash-title text-[#1c1917] dark:text-[#f5f5f4] mb-4">
          Chapter bites
        </h1>
        <p className="text-[19px] sm:text-[21px] text-[#57534e] dark:text-[#d6d3d1] max-w-2xl leading-[1.65]">
          Each week's reading, broken into short stages you can finish one at a time.
        </p>
      </motion.div>

      {/* Quick Resume Hero */}
      {totalCompleted > 0 && totalCompleted < totalStages && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25, delay: 0.05 }}
          className="mb-10 bg-white dark:bg-[#1e1c1b] border border-[#1c1917]/15 dark:border-neutral-800 rounded-md p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col sm:flex-row sm:items-center justify-between gap-5 transition-colors"
        >
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 pt-kicker text-[#0369a1] dark:text-[#38bdf8] mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Resume Reading</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#1c1917] dark:text-[#f5f5f4] leading-snug">
              {currentResumeMod.title}
            </h3>
            <p className="text-base text-[#57534e] dark:text-[#d6d3d1] mt-1 italic">
              Part {activeStageIdx + 1}: {currentResumeStage.title}
            </p>
          </div>

          <button
            onClick={() => onOpenModule(activeModuleId, activeStageIdx)}
            className="flex-none inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#0369a1] dark:bg-[#38bdf8] hover:bg-[#075985] dark:hover:bg-[#0ea5e9] text-white dark:text-[#121110] font-semibold rounded-xs pt-btn-standard transition-colors shadow-xs cursor-pointer"
          >
            <span>Continue Part {activeStageIdx + 1}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      )}

      {/* Topics Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-2 border-b border-[#1c1917]/10 dark:border-neutral-800">
        <div className="flex items-center gap-2.5">
          <BookOpen className="w-6 h-6 text-[#0369a1] dark:text-[#38bdf8] stroke-[1.8]" />
          <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#1c1917] dark:text-[#f5f5f4] m-0 leading-none">
            Topics
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 bg-[#e7e5e4] dark:bg-[#252221] p-1 rounded-xs pt-btn-standard text-[13px] transition-colors">
          <button
            onClick={() => setFilterAuthor('all')}
            className={`px-3.5 py-1.5 rounded-xs transition-all cursor-pointer ${
              filterAuthor === 'all'
                ? 'bg-white dark:bg-[#1e1c1b] text-[#1c1917] dark:text-white shadow-xs font-semibold'
                : 'text-[#78716c] dark:text-[#a8a29e] hover:text-[#1c1917] dark:hover:text-white'
            }`}
          >
            All Topics ({MODULES_DATA.length})
          </button>
          <button
            onClick={() => setFilterAuthor('norman')}
            className={`px-3.5 py-1.5 rounded-xs transition-all cursor-pointer ${
              filterAuthor === 'norman'
                ? 'bg-white dark:bg-[#1e1c1b] text-[#1c1917] dark:text-white shadow-xs font-semibold'
                : 'text-[#78716c] dark:text-[#a8a29e] hover:text-[#1c1917] dark:hover:text-white'
            }`}
          >
            Don Norman (4)
          </button>
          <button
            onClick={() => setFilterAuthor('shneiderman')}
            className={`px-3.5 py-1.5 rounded-xs transition-all cursor-pointer ${
              filterAuthor === 'shneiderman'
                ? 'bg-white dark:bg-[#1e1c1b] text-[#1c1917] dark:text-white shadow-xs font-semibold'
                : 'text-[#78716c] dark:text-[#a8a29e] hover:text-[#1c1917] dark:hover:text-white'
            }`}
          >
            Ben Shneiderman (3)
          </button>
        </div>
      </div>

      {/* Module Cards with Staggered Entrance and Hover Feedback */}
      <div className="flex flex-col gap-6">
        <AnimatePresence mode="popLayout">
          {filteredModules.map((mod, index) => {
            const completedCount = (progress.completedStages[mod.id] || []).length;
            const totalModStages = mod.stages.length;
            const pct = Math.round((completedCount / totalModStages) * 100);
            const isComplete = completedCount === totalModStages;

            let statusText = `Not started — ${totalModStages} parts`;
            if (isComplete) {
              statusText = `Complete — all ${totalModStages} parts finished`;
            } else if (completedCount > 0) {
              statusText = `${completedCount} of ${totalModStages} parts complete (${pct}%)`;
            }

            return (
              <motion.div
                key={mod.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.22, delay: index * 0.04 }}
                whileHover={{ y: -2 }}
                onClick={() => onOpenModule(mod.id, 0)}
                className="bg-white dark:bg-[#1e1c1b] border border-[#1c1917]/12 dark:border-neutral-800 hover:border-[#0369a1]/50 dark:hover:border-[#38bdf8]/50 rounded-md p-6 sm:p-8 shadow-[0_1px_4px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.07)] transition-colors duration-150 cursor-pointer group"
              >
                {/* Kicker row */}
                <div className="flex items-center justify-between pt-kicker text-[#78716c] dark:text-[#a8a29e] mb-2.5">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0369a1] dark:bg-[#38bdf8]"></span>
                    {mod.kicker}
                  </span>
                  {isComplete && (
                    <span className="flex items-center gap-1 text-emerald-700 dark:text-emerald-400 font-semibold tracking-normal normal-case text-[13px] bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-xs border border-emerald-200 dark:border-emerald-800">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Completed
                    </span>
                  )}
                </div>

                {/* Title & Arrow Row */}
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1 min-w-0">
                    <h3 className="pt-mod-card-title text-[#1c1917] dark:text-[#f5f5f4] group-hover:text-[#0369a1] dark:group-hover:text-[#38bdf8] transition-colors">
                      {mod.title}
                    </h3>

                    <div className="pt-mod-citation mt-2 text-[#0369a1] dark:text-[#38bdf8]">
                      {mod.citation}
                    </div>
                  </div>

                  {/* Right Arrow Button */}
                  <div className="flex-none pt-1">
                    <div className="w-10 h-10 rounded-full bg-[#f0f9ff] dark:bg-[#0f2438] text-[#0369a1] dark:text-[#38bdf8] border border-[#0369a1]/20 dark:border-[#38bdf8]/30 flex items-center justify-center group-hover:bg-[#0369a1] dark:group-hover:bg-[#38bdf8] group-hover:text-white dark:group-hover:text-[#121110] transition-all">
                      <ArrowRight className="w-5 h-5 stroke-[1.8] group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Progress Bar Rule */}
                <div className="mt-6 pt-4 border-t border-[#1c1917]/8 dark:border-neutral-800">
                  <div className="h-2 bg-[#e7e5e4] dark:bg-[#252221] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-[#0369a1] dark:bg-[#38bdf8] rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between text-[14px] text-[#57534e] dark:text-[#a8a29e] mt-2.5">
                    <span>{mod.meta}</span>
                    <span className="font-medium text-[#1c1917] dark:text-[#f5f5f4]">{statusText}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};
