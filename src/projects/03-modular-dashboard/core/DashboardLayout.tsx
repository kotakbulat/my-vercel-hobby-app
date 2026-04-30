import React from 'react';
import { useDashboardStore } from '../store/useDashboardStore';
import { WidgetContainer } from './WidgetContainer';
import { LineChartWidget } from '../widgets/D3/LineChartWidget';
import { PieChartWidget } from '../widgets/D3/PieChartWidget';
import { BarChartWidget } from '../widgets/BarChart/BarChartWidget'; // Old one or D3 equivalent

const WidgetRegistry: Record<string, React.FC<any>> = {
  linechart: LineChartWidget,
  piechart: PieChartWidget,
  barchart: BarChartWidget,
};

export const DashboardLayout: React.FC = () => {
  const widgets = useDashboardStore((state) => state.widgets);

  return (
    <div id="dashboard-grid-container" className="dashboard-grid">
      {widgets.map((w) => {
        const Component = WidgetRegistry[w.type];
        if (!Component) return null;

        return (
          <WidgetContainer key={w.id} id={w.id} title={w.type.toUpperCase()} layout={w.layout}>
            <Component dataSourceId={w.dataSourceId} config={w.config} />
          </WidgetContainer>
        );
      })}
    </div>
  );
};