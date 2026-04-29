import React from 'react';

const mockDataset =[
  { label: 'Jan', value: 40 },
  { label: 'Feb', value: 65 },
  { label: 'Mar', value: 30 },
];

export const BarChartWidget: React.FC<{ config?: any }> = ({ config }) => {
  const data = config?.dataset || mockDataset;
  const maxValue = Math.max(...data.map((d: any) => d.value), 100);

  return (
    <div className="chart-wrapper">
      <svg className="chart-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        {data.map((d: any, index: number) => {
          const height = (d.value / maxValue) * 100;
          const barWidth = 80 / data.length;
          const x = index * (100 / data.length) + (100 / data.length - barWidth) / 2;

          return (
            <g key={d.label} className="chart-group">
              <rect
                className="chart-bar"
                x={x}
                y={100 - height}
                width={barWidth}
                height={height}
                rx="2"
              />
              <text x={x + barWidth / 2} y="95" className="chart-label" textAnchor="middle">
                {d.label}
              </text>
              <title>{`${d.label}: ${d.value}`}</title>
            </g>
          );
        })}
      </svg>
    </div>
  );
};