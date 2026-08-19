import React from 'react';
import { BookOpen, Home, Search, BookMarked, Settings, Layers, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  onNavigateHome: () => void;
  onOpenSearch: () => void;
  onOpenFlashcards: () => void;
  onOpenNotes: () => void;
  onOpenSettings: () => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  bookmarkCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  onNavigateHome,
  onOpenSearch,
  onOpenFlashcards,
  onOpenNotes,
  onOpenSettings,
  darkMode,
  onToggleDarkMode,
  bookmarkCount,
}) => {
  return (
    <header className="border-b border-[#1c1917]/12 dark:border-neutral-800 bg-[#f8f7f7]/95 dark:bg-[#181615]/95 backdrop-blur-xs sticky top-0 z-40 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Brand */}
        <div 
          onClick={onNavigateHome}
          className="flex items-center gap-2.5 cursor-pointer group select-none"
        >
          <div className="w-8 h-8 rounded-xs bg-[#0369a1] dark:bg-[#38bdf8] text-white dark:text-[#121110] flex items-center justify-center font-semibold text-sm shadow-xs group-hover:bg-[#075985] dark:group-hover:bg-[#0ea5e9] transition-colors">
            <BookOpen className="w-4 h-4" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-semibold text-[22px] tracking-[-0.015em] text-[#1c1917] dark:text-[#f5f5f4] group-hover:text-[#0369a1] dark:group-hover:text-[#38bdf8] transition-colors">
              PageTurn
            </span>
          </div>
        </div>

        {/* Navigation Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Home Button */}
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-[#252221] border border-[#1c1917]/15 dark:border-neutral-700 text-[#1c1917] dark:text-[#f5f5f4] rounded-xs pt-btn-standard hover:border-[#0369a1] dark:hover:border-[#38bdf8] hover:text-[#0369a1] dark:hover:text-[#38bdf8] hover:bg-[#f0f9ff]/40 dark:hover:bg-[#0f2438] transition-all cursor-pointer shadow-2xs"
            title="Go to Chapter bites"
          >
            <Home className="w-3.5 h-3.5 text-[#0369a1] dark:text-[#38bdf8]" />
            <span>Home</span>
          </button>

          {/* Search Button */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-[#252221] border border-[#1c1917]/15 dark:border-neutral-700 text-[#1c1917] dark:text-[#f5f5f4] rounded-xs pt-btn-standard hover:border-[#0369a1] dark:hover:border-[#38bdf8] hover:text-[#0369a1] dark:hover:text-[#38bdf8] hover:bg-[#f0f9ff]/40 dark:hover:bg-[#0f2438] transition-all cursor-pointer shadow-2xs"
            title="Search Topics"
          >
            <Search className="w-3.5 h-3.5 opacity-70" />
            <span className="hidden sm:inline">Search</span>
          </button>

          {/* Flashcards */}
          <button
            onClick={onOpenFlashcards}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-[#252221] border border-[#1c1917]/15 dark:border-neutral-700 text-[#1c1917] dark:text-[#f5f5f4] rounded-xs pt-btn-standard hover:border-[#0369a1] dark:hover:border-[#38bdf8] hover:text-[#0369a1] dark:hover:text-[#38bdf8] hover:bg-[#f0f9ff]/40 dark:hover:bg-[#0f2438] transition-all cursor-pointer shadow-2xs"
            title="Flashcards"
          >
            <Layers className="w-3.5 h-3.5 opacity-70" />
            <span className="hidden sm:inline">Flashcards</span>
          </button>

          {/* Notes */}
          <button
            onClick={onOpenNotes}
            className="relative flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-[#252221] border border-[#1c1917]/15 dark:border-neutral-700 text-[#1c1917] dark:text-[#f5f5f4] rounded-xs pt-btn-standard hover:border-[#0369a1] dark:hover:border-[#38bdf8] hover:text-[#0369a1] dark:hover:text-[#38bdf8] hover:bg-[#f0f9ff]/40 dark:hover:bg-[#0f2438] transition-all cursor-pointer shadow-2xs"
            title="Study Notes & Bookmarks"
          >
            <BookMarked className="w-3.5 h-3.5 opacity-70" />
            <span className="hidden sm:inline">Notes</span>
            {bookmarkCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-[#0369a1] dark:bg-[#38bdf8] text-white dark:text-[#121110] text-[10px] flex items-center justify-center font-semibold">
                {bookmarkCount}
              </span>
            )}
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={onToggleDarkMode}
            className="p-2 bg-white dark:bg-[#252221] border border-[#1c1917]/15 dark:border-neutral-700 text-[#57534e] dark:text-[#d6d3d1] hover:text-[#1c1917] dark:hover:text-white hover:border-[#0369a1] dark:hover:border-[#38bdf8] rounded-xs transition-all cursor-pointer shadow-2xs"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Settings */}
          <button
            onClick={onOpenSettings}
            className="p-2 bg-white dark:bg-[#252221] border border-[#1c1917]/15 dark:border-neutral-700 text-[#57534e] dark:text-[#d6d3d1] hover:text-[#1c1917] dark:hover:text-white hover:border-[#0369a1] dark:hover:border-[#38bdf8] rounded-xs transition-all cursor-pointer shadow-2xs"
            title="Settings"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
