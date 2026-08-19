export interface ProgressState {
  completedStages: Record<string, string[]>; // moduleId -> array of stageIds
  currentModuleId: string;
  currentStageIndex: number;
  bookmarks: string[]; // array of stageIds
  notes: Record<string, string>; // stageId -> user note
  quizScores: Record<string, boolean>; // stageId -> passed
}

export interface ReadingSettings {
  autoAdvance: boolean;
  showSourceRefs: boolean;
  fontSize: 'sm' | 'md' | 'lg' | 'xl';
  narrationSpeed: number;
}
