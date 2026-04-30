import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type WidgetLayout = { x: number; y: number; w: number; h: number };

export type WidgetItem = {
  id: string;
  type: string;
  layout: WidgetLayout;
  dataSourceId?: string;
  config?: Record<string, any>;
};

interface DashboardState {
  widgets: WidgetItem[];
  addWidget: (
    type: string,
    layout?: WidgetLayout, // ✅ make optional
    dataSourceId?: string
  ) => void;
  updateLayout: (id: string, layout: Partial<WidgetLayout>) => void;
  removeWidget: (id: string) => void;
}

const defaultWidgets: WidgetItem[] = [
  { id: '1', type: 'linechart', layout: { x: 0, y: 0, w: 8, h: 4 }, dataSourceId: 'timeSeriesMock' },
  { id: '2', type: 'piechart', layout: { x: 8, y: 0, w: 4, h: 4 }, dataSourceId: 'userPosts' },
  { id: '3', type: 'barchart', layout: { x: 0, y: 4, w: 6, h: 4 }, dataSourceId: 'userPosts' },
];

export const useDashboardStore = create<DashboardState>()(
  persist(
    (set) => ({
      widgets: defaultWidgets,

      addWidget: (type, layout, dataSourceId) =>
        set((state) => {
          // ✅ fallback layout logic
          let safeLayout = layout;

          if (!safeLayout) {
            const maxY = state.widgets.reduce(
              (max, w) =>
                Math.max(max, (w.layout?.y || 0) + (w.layout?.h || 4)),
              0
            );

            safeLayout = { x: 0, y: maxY, w: 4, h: 4 };
          }

          return {
            widgets: [
              ...state.widgets,
              {
                id: crypto.randomUUID(),
                type,
                layout: safeLayout,
                dataSourceId,
                config: {},
              },
            ],
          };
        }),

      updateLayout: (id, newLayout) =>
        set((state) => ({
          widgets: state.widgets.map((w) =>
            w.id === id
              ? { ...w, layout: { ...w.layout, ...newLayout } }
              : w
          ),
        })),

      removeWidget: (id) =>
        set((state) => ({
          widgets: state.widgets.filter((w) => w.id !== id),
        })),
    }),
    { name: 'advanced-dashboard' }
  )
);