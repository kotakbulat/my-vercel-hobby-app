import React from 'react';
import { useDashboardStore } from '../store/useDashboardStore';
import type { WidgetLayout } from '../store/useDashboardStore';
import { useDraggable } from '../hooks/useDraggable';

interface WidgetContainerProps {
  id: string;
  title: string;
  layout: WidgetLayout;
  children: React.ReactNode;
}

export const WidgetContainer: React.FC<WidgetContainerProps> = ({ id, title, layout, children }) => {
  const removeWidget = useDashboardStore((state) => state.removeWidget);
  const { isDragging, dragOffset, handlePointerDown, handlePointerMove, handlePointerUp } = useDraggable(id, layout);

  // Layout math
  const style: React.CSSProperties = {
    gridColumn: `${layout.x + 1} / span ${layout.w}`,
    gridRow: `${layout.y + 1} / span ${layout.h}`,
    transform: isDragging ? `translate(${dragOffset.x}px, ${dragOffset.y}px)` : 'none',
    zIndex: isDragging ? 100 : 1,
    transition: isDragging ? 'none' : 'transform 0.2s ease, grid-column 0.3s ease, grid-row 0.3s ease',
  };

  return (
    <div className={`widget-card ${isDragging ? 'dragging' : ''}`} style={style}>
      <div 
        className="widget-header drag-handle"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <h3 className="widget-title">≡ {title}</h3>
        <button className="widget-btn-close" onClick={() => removeWidget(id)} onPointerDown={(e) => e.stopPropagation()}>×</button>
      </div>
      <div className="widget-content">
        {children}
      </div>
    </div>
  );
};