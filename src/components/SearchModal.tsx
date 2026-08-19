import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, BookOpen, ArrowRight, Sparkles, BookCheck } from 'lucide-react';
import { MODULES_DATA, Stage, Module } from '../data/courseData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (moduleId: string, stageIndex: number) => void;
}

const POPULAR_SEARCH_TOPICS = [
  { label: "Affordances & Signifiers", query: "affordance" },
  { label: "Gulf of Execution", query: "gulf" },
  { label: "Slips vs Mistakes", query: "slip" },
  { label: "Natural Mapping", query: "mapping" },
  { label: "8 Golden Rules", query: "golden rules" },
  { label: "Forcing Functions", query: "forcing" },
  { label: "Universal Usability", query: "universal" },
  { label: "Curb Cut Effect", query: "curb cut" },
  { label: "Norman Doors", query: "door" },
  { label: "Feedback & Feedforward", query: "feedback" },
];

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectResult,
}) => {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'norman' | 'shneiderman'>('all');

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();

    const results: { 
      module: Module; 
      stage: Stage; 
      stageIndex: number; 
      matchedSection: string;
      matchedSnippet: string; 
    }[] = [];

    MODULES_DATA.forEach((mod) => {
      if (activeFilter === 'norman' && !mod.citation.includes('Norman')) return;
      if (activeFilter === 'shneiderman' && !mod.citation.includes('Shneiderman')) return;

      mod.stages.forEach((st, sIdx) => {
        let section = '';
        let snippet = '';

        if (st.title.toLowerCase().includes(q)) {
          section = 'Stage Title';
          snippet = st.title;
        } else if (st.intro.toLowerCase().includes(q)) {
          section = 'Overview';
          snippet = st.intro;
        } else if (st.keyTakeaway && st.keyTakeaway.toLowerCase().includes(q)) {
          section = 'Key Takeaway';
          snippet = st.keyTakeaway;
        } else {
          const ptMatch = st.points.find(p => p.head.toLowerCase().includes(q) || p.text.toLowerCase().includes(q));
          if (ptMatch) {
            section = `Point: ${ptMatch.head}`;
            snippet = ptMatch.text;
          } else {
            const exMatch = st.examples.find(e => e.toLowerCase().includes(q));
            if (exMatch) {
              section = 'Case Study';
              snippet = exMatch;
            }
          }
        }

        if (snippet) {
          results.push({
            module: mod,
            stage: st,
            stageIndex: sIdx,
            matchedSection: section,
            matchedSnippet: snippet,
          });
        }
      });
    });

    return results;
  }, [query, activeFilter]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 pt-12 sm:pt-20">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1c1917]/50 backdrop-blur-xs"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative z-10 bg-white border border-[#1c1917]/15 rounded-md w-full max-w-2xl shadow-[0_12px_40px_rgba(0,0,0,0.16)] overflow-hidden flex flex-col max-h-[85vh]"
          >
            {/* Search Header Bar */}
            <div className="p-4 sm:p-5 border-b border-[#1c1917]/12 bg-[#fafaf9]">
              <div className="flex items-center gap-3 bg-white border border-[#1c1917]/15 focus-within:border-[#0369a1] rounded-sm px-3.5 py-2.5 shadow-2xs transition-colors">
                <Search className="w-5 h-5 text-[#0369a1] flex-none" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search concepts, design principles, or examples..."
                  autoFocus
                  className="w-full bg-transparent border-none text-base outline-none text-[#1c1917] placeholder:text-[#a8a29e]"
                />
                {query && (
                  <button 
                    onClick={() => setQuery('')} 
                    className="p-1 hover:bg-neutral-100 rounded text-neutral-400 hover:text-[#1c1917] cursor-pointer"
                    title="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
                <button 
                  onClick={onClose} 
                  className="px-2 py-1 text-xs font-semibold uppercase tracking-wider text-[#78716c] hover:text-[#1c1917] bg-[#f5f5f4] hover:bg-[#e7e5e4] rounded-xs cursor-pointer transition-colors"
                >
                  ESC
                </button>
              </div>

              {/* Quick Scope Filter Chips */}
              <div className="flex items-center gap-2 mt-3 pt-btn-standard text-[12px]">
                <span className="text-[#78716c] text-[11px] uppercase tracking-wider font-semibold">Scope:</span>
                <button
                  onClick={() => setActiveFilter('all')}
                  className={`px-2.5 py-1 rounded-xs transition-colors cursor-pointer ${
                    activeFilter === 'all'
                      ? 'bg-[#0369a1] text-white shadow-2xs font-semibold'
                      : 'bg-[#f5f5f4] text-[#57534e] hover:bg-[#e7e5e4]'
                  }`}
                >
                  All Topics
                </button>
                <button
                  onClick={() => setActiveFilter('norman')}
                  className={`px-2.5 py-1 rounded-xs transition-colors cursor-pointer ${
                    activeFilter === 'norman'
                      ? 'bg-[#0369a1] text-white shadow-2xs font-semibold'
                      : 'bg-[#f5f5f4] text-[#57534e] hover:bg-[#e7e5e4]'
                  }`}
                >
                  Don Norman
                </button>
                <button
                  onClick={() => setActiveFilter('shneiderman')}
                  className={`px-2.5 py-1 rounded-xs transition-colors cursor-pointer ${
                    activeFilter === 'shneiderman'
                      ? 'bg-[#0369a1] text-white shadow-2xs font-semibold'
                      : 'bg-[#f5f5f4] text-[#57534e] hover:bg-[#e7e5e4]'
                  }`}
                >
                  Ben Shneiderman
                </button>
              </div>
            </div>

            {/* Search Body Area */}
            <div className="overflow-y-auto p-4 sm:p-5 flex-1">
              {query.trim() === '' ? (
                <div className="py-4">
                  <div className="flex items-center gap-2 pt-kicker text-[#78716c] mb-3">
                    <Sparkles className="w-3.5 h-3.5 text-[#0369a1]" />
                    <span>Suggested Topics & Core Concepts</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {POPULAR_SEARCH_TOPICS.map((topic, i) => (
                      <button
                        key={i}
                        onClick={() => setQuery(topic.query)}
                        className="px-3 py-1.5 bg-[#f5f5f4] hover:bg-[#f0f9ff] hover:border-[#0369a1]/40 border border-[#1c1917]/10 rounded-xs text-[13px] text-[#1c1917] hover:text-[#0369a1] transition-all cursor-pointer shadow-2xs flex items-center gap-1.5"
                      >
                        <span>{topic.label}</span>
                      </button>
                    ))}
                  </div>

                  <div className="p-4 bg-[#f0f9ff]/70 border border-[#0369a1]/20 rounded-sm text-xs text-[#0c4a6e] leading-relaxed">
                    <strong>Tip:</strong> Search directly for case studies (e.g. <em>"thermostat"</em>, <em>"Lego motorcycle"</em>, <em>"glass door"</em>) or foundational theories (e.g. <em>"mental models"</em>, <em>"interlock"</em>).
                  </div>
                </div>
              ) : searchResults.length === 0 ? (
                <div className="text-center py-12 px-4">
                  <BookOpen className="w-9 h-9 mx-auto mb-3 text-[#a8a29e]" />
                  <h4 className="text-lg font-semibold text-[#1c1917]">No matching stages found for "{query}"</h4>
                  <p className="text-sm text-[#78716c] mt-1.5 max-w-sm mx-auto">
                    Try searching for a different keyword like "affordance", "constraint", "feedback", or "usability".
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {searchResults.map((res, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.15, delay: i * 0.03 }}
                      onClick={() => {
                        onSelectResult(res.module.id, res.stageIndex);
                        onClose();
                      }}
                      className="bg-white hover:bg-[#f0f9ff]/40 border border-[#1c1917]/12 hover:border-[#0369a1]/50 rounded-sm p-4 cursor-pointer transition-all duration-150 group shadow-2xs hover:shadow-xs"
                    >
                      <div className="flex items-center justify-between gap-2 text-[12px]">
                        <div className="flex items-center gap-2 pt-kicker text-[#0369a1]">
                          <span>{res.module.kicker}</span>
                          <span>•</span>
                          <span>Part {res.stageIndex + 1}</span>
                        </div>
                        <span className="text-[11px] font-medium text-[#78716c] bg-[#f5f5f4] px-2 py-0.5 rounded-xs">
                          {res.matchedSection}
                        </span>
                      </div>

                      <h4 className="text-[17px] font-semibold text-[#1c1917] mt-1 group-hover:text-[#0369a1] transition-colors leading-snug">
                        {res.stage.title}
                      </h4>

                      <p className="text-[13px] text-[#57534e] line-clamp-2 mt-1.5 leading-relaxed bg-[#fafaf9] p-2 rounded-xs border border-[#1c1917]/6">
                        {res.matchedSnippet}
                      </p>

                      <div className="flex items-center justify-between mt-2 pt-1 text-[12px] text-[#78716c]">
                        <span className="italic">{res.module.citation}</span>
                        <span className="text-[#0369a1] font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                          <span>Jump to part</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-3.5 bg-[#fafaf9] border-t border-[#1c1917]/12 text-xs text-[#78716c] flex items-center justify-between">
              <span>{searchResults.length > 0 ? `${searchResults.length} parts matching "${query}"` : 'Select a part to read'}</span>
              <span className="flex items-center gap-1">
                <BookCheck className="w-3.5 h-3.5 text-[#0369a1]" />
                <span>Click any result to jump directly to reading</span>
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
