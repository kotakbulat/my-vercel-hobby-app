import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { DataRegistry } from '../../core/DataSources';

export const LineChartWidget: React.FC<{ dataSourceId?: string }> = ({ dataSourceId }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [data, setData] = useState<any[]>([]);
  const[loading, setLoading] = useState(true);

  useEffect(() => {
    if (!dataSourceId || !DataRegistry[dataSourceId]) return;
    const fetch = async () => {
      setLoading(true);
      const raw = await DataRegistry[dataSourceId].fetch();
      setData(DataRegistry[dataSourceId].transform ? DataRegistry[dataSourceId].transform!(raw) : raw);
      setLoading(false);
    };
    fetch();
  },[dataSourceId]);

  useEffect(() => {
    if (!data.length || !svgRef.current) return;
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Cleanup

    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };

    const x = d3.scaleTime()
      .domain(d3.extent(data, d => new Date(d.date)) as [Date, Date])
      .range([margin.left, width - margin.right]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value) as number]).nice()
      .range([height - margin.bottom, margin.top]);

    const line = d3.line<any>()
      .x(d => x(new Date(d.date)))
      .y(d => y(d.value))
      .curve(d3.curveMonotoneX); // Smooth curves

    // Add Axes
    svg.append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).ticks(5));

    svg.append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y).ticks(5));

    // Add Area Gradient
    const defs = svg.append("defs");
    const gradient = defs.append("linearGradient")
      .attr("id", "area-gradient")
      .attr("x1", "0%").attr("y1", "0%")
      .attr("x2", "0%").attr("y2", "100%");
    gradient.append("stop").attr("offset", "0%").attr("stop-color", "#3b82f6").attr("stop-opacity", 0.3);
    gradient.append("stop").attr("offset", "100%").attr("stop-color", "#3b82f6").attr("stop-opacity", 0);

    const area = d3.area<any>()
      .x(d => x(new Date(d.date)))
      .y0(y(0))
      .y1(d => y(d.value))
      .curve(d3.curveMonotoneX);

    svg.append("path")
      .datum(data)
      .attr("fill", "url(#area-gradient)")
      .attr("d", area);

    // Add Path
    const path = svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#2563eb")
      .attr("stroke-width", 2)
      .attr("d", line);

    // Animation
    const totalLength = path.node()?.getTotalLength() || 0;
    path
      .attr("stroke-dasharray", totalLength + " " + totalLength)
      .attr("stroke-dashoffset", totalLength)
      .transition()
      .duration(2000)
      .ease(d3.easeLinear)
      .attr("stroke-dashoffset", 0);

  }, [data]);

  if (loading) return <div className="loading">Fetching Data...</div>;
  return <svg ref={svgRef} className="d3-svg" style={{ width: '100%', height: '100%' }} />;
};