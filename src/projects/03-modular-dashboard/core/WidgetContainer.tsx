import React from 'react';
import { useDashboardStore } from '../store/useDashboardStore';

interface WidgetContainerProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export const WidgetContainer: React.FC<WidgetContainerProps> = ({ id, title, children }) => {
  const removeWidget = useDashboardStore((state) => state.removeWidget);

  return (
    <div className="widget-card">
      <div className="widget-header">
        <h3 className="widget-title">{title}</h3>
        <button className="widget-btn-close" onClick={() => removeWidget(id)}>×</button>
      </div>
      <div className="widget-content">
        {children}
      </div>
    </div>
  );
};