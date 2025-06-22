import { create } from "zustand";

type AnimationState = {
  isAnimation: boolean;
  setIsAnimation: (val: boolean) => void;
};

export const useAnimationStore = create<AnimationState>((set) => ({
  isAnimation: true,
  setIsAnimation: (val) => set({ isAnimation: val }),
}));
