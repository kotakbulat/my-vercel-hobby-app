import { useState, useRef } from 'react';
import { useDashboardStore } from '../store/useDashboardStore';
import type { WidgetLayout } from '../store/useDashboardStore';

const GRID_COLS = 12;
const ROW_HEIGHT = 80;

export const useDraggable = (id: string, initialLayout: WidgetLayout) => {
  const updateLayout = useDashboardStore((state) => state.updateLayout);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const startPos = useRef({ x: 0, y: 0 });

  const handlePointerDown = (e: React.PointerEvent) => {
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    setIsDragging(true);
    startPos.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setDragOffset({
      x: e.clientX - startPos.current.x,
      y: e.clientY - startPos.current.y,
    });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    setIsDragging(false);

    // Calculate grid snapping based on container width
    const container = document.getElementById('dashboard-grid-container');
    if (container) {
      const colWidth = container.clientWidth / GRID_COLS;
      const snapDeltaX = Math.round(dragOffset.x / colWidth);
      const snapDeltaY = Math.round(dragOffset.y / ROW_HEIGHT);

      updateLayout(id, {
        x: Math.max(0, Math.min(GRID_COLS - initialLayout.w, initialLayout.x + snapDeltaX)),
        y: Math.max(0, initialLayout.y + snapDeltaY),
      });
    }
    setDragOffset({ x: 0, y: 0 });
  };

  return { isDragging, dragOffset, handlePointerDown, handlePointerMove, handlePointerUp };
};