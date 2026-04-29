import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type WidgetItem = {
  id: string;
  type: string;
  config?: Record<string, any>;
};

interface DashboardState {
  widgets: WidgetItem[];
  addWidget: (type: string) => void;
  removeWidget: (id: string) => void;
  updateWidgetConfig: (id: string, config: Partial<Record<string, any>>) => void;
}

const defaultWidgets: WidgetItem[] =[
  { id: '1', type: 'notepad', config: { title: 'My Notes' } },
  { id: '2', type: 'clock', config: { is24h: false } },
  { id: '3', type: 'stopwatch' },
  { id: '4', type: 'barchart' },
];

export const useDashboardStore = create<DashboardState>()(
  persist(
    (set) => ({
      widgets: defaultWidgets,
      addWidget: (type) =>
        set((state) => ({
          widgets:[...state.widgets, { id: crypto.randomUUID(), type, config: {} }],
        })),
      removeWidget: (id) =>
        set((state) => ({
          widgets: state.widgets.filter((w) => w.id !== id),
        })),
      updateWidgetConfig: (id, newConfig) =>
        set((state) => ({
          widgets: state.widgets.map((w) =>
            w.id === id ? { ...w, config: { ...w.config, ...newConfig } } : w
          ),
        })),
    }),
    { name: 'dashboard-layout' }
  )
);