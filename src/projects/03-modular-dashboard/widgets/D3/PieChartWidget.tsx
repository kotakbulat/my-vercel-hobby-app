import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { DataRegistry } from '../../core/DataSources';

export const PieChartWidget: React.FC<{ dataSourceId?: string }> = ({ dataSourceId }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const[data, setData] = useState<any[]>([]);

  useEffect(() => {
    if (!dataSourceId || !DataRegistry[dataSourceId]) return;
    DataRegistry[dataSourceId].fetch().then(raw => {
      setData(DataRegistry[dataSourceId].transform ? DataRegistry[dataSourceId].transform!(raw) : raw);
    });
  }, [dataSourceId]);

  useEffect(() => {
    if (!data.length || !svgRef.current) return;
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;
    const radius = Math.min(width, height) / 2 - 20;

    const g = svg.append("g").attr("transform", `translate(${width / 2},${height / 2})`);
    
    const color = d3.scaleOrdinal(d3.schemeTableau10);
    const pie = d3.pie<any>().value(d => d.value).sort(null);
    const arc = d3.arc<any>().innerRadius(radius * 0.5).outerRadius(radius); // Donut style
    const arcHover = d3.arc<any>().innerRadius(radius * 0.5).outerRadius(radius + 10); 

    const arcs = g.selectAll(".arc")
      .data(pie(data))
      .enter().append("g")
      .attr("class", "arc");

    arcs.append("path")
      .attr("d", arc)
      .attr("fill", d => color(d.data.label) as string)
      .attr("stroke", "white")
      .style("stroke-width", "2px")
      .on("mouseover", function(event, d) {
        d3.select(this).transition().duration(200).attr("d", arcHover);
      })
      .on("mouseout", function(event, d) {
        d3.select(this).transition().duration(200).attr("d", arc);
      });

    arcs.append("text")
      .attr("transform", d => `translate(${arc.centroid(d)})`)
      .attr("text-anchor", "middle")
      .attr("font-size", "10px")
      .attr("fill", "white")
      .text(d => d.data.label);

  },[data]);

  return <svg ref={svgRef} className="d3-svg" style={{ width: '100%', height: '100%' }} />;
};