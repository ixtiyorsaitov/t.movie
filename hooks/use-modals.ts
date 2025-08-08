import { create } from "zustand";

type ModalType = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const useAuthModal = create<ModalType>()((set) => ({
  open: true,
  setOpen: (open) => set({ open }),
}));
