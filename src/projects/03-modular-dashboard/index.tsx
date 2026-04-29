import React from 'react';
import './styles/dashboard.css';
import { DashboardLayout } from './core/DashboardLayout';
import { useDashboardStore } from './store/useDashboardStore';
import { WidgetRegistry } from './core/WidgetRegistry';

export const DashboardPlatform: React.FC = () => {
  const addWidget = useDashboardStore((state) => state.addWidget);

  return (
    <div className="dashboard-platform">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
        <div className="widget-adder">
          <select 
            onChange={(e) => {
              if(e.target.value) {
                addWidget(e.target.value);
                e.target.value = "";
              }
            }}
            className="widget-btn"
          >
            <option value="">+ Add Widget</option>
            {Object.keys(WidgetRegistry).map((key) => (
              <option key={key} value={key}>
                {WidgetRegistry[key].title}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <DashboardLayout />
    </div>
  );
};