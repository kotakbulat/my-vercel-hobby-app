import React from 'react';
import { useDashboardStore } from '../store/useDashboardStore';
import { WidgetContainer } from './WidgetContainer';
import { WidgetRegistry } from './WidgetRegistry';

export const DashboardLayout: React.FC = () => {
  const widgets = useDashboardStore((state) => state.widgets);

  return (
    <div className="dashboard-grid">
      {widgets.map((w) => {
        const WidgetMeta = WidgetRegistry[w.type];
        if (!WidgetMeta) return null;

        const Component = WidgetMeta.component;

        return (
          <WidgetContainer key={w.id} id={w.id} title={w.config?.title || WidgetMeta.title}>
            <Component id={w.id} config={w.config} />
          </WidgetContainer>
        );
      })}
    </div>
  );
};