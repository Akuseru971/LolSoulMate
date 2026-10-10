"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { RuneterraAct } from "@/lib/quiz/atmosphereActs";
import type { JourneyStage } from "@/lib/quiz/storage";

export interface AtmosphereSnapshot {
  stage: JourneyStage | "boot";
  quizIndex: number;
  act: RuneterraAct;
  /** Act V expands toward final questions */
  actProgress: number;
}

const defaultSnapshot: AtmosphereSnapshot = {
  stage: "landing",
  quizIndex: 0,
  act: 1,
  actProgress: 0,
};

type SetSnapshot = (next: AtmosphereSnapshot) => void;

const AtmosphereStateContext = createContext<AtmosphereSnapshot>(defaultSnapshot);
const AtmosphereSetContext = createContext<SetSnapshot>(() => {});

export function AtmosphereProvider({ children }: { children: ReactNode }) {
  const [snapshot, setSnapshot] = useState<AtmosphereSnapshot>(defaultSnapshot);
  const set = useCallback((next: AtmosphereSnapshot) => setSnapshot(next), []);
  const value = useMemo(() => snapshot, [snapshot]);
  return (
    <AtmosphereStateContext.Provider value={value}>
      <AtmosphereSetContext.Provider value={set}>{children}</AtmosphereSetContext.Provider>
    </AtmosphereStateContext.Provider>
  );
}

export function useAtmosphereSnapshot() {
  return useContext(AtmosphereStateContext);
}

export function useSetAtmosphereSnapshot() {
  return useContext(AtmosphereSetContext);
}
