import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Bookmark, FileText, Trash2, ArrowRight } from 'lucide-react';
import { ProgressState } from '../types';
import { MODULES_DATA } from '../data/courseData';

interface NotesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  progress: ProgressState;
  onSelectStage: (moduleId: string, stageIndex: number) => void;
  onDeleteNote: (stageId: string) => void;
}

export const NotesDrawer: React.FC<NotesDrawerProps> = ({
  isOpen,
  onClose,
  progress,
  onSelectStage,
  onDeleteNote,
}) => {
  const [activeTab, setActiveTab] = useState<'bookmarks' | 'notes'>('bookmarks');

  const bookmarkedStages = React.useMemo(() => {
    const list: { moduleId: string; stageIndex: number; title: string; kicker: string; source: string }[] = [];
    MODULES_DATA.forEach((mod) => {
      mod.stages.forEach((st, idx) => {
        if (progress.bookmarks.includes(st.id)) {
          list.push({
            moduleId: mod.id,
            stageIndex: idx,
            title: st.title,
            kicker: mod.kicker,
            source: st.source,
          });
        }
      });
    });
    return list;
  }, [progress.bookmarks]);

  const notesList = React.useMemo(() => {
    const list: { stageId: string; moduleId: string; stageIndex: number; title: string; kicker: string; note: string }[] = [];
    MODULES_DATA.forEach((mod) => {
      mod.stages.forEach((st, idx) => {
        const note = progress.notes[st.id];
        if (note && note.trim().length > 0) {
          list.push({
            stageId: st.id,
            moduleId: mod.id,
            stageIndex: idx,
            title: st.title,
            kicker: mod.kicker,
            note: note,
          });
        }
      });
    });
    return list;
  }, [progress.notes]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
          />

          {/* Drawer Container */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="relative z-10 w-full max-w-md bg-white dark:bg-[#1e1c1b] border-l border-[#1c1917]/15 dark:border-neutral-800 h-full shadow-[0_0_40px_rgba(0,0,0,0.15)] flex flex-col transition-colors"
          >
            {/* Header */}
            <div className="p-5 border-b border-[#1c1917]/12 dark:border-neutral-800 flex items-center justify-between bg-[#fafaf9] dark:bg-[#181615]">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#0369a1] dark:text-[#38bdf8]" />
                <h3 className="font-semibold text-lg text-[#1c1917] dark:text-[#f5f5f4]">Notebook & Bookmarks</h3>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-500 dark:text-neutral-400 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-[#1c1917]/12 dark:border-neutral-800 bg-[#f5f5f4] dark:bg-[#181615] text-xs font-semibold">
              <button
                onClick={() => setActiveTab('bookmarks')}
                className={`flex-1 py-3 px-4 flex items-center justify-center gap-2 border-b-2 transition-all cursor-pointer ${
                  activeTab === 'bookmarks'
                    ? 'border-[#0369a1] dark:border-[#38bdf8] text-[#0369a1] dark:text-[#38bdf8] bg-white dark:bg-[#1e1c1b]'
                    : 'border-transparent text-[#78716c] dark:text-[#a8a29e] hover:text-[#1c1917] dark:hover:text-white'
                }`}
              >
                <Bookmark className="w-3.5 h-3.5" />
                <span>Bookmarks ({bookmarkedStages.length})</span>
              </button>
              <button
                onClick={() => setActiveTab('notes')}
                className={`flex-1 py-3 px-4 flex items-center justify-center gap-2 border-b-2 transition-all cursor-pointer ${
                  activeTab === 'notes'
                    ? 'border-[#0369a1] dark:border-[#38bdf8] text-[#0369a1] dark:text-[#38bdf8] bg-white dark:bg-[#1e1c1b]'
                    : 'border-transparent text-[#78716c] dark:text-[#a8a29e] hover:text-[#1c1917] dark:hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Notes ({notesList.length})</span>
              </button>
            </div>

            {/* Content List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {activeTab === 'bookmarks' ? (
                bookmarkedStages.length === 0 ? (
                  <div className="text-center py-16 px-4 text-[#78716c] dark:text-[#a8a29e]">
                    <Bookmark className="w-8 h-8 mx-auto mb-2 opacity-30" />
                    <p className="text-sm">No bookmarked parts yet.</p>
                    <p className="text-xs mt-1 text-[#a8a29e] dark:text-neutral-500">Click the bookmark icon while reading any part to save it here.</p>
                  </div>
                ) : (
                  bookmarkedStages.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.15, delay: idx * 0.03 }}
                      onClick={() => {
                        onSelectStage(item.moduleId, item.stageIndex);
                        onClose();
                      }}
                      className="p-3.5 bg-white dark:bg-[#252221] border border-[#1c1917]/12 dark:border-neutral-700 hover:border-[#0369a1]/50 dark:hover:border-[#38bdf8]/50 rounded-sm cursor-pointer transition-all hover:bg-[#f0f9ff]/40 dark:hover:bg-[#0f2438]/60 group shadow-2xs"
                    >
                      <div className="flex items-center justify-between text-[11px] pt-kicker text-[#0369a1] dark:text-[#38bdf8]">
                        <span>{item.kicker} • Part {item.stageIndex + 1}</span>
                        <span className="text-[#78716c] dark:text-[#a8a29e]">{item.source}</span>
                      </div>
                      <h4 className="text-sm font-semibold text-[#1c1917] dark:text-[#f5f5f4] mt-1 group-hover:text-[#0369a1] dark:group-hover:text-[#38bdf8] transition-colors leading-snug">
                        {item.title}
                      </h4>
                      <div className="flex justify-end mt-2 pt-1">
                        <span className="text-xs font-semibold text-[#0369a1] dark:text-[#38bdf8] flex items-center gap-1">
                          <span>Open part</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </div>
                    </motion.div>
                  ))
                )
              ) : notesList.length === 0 ? (
                <div className="text-center py-16 px-4 text-[#78716c] dark:text-[#a8a29e]">
                  <FileText className="w-8 h-8 mx-auto mb-2 opacity-30" />
                  <p className="text-sm">No notes written yet.</p>
                  <p className="text-xs mt-1 text-[#a8a29e] dark:text-neutral-500">Use the "Study Notes & Reflections" section on any part to take notes.</p>
                </div>
              ) : (
                notesList.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.15, delay: idx * 0.03 }}
                    className="p-3.5 bg-white dark:bg-[#252221] border border-[#1c1917]/12 dark:border-neutral-700 rounded-sm shadow-2xs space-y-2"
                  >
                    <div className="flex items-center justify-between text-[11px] pt-kicker text-[#0369a1] dark:text-[#38bdf8]">
                      <span>{item.kicker} • Part {item.stageIndex + 1}</span>
                      <button
                        onClick={() => onDeleteNote(item.stageId)}
                        className="text-neutral-400 hover:text-rose-600 transition-colors p-1 cursor-pointer"
                        title="Delete note"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <h4
                      onClick={() => {
                        onSelectStage(item.moduleId, item.stageIndex);
                        onClose();
                      }}
                      className="text-sm font-semibold text-[#1c1917] dark:text-[#f5f5f4] hover:text-[#0369a1] dark:hover:text-[#38bdf8] cursor-pointer transition-colors leading-snug"
                    >
                      {item.title}
                    </h4>

                    <div className="p-2.5 bg-[#fafaf9] dark:bg-[#1e1c1b] rounded-xs border border-[#1c1917]/8 dark:border-neutral-800 text-xs text-[#444141] dark:text-[#d6d3d1] whitespace-pre-wrap leading-relaxed">
                      {item.note}
                    </div>

                    <div className="flex justify-end pt-1">
                      <button
                        onClick={() => {
                          onSelectStage(item.moduleId, item.stageIndex);
                          onClose();
                        }}
                        className="text-xs font-semibold text-[#0369a1] dark:text-[#38bdf8] hover:text-[#075985] dark:hover:text-[#7dd3fc] flex items-center gap-1 cursor-pointer"
                      >
                        <span>Jump to part</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
