import { SeriesTypeEnum } from '../../series/interface';
import { CartesianChart } from '../cartesian/cartesian';
import { ChartTypeEnum } from '../interface';
import { setDefaultCrosshairForCartesianChart } from '../util';
import type { ILineChartSpec } from './interface';
import { VChart } from '../../core/vchart';
import { registerLineSeries } from '../../series/line/line';
import { Factory } from '../../core/factory';

export class LineChart extends CartesianChart {
  static readonly type: string = ChartTypeEnum.line;
  static readonly view: string = 'singleDefault';
  readonly type: string = ChartTypeEnum.line;
  readonly seriesType: string = SeriesTypeEnum.line;

  protected _getDefaultSeriesSpec(spec: ILineChartSpec): any {
    return {
      ...super._getDefaultSeriesSpec(spec),
      point: spec.point,
      line: spec.line,
      seriesMark: spec.seriesMark ?? 'line',
      activePoint: spec.activePoint
    };
  }
  transformSpec(spec: any): void {
    super.transformSpec(spec);
    setDefaultCrosshairForCartesianChart(spec);
  }
}

export const registerLineChart = () => {
  registerLineSeries();
  Factory.registerChart(LineChart.type, LineChart);
};
