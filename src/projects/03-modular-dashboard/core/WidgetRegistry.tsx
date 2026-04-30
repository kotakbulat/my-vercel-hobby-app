import { NotepadWidget } from '../widgets/Notepad/NotepadWidget';
import { ClockWidget } from '../widgets/Clock/ClockWidget';
import { StopwatchWidget } from '../widgets/Stopwatch/StopwatchWidget';
import { BarChartWidget } from '../widgets/BarChart/BarChartWidget';
import { LineChartWidget } from '../widgets/D3/LineChartWidget';
import { PieChartWidget } from '../widgets/D3/PieChartWidget';

export const WidgetRegistry: Record<string, { title: string; component: React.FC<any> }> = {
  notepad: { title: 'Notepad', component: NotepadWidget },
  clock: { title: 'Clock', component: ClockWidget },
  stopwatch: { title: 'Stopwatch', component: StopwatchWidget },
  barchart: { title: 'Bar Chart', component: BarChartWidget },
  linechart: { title: 'Line Chart', component: LineChartWidget },
  piechart: { title: 'Pie Chart', component: PieChartWidget },
};