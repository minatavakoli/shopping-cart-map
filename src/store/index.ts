import create from "zustand";
import { persist } from "zustand/middleware";
import { OrderStoreTypes } from "./types";

export const useOrderStore = create<OrderStoreTypes>()(
  persist(
    (set) => ({
      orders: [],
      buyProduct: (data) =>
        set((state) => ({ orders: [...state.orders, data] })),
    }),
    {
      name: "order-storage",
    }
  )
);
