"use client";

import { create } from "zustand";

type HotelStore = {
  hotel: any;
  room: any;
  setHotel: (hotel: any) => void;
  setRoom: (room: any) => void;
  clearHotel: () => void;
  clearRoom: () => void;
};

export const useHotelStore = create<HotelStore>((set) => ({
  hotel: null,
  room: null,
  setHotel: (hotel) => set({ hotel }),
  setRoom: (room) => set({ room }),
  clearHotel: () => set({ hotel: null }),
  clearRoom: () => set({ room: null }),
}));
