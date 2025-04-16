"use client";

import { create } from "zustand";

type HotelSearchParams = {
  cityCode: string;
  countryCode: string;
  checkIn: string;
  checkOut: string;
  adult: number;
  children: number;
  childAges: number[];
  selectedHotelCode: string;
};

type HotelStore = {
  hotelSearchParams: HotelSearchParams;
  hotel: any;
  room: any;
  setHotelSearchParams: (params: HotelSearchParams) => void;
  setHotel: (hotel: any) => void;
  setRoom: (room: any) => void;
  clearHotel: () => void;
  clearRoom: () => void;
};

export const useHotelStore = create<HotelStore>((set) => ({
  hotelSearchParams: null,
  hotel: null,
  room: null,
  setHotelSearchParams: (hotelSearchParams) => set({ hotelSearchParams }),
  setHotel: (hotel) => set({ hotel }),
  setRoom: (room) => set({ room }),
  clearHotel: () => set({ hotel: null }),
  clearRoom: () => set({ room: null }),
}));
