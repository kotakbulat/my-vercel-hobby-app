import React from 'react';
import { useDashboardStore } from '../store/useDashboardStore';
import { WidgetContainer } from './WidgetContainer';
import { LineChartWidget } from '../widgets/D3/LineChartWidget';
import { PieChartWidget } from '../widgets/D3/PieChartWidget';
import { BarChartWidget } from '../widgets/BarChart/BarChartWidget'; // Old one or D3 equivalent
import { WidgetRegistry } from './WidgetRegistry';


export const DashboardLayout: React.FC = () => {
  const widgets = useDashboardStore((state) => state.widgets);

  return (
    <div id="dashboard-grid-container" className="dashboard-grid">
      {widgets.map((w) => {
        // Look up the widget by type
        const WidgetMeta = WidgetRegistry[w.type];
        
        // If the widget type isn't found (e.g., old data), ignore it safely
        if (!WidgetMeta) return null; 

        const Component = WidgetMeta.component;

        // Ensure layout has a fallback so it never crashes
        const safeLayout = w.layout || { x: 0, y: 0, w: 4, h: 4 };

        return (
          <WidgetContainer 
            key={w.id} 
            id={w.id} 
            title={WidgetMeta.title} 
            layout={safeLayout}
          >
            <Component id={w.id} dataSourceId={w.dataSourceId} config={w.config} />
          </WidgetContainer>
        );
      })}
    </div>
  );
};