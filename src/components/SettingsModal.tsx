import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Settings, RotateCcw, Volume2, Check, AlertTriangle, Moon, Sun } from 'lucide-react';
import { ReadingSettings } from '../types';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: ReadingSettings;
  onUpdateSettings: (newSettings: Partial<ReadingSettings>) => void;
  onResetProgress: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  settings,
  onUpdateSettings,
  onResetProgress,
}) => {
  const [confirmReset, setConfirmReset] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);

  const handleExecuteReset = () => {
    onResetProgress();
    setConfirmReset(false);
    setResetSuccess(true);
    setTimeout(() => {
      setResetSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative z-10 bg-white dark:bg-[#1e1c1b] border border-[#1c1917]/15 dark:border-neutral-800 rounded-md w-full max-w-md shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-6 sm:p-7 flex flex-col transition-colors"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3.5 border-b border-[#1c1917]/12 dark:border-neutral-800 mb-5">
              <div className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-[#0369a1] dark:text-[#38bdf8]" />
                <h3 className="text-xl font-semibold text-[#1c1917] dark:text-[#f5f5f4]">Reader Settings</h3>
              </div>
              <button onClick={onClose} className="p-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer">
                <X className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
              </button>
            </div>

            {/* Settings Options */}
            <div className="space-y-6">
              {/* Dark Mode Toggle */}
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-[#1c1917] dark:text-[#f5f5f4] flex items-center gap-1.5">
                    {settings.darkMode ? <Moon className="w-4 h-4 text-amber-400" /> : <Sun className="w-4 h-4 text-amber-500" />}
                    <span>Dark Theme</span>
                  </div>
                  <p className="text-xs text-[#57534e] dark:text-[#a8a29e]">Switch between light and high-contrast dark reading modes.</p>
                </div>
                <button
                  onClick={() => onUpdateSettings({ darkMode: !settings.darkMode })}
                  className={`w-11 h-6 rounded-full transition-colors p-0.5 cursor-pointer ${
                    settings.darkMode ? 'bg-[#38bdf8]' : 'bg-[#d6d3d1] dark:bg-neutral-700'
                  }`}
                >
                  <motion.div
                    className="w-5 h-5 rounded-full bg-white dark:bg-[#121110] shadow-xs"
                    animate={{ x: settings.darkMode ? 20 : 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                </button>
              </div>

              {/* Auto Advance Toggle */}
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-[#1c1917] dark:text-[#f5f5f4]">Auto-Advance to Next Part</div>
                  <p className="text-xs text-[#57534e] dark:text-[#a8a29e]">Automatically progress to the next part when completing a reading.</p>
                </div>
                <button
                  onClick={() => onUpdateSettings({ autoAdvance: !settings.autoAdvance })}
                  className={`w-11 h-6 rounded-full transition-colors p-0.5 cursor-pointer ${
                    settings.autoAdvance ? 'bg-[#0369a1] dark:bg-[#38bdf8]' : 'bg-[#d6d3d1] dark:bg-neutral-700'
                  }`}
                >
                  <motion.div
                    className="w-5 h-5 rounded-full bg-white dark:bg-[#121110] shadow-xs"
                    animate={{ x: settings.autoAdvance ? 20 : 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                </button>
              </div>

              {/* Show Source References Toggle */}
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-[#1c1917] dark:text-[#f5f5f4]">Show Source References</div>
                  <p className="text-xs text-[#57534e] dark:text-[#a8a29e]">Display chapter and page numbers from Don Norman & Ben Shneiderman.</p>
                </div>
                <button
                  onClick={() => onUpdateSettings({ showSourceRefs: !settings.showSourceRefs })}
                  className={`w-11 h-6 rounded-full transition-colors p-0.5 cursor-pointer ${
                    settings.showSourceRefs ? 'bg-[#0369a1] dark:bg-[#38bdf8]' : 'bg-[#d6d3d1] dark:bg-neutral-700'
                  }`}
                >
                  <motion.div
                    className="w-5 h-5 rounded-full bg-white dark:bg-[#121110] shadow-xs"
                    animate={{ x: settings.showSourceRefs ? 20 : 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                </button>
              </div>

              {/* Narration Default Speed */}
              <div>
                <div className="text-sm font-semibold text-[#1c1917] dark:text-[#f5f5f4] mb-2 flex items-center gap-1.5">
                  <Volume2 className="w-4 h-4 text-[#0369a1] dark:text-[#38bdf8]" />
                  Default Narration Speech Rate
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[1.0, 1.25, 1.5].map((rate) => (
                    <button
                      key={rate}
                      onClick={() => onUpdateSettings({ narrationSpeed: rate })}
                      className={`py-2 rounded-xs text-xs font-semibold cursor-pointer transition-colors ${
                        settings.narrationSpeed === rate
                          ? 'bg-[#0369a1] dark:bg-[#38bdf8] text-white dark:text-[#121110] shadow-2xs'
                          : 'bg-[#f5f5f4] dark:bg-[#252221] text-[#444141] dark:text-[#d6d3d1] hover:bg-[#e7e5e4] dark:hover:bg-neutral-700'
                      }`}
                    >
                      {rate}x Speed
                    </button>
                  ))}
                </div>
              </div>

              {/* Reset All Progress Option */}
              <div className="pt-5 border-t border-[#1c1917]/12 dark:border-neutral-800">
                {resetSuccess ? (
                  <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 rounded-xs text-emerald-900 dark:text-emerald-300 text-xs font-medium flex items-center justify-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>All progress, quiz scores, and notes have been reset!</span>
                  </div>
                ) : !confirmReset ? (
                  <button
                    onClick={() => setConfirmReset(true)}
                    className="w-full py-2.5 bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 dark:hover:bg-rose-900/50 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300 rounded-xs text-xs pt-btn-standard flex items-center justify-center gap-2 cursor-pointer transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset All Progress & Notes</span>
                  </button>
                ) : (
                  <div className="p-3.5 bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 rounded-xs space-y-2.5">
                    <div className="text-xs text-rose-900 dark:text-rose-200 font-medium flex items-start gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-rose-600 dark:text-rose-400 flex-none mt-0.5" />
                      <span>Are you sure? This will clear all completed parts, bookmarks, and notes.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleExecuteReset}
                        className="flex-1 py-1.5 bg-rose-700 hover:bg-rose-800 text-white rounded-xs text-xs font-semibold cursor-pointer transition-colors"
                      >
                        Yes, Reset Everything
                      </button>
                      <button
                        onClick={() => setConfirmReset(false)}
                        className="px-3 py-1.5 bg-white dark:bg-[#1e1c1b] border border-[#1c1917]/20 dark:border-neutral-700 text-[#1c1917] dark:text-[#f5f5f4] hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xs text-xs font-medium cursor-pointer"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Done Button */}
            <div className="mt-6 pt-3 border-t border-[#1c1917]/12 dark:border-neutral-800 flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-2 bg-[#0369a1] dark:bg-[#38bdf8] hover:bg-[#075985] dark:hover:bg-[#0ea5e9] text-white dark:text-[#121110] font-semibold rounded-xs pt-btn-standard text-xs cursor-pointer transition-colors shadow-2xs"
              >
                Done
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
