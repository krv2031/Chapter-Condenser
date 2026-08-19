import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, RotateCw, ChevronLeft, ChevronRight, CheckCircle, Brain } from 'lucide-react';
import { MODULES_DATA } from '../data/courseData';

export interface Flashcard {
  id: string;
  category: string;
  front: string;
  back: string;
  example: string;
}

const CORE_PRINCIPLES_FLASHCARDS: Flashcard[] = [
  {
    id: 'f1',
    category: 'Don Norman • Fundamentals',
    front: 'What is an Affordance?',
    back: 'A relationship between the physical properties of an object and the capabilities of an agent that determines what actions are possible.',
    example: 'A flat plate affords pushing; a chair affords sitting for an adult but not lifting for a toddler.'
  },
  {
    id: 'f2',
    category: 'Don Norman • Fundamentals',
    front: 'What is a Signifier?',
    back: 'Any perceivable indicator (mark, sound, or visual cue) that communicates where and how an action should take place.',
    example: 'A push plate on a door, an arrow on a touchscreen swipe interface, or footprints on snow.'
  },
  {
    id: 'f3',
    category: 'Don Norman • Interaction',
    front: 'What are the Gulfs of Execution and Evaluation?',
    back: 'Gulf of Execution: How hard is it to figure out what actions are possible? Gulf of Evaluation: How hard is it to tell what state the device is in and whether your goal was met?',
    example: 'Bridged by Feedforward (signifiers, mappings, constraints) and Feedback (system state indicators).'
  },
  {
    id: 'f4',
    category: 'Don Norman • Cognition',
    front: 'What are the Three Levels of Processing?',
    back: '1. Visceral (rapid, biological, automatic likes/dislikes)\n2. Behavioral (learned skills, expectations)\n3. Reflective (conscious, rationalization, memories, pride/guilt).',
    example: 'Reflective responses determine whether a user recommends a product or holds brand loyalty.'
  },
  {
    id: 'f5',
    category: 'Don Norman • Error Handling',
    front: 'What is the difference between a Slip and a Mistake?',
    back: 'A Slip occurs when a person intends one correct action but subconsciously executes another. A Mistake occurs when an inappropriate or incorrect goal is chosen.',
    example: 'Pouring orange juice into your coffee cup is a description slip; turning thermostat to 90° to heat faster is a mistake.'
  },
  {
    id: 'f6',
    category: 'Don Norman • Constraints',
    front: 'What are the Four Classes of Constraints?',
    back: '1. Physical (size, pegs, slots)\n2. Semantic (meaning of situation)\n3. Cultural (social conventions, red for stop)\n4. Logical (deduction by elimination).',
    example: 'The Lego motorcycle assembles with zero instructions because the 4 constraints eliminate all wrong choices.'
  },
  {
    id: 'f7',
    category: 'Don Norman • Error Prevention',
    front: 'What are the Three Forcing Functions?',
    back: '1. Interlock (forces sequence: microwave power cuts when door opens)\n2. Lockin (keeps operation active: prevents shutdown until files are saved)\n3. Lockout (prevents entry into dangerous state).',
    example: 'A car ignition switch requiring a key to start and requiring Park/Reverse to release key.'
  },
  {
    id: 'f8',
    category: 'Ben Shneiderman • Usability',
    front: 'What are the Five Measurable Usability Goals?',
    back: '1. Time to learn\n2. Speed of performance\n3. Rate of errors by users\n4. Retention over time\n5. Subjective satisfaction',
    example: 'Benchmark tasks measured across user groups in usability testing labs.'
  },
  {
    id: 'f9',
    category: 'Ben Shneiderman • Design Rules',
    front: 'Name the Eight Golden Rules of Interface Design',
    back: '1. Strive for consistency\n2. Seek universal usability\n3. Offer informative feedback\n4. Design dialogs to yield closure\n5. Prevent errors\n6. Permit easy reversal of actions\n7. Keep users in control\n8. Reduce short-term memory load',
    example: 'Amazon 4-stage checkout yielding definitive transaction closure.'
  },
  {
    id: 'f10',
    category: 'Universal Usability',
    front: 'What is the "Curb Cut Effect"?',
    back: 'The phenomenon where accessible features created for people with disabilities end up benefiting the entire population in multiple contexts.',
    example: 'Sidewalk ramps for wheelchairs help luggage travelers; closed captions help viewers in noisy transit.'
  }
];

interface FlashcardsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FlashcardsModal: React.FC<FlashcardsModalProps> = ({ isOpen, onClose }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('core');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredIds, setMasteredIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('pageturn_mastered_flashcards');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const allCards = useMemo(() => {
    if (selectedFilter === 'core') {
      return CORE_PRINCIPLES_FLASHCARDS;
    }

    const mod = MODULES_DATA.find(m => m.id === selectedFilter);
    if (!mod) return CORE_PRINCIPLES_FLASHCARDS;

    return mod.stages.map((st, idx) => ({
      id: `stage-${st.id}`,
      category: `${mod.kicker} • Part ${idx + 1}`,
      front: `${st.title}`,
      back: st.keyTakeaway || st.intro,
      example: st.examples && st.examples.length > 0 ? st.examples[0] : (st.points[0]?.text || ''),
    }));
  }, [selectedFilter]);

  const card = allCards[currentIndex] || allCards[0];
  const isMastered = masteredIds.includes(card.id);

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % allCards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + allCards.length) % allCards.length);
  };

  const toggleMastered = () => {
    const nextList = isMastered
      ? masteredIds.filter(id => id !== card.id)
      : [...masteredIds, card.id];
    setMasteredIds(nextList);
    try {
      localStorage.setItem('pageturn_mastered_flashcards', JSON.stringify(nextList));
    } catch {}
  };

  const handleFilterChange = (filterId: string) => {
    setSelectedFilter(filterId);
    setCurrentIndex(0);
    setIsFlipped(false);
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
            className="fixed inset-0 bg-[#1c1917]/50 backdrop-blur-xs"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative z-10 bg-white border border-[#1c1917]/15 rounded-md w-full max-w-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-6 flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#1c1917]/12 mb-3">
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-[#0369a1]" />
                <h3 className="font-semibold text-xl text-[#1c1917]">Study Flashcards</h3>
              </div>
              <button onClick={onClose} className="p-1 rounded hover:bg-neutral-100 cursor-pointer">
                <X className="w-5 h-5 text-neutral-500" />
              </button>
            </div>

            {/* Deck Selector Filter */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-3 text-xs font-medium">
              <button
                onClick={() => handleFilterChange('core')}
                className={`px-3 py-1 rounded-xs transition-all whitespace-nowrap cursor-pointer ${
                  selectedFilter === 'core' ? 'bg-[#0369a1] text-white font-semibold shadow-2xs' : 'bg-[#f5f5f4] text-[#57534e] hover:text-[#1c1917]'
                }`}
              >
                Core Principles (10)
              </button>
              {MODULES_DATA.map((m) => (
                <button
                  key={m.id}
                  onClick={() => handleFilterChange(m.id)}
                  className={`px-3 py-1 rounded-xs transition-all whitespace-nowrap cursor-pointer ${
                    selectedFilter === m.id ? 'bg-[#0369a1] text-white font-semibold shadow-2xs' : 'bg-[#f5f5f4] text-[#57534e] hover:text-[#1c1917]'
                  }`}
                >
                  {m.kicker} ({m.stages.length})
                </button>
              ))}
            </div>

            {/* Category & Progress */}
            <div className="flex items-baseline justify-between text-xs pt-kicker text-[#78716c] mb-2 font-semibold">
              <span className="line-clamp-1">{card.category}</span>
              <span className="flex-none font-mono">Card {currentIndex + 1} of {allCards.length}</span>
            </div>

            {/* Flashcard Area with Flip Interaction */}
            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className={`min-h-[250px] p-6 rounded-md border transition-all duration-200 cursor-pointer flex flex-col justify-between select-none ${
                isFlipped
                  ? 'bg-[#f0f9ff]/60 border-[#0369a1]/40 shadow-2xs'
                  : 'bg-[#fafaf9] border-[#1c1917]/15 hover:border-[#0369a1]/50 shadow-xs'
              }`}
            >
              <div className="flex items-center justify-between text-xs text-[#78716c] font-semibold pt-kicker">
                <span>{isFlipped ? 'ANSWER / SUMMARY' : 'QUESTION / PROMPT'}</span>
                <span className="flex items-center gap-1 text-[#0369a1]">
                  <RotateCw className="w-3 h-3" /> Click to flip
                </span>
              </div>

              <div className="my-auto py-4">
                <AnimatePresence mode="wait">
                  {!isFlipped ? (
                    <motion.div
                      key="front"
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                    >
                      <h4 className="text-xl sm:text-2xl font-semibold text-[#1c1917] leading-snug">
                        {card.front}
                      </h4>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="back"
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      className="space-y-3"
                    >
                      <p className="text-base text-[#1c1917] leading-relaxed">
                        {card.back}
                      </p>
                      {card.example && (
                        <div className="p-3 bg-white border border-[#0369a1]/20 rounded-xs text-xs text-[#075985] leading-relaxed">
                          <strong>Example:</strong> {card.example}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="text-right text-[11px] text-[#78716c]">
                {isMastered ? (
                  <span className="text-emerald-700 font-semibold flex items-center justify-end gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> Marked as Mastered
                  </span>
                ) : (
                  <span>Click bottom button to mark mastered</span>
                )}
              </div>
            </div>

            {/* Bottom Controls */}
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#1c1917]/12 gap-2">
              <button
                onClick={handlePrev}
                className="px-3.5 py-2 rounded-xs border border-[#1c1917]/15 bg-white hover:bg-neutral-50 text-[#1c1917] text-xs pt-btn-standard flex items-center gap-1 cursor-pointer transition-colors shadow-2xs"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev</span>
              </button>

              <button
                onClick={toggleMastered}
                className={`px-4 py-2 rounded-xs text-xs pt-btn-standard flex items-center gap-1.5 cursor-pointer transition-all ${
                  isMastered
                    ? 'bg-emerald-50 border border-emerald-300 text-emerald-800 hover:bg-emerald-100'
                    : 'bg-[#f5f5f4] hover:bg-[#e7e5e4] text-[#1c1917] border border-[#1c1917]/10'
                }`}
              >
                <CheckCircle className={`w-3.5 h-3.5 ${isMastered ? 'text-emerald-600' : 'text-[#78716c]'}`} />
                <span>{isMastered ? 'Mastered' : 'Mark Mastered'}</span>
              </button>

              <button
                onClick={handleNext}
                className="px-4 py-2 rounded-xs bg-[#0369a1] hover:bg-[#075985] text-white text-xs pt-btn-standard flex items-center gap-1 cursor-pointer transition-colors shadow-2xs"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
