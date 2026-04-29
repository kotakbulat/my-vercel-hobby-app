import { NotepadWidget } from '../widgets/Notepad/NotepadWidget';
import { ClockWidget } from '../widgets/Clock/ClockWidget';
import { StopwatchWidget } from '../widgets/Stopwatch/StopwatchWidget';
import { BarChartWidget } from '../widgets/BarChart/BarChartWidget';

export const WidgetRegistry: Record<string, { title: string; component: React.FC<any> }> = {
  notepad: { title: 'Notepad', component: NotepadWidget },
  clock: { title: 'Clock', component: ClockWidget },
  stopwatch: { title: 'Stopwatch', component: StopwatchWidget },
  barchart: { title: 'Analytics', component: BarChartWidget },
};