import { create } from "zustand";

type GlState = {
  blobVisible: boolean;
  setBlobVisible: (val: boolean) => void;
};

// ストア作成
// set：zustandが提供する状態を更新する関数
export const useGLStore = create<GlState>((set) => ({
  blobVisible: false, // 初期状態は非表示（Top入場で表示）
  setBlobVisible: (val) => set({ blobVisible: val }),
}));
