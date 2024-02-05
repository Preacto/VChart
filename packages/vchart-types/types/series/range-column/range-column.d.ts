import { BarSeries } from '../bar/bar';
import { MarkTypeEnum } from '../../mark/interface/type';
import type { SeriesMarkMap } from '../interface';
import { SeriesTypeEnum } from '../interface/type';
import type { ITextMark } from '../../mark/text';
import type { Datum } from '../../typings';
import type { IRangeColumnSeriesSpec } from './interface';
export declare const DefaultBandWidth = 6;
export declare class RangeColumnSeries<T extends IRangeColumnSeriesSpec = IRangeColumnSeriesSpec> extends BarSeries<any> {
    static readonly type: string;
    type: SeriesTypeEnum;
    protected _barMarkType: MarkTypeEnum;
    protected _barName: string;
    protected _spec: T;
    static readonly mark: SeriesMarkMap;
    static readonly transformerConstructor: any;
    readonly transformerConstructor: any;
    protected _stack: boolean;
    private _minLabelMark?;
    private _maxLabelMark?;
    private _labelMark?;
    initMark(): void;
    initMarkStyle(): void;
    initLabelMarkStyle(labelMark: ITextMark): void;
    protected _dataToPosX(datum: Datum): number;
    protected _dataToPosX1(datum: Datum): number;
    protected _dataToPosY(datum: Datum): number;
    protected _dataToPosY1(datum: Datum): number;
    initAnimation(): void;
    protected initTooltip(): void;
}
export declare const registerRangeColumnSeries: () => void;
