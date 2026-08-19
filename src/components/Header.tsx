import React from 'react';
import { BookOpen, Search, BookMarked, Settings, Layers } from 'lucide-react';

interface HeaderProps {
  onNavigateHome: () => void;
  onOpenSearch: () => void;
  onOpenFlashcards: () => void;
  onOpenNotes: () => void;
  onOpenSettings: () => void;
  bookmarkCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  onNavigateHome,
  onOpenSearch,
  onOpenFlashcards,
  onOpenNotes,
  onOpenSettings,
  bookmarkCount,
}) => {
  return (
    <header className="border-b border-[#201e1d]/12 bg-[#f8f7f7]/95 backdrop-blur-xs sticky top-0 z-40 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Brand */}
        <div 
          onClick={onNavigateHome}
          className="flex items-center gap-2.5 cursor-pointer group select-none"
        >
          <div className="w-8 h-8 rounded-xs bg-[#006786] text-white flex items-center justify-center font-semibold text-sm shadow-xs group-hover:bg-[#004961] transition-colors">
            <BookOpen className="w-4 h-4" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-semibold text-[22px] tracking-[-0.015em] text-[#201e1d] group-hover:text-[#006786] transition-colors">
              PageTurn
            </span>
            <span className="pt-kicker text-[#7d7979] text-[11px] hidden sm:inline">
              Reading, condensed
            </span>
          </div>
        </div>

        {/* Navigation Actions (pt-btn-standard: 14px, weight 600, line-height 1.2) */}
        <div className="flex items-center gap-2">
          {/* Search Button */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#201e1d]/15 text-[#201e1d] rounded-xs pt-btn-standard hover:border-[#006786] hover:text-[#006786] hover:bg-[#e9f8ff]/40 transition-all cursor-pointer shadow-2xs"
            title="Search Topics"
          >
            <Search className="w-3.5 h-3.5 opacity-70" />
            <span>Search</span>
          </button>

          {/* Flashcards */}
          <button
            onClick={onOpenFlashcards}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#201e1d]/15 text-[#201e1d] rounded-xs pt-btn-standard hover:border-[#006786] hover:text-[#006786] hover:bg-[#e9f8ff]/40 transition-all cursor-pointer shadow-2xs"
            title="Flashcards"
          >
            <Layers className="w-3.5 h-3.5 opacity-70" />
            <span className="hidden sm:inline">Flashcards</span>
          </button>

          {/* Notes */}
          <button
            onClick={onOpenNotes}
            className="relative flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#201e1d]/15 text-[#201e1d] rounded-xs pt-btn-standard hover:border-[#006786] hover:text-[#006786] hover:bg-[#e9f8ff]/40 transition-all cursor-pointer shadow-2xs"
            title="Study Notes & Bookmarks"
          >
            <BookMarked className="w-3.5 h-3.5 opacity-70" />
            <span className="hidden sm:inline">Notes</span>
            {bookmarkCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-[#006786] text-white text-[10px] flex items-center justify-center font-semibold">
                {bookmarkCount}
              </span>
            )}
          </button>

          {/* Settings */}
          <button
            onClick={onOpenSettings}
            className="p-1.5 bg-white border border-[#201e1d]/15 text-[#605d5d] hover:text-[#201e1d] hover:border-[#006786] rounded-xs transition-all cursor-pointer shadow-2xs"
            title="Settings"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
