import { DataView } from '@visactor/vdataset';
import type { DataSet, ITransformOptions } from '@visactor/vdataset';
import type { IRegion } from '../../region/interface';
import type { IMark } from '../../mark/interface';
import type { CoordinateType, IInvalidType, IPoint, DataKeyType, Datum, Maybe, ISeriesSpec, IGroup, ILayoutType, ILayoutPoint, ILayoutRect } from '../../typings';
import { BaseModel } from '../../model/base-model';
import type { ISeriesOption, ISeries, ISeriesMarkInitOption, ISeriesStackData, ISeriesTooltipHelper, SeriesMarkMap, ISeriesMarkInfo, ISeriesSpecInfo } from '../interface';
import type { IModelEvaluateOption, IModelRenderOption } from '../../model/interface';
import type { AddVChartPropertyContext } from '../../data/transforms/add-property';
import type { StatisticOperations } from '../../data/transforms/dimension-statistics';
import { SeriesData } from './series-data';
import type { IGroupMark } from '../../mark/group';
import type { ISeriesMarkAttributeContext } from '../../compile/mark';
import { STATE_VALUE_ENUM } from '../../compile/mark';
import { BaseSeriesSpecTransformer } from './base-series-transformer';
import type { EventType } from '@visactor/vgrammar-core';
export declare abstract class BaseSeries<T extends ISeriesSpec> extends BaseModel<T> implements ISeries {
    readonly specKey: string;
    readonly type: string;
    layoutType: ILayoutType;
    readonly modelType: string;
    readonly name: string | undefined;
    static readonly mark: SeriesMarkMap;
    static readonly transformerConstructor: typeof BaseSeriesSpecTransformer;
    readonly transformerConstructor: any;
    getSpecInfo: () => ISeriesSpecInfo;
    protected _option: ISeriesOption;
    readonly coordinate: CoordinateType;
    protected _region: IRegion;
    getRegion(): IRegion;
    private _layoutStartPoint;
    getLayoutStartPoint(): ILayoutPoint;
    private _layoutRect;
    getLayoutRect: () => ILayoutRect;
    protected _rootMark: IGroupMark;
    getRootMark(): IGroupMark;
    protected _seriesMark: Maybe<IMark>;
    protected _layoutLevel: number;
    protected _rawData: DataView;
    getRawData(): DataView;
    protected _rawDataStatistics?: DataView;
    protected _rawStatisticsCache: Record<string, {
        values?: any[];
        min?: number;
        max?: number;
    }>;
    protected _viewDataMap: Map<number, DataView>;
    protected _viewDataFilter: DataView;
    getViewDataFilter(): DataView;
    protected _data: SeriesData;
    getViewData(): DataView;
    getViewDataProductId(): string;
    protected _viewDataStatistics: DataView;
    getViewDataStatistics(): DataView;
    protected _viewStackData: DataView;
    getViewStackData(): DataView;
    protected _seriesField?: string;
    getSeriesField(): string;
    setSeriesField(field: string): void;
    protected _groups?: IGroup;
    getGroups(): IGroup;
    protected _stack: boolean;
    protected _supportStack: boolean;
    getStack(): boolean;
    getStackValue(): import("../../typings").StringOrNumber;
    protected _percent: boolean;
    getPercent(): boolean;
    protected _stackOffsetSilhouette: boolean;
    getStackOffsetSilhouette(): boolean;
    protected _dataSet: DataSet;
    protected _tooltipHelper: ISeriesTooltipHelper | undefined;
    get tooltipHelper(): ISeriesTooltipHelper;
    layoutZIndex: number;
    protected _invalidType: IInvalidType;
    getInvalidType(): IInvalidType;
    setInvalidType(t: IInvalidType): void;
    protected _markAttributeContext: ISeriesMarkAttributeContext;
    getMarkAttributeContext(): ISeriesMarkAttributeContext;
    constructor(spec: T, options: ISeriesOption);
    created(): void;
    protected _buildMarkAttributeContext(): void;
    setAttrFromSpec(): void;
    protected initData(): void;
    protected initGroups(): void;
    protected initStatisticalData(): void;
    getRawDataStatisticsByField(field: string, isNumeric?: boolean): {
        values?: any[];
        min?: number;
        max?: number;
    };
    protected _statisticViewData(): void;
    protected createStatisticalData(dataName: string, rawData: DataView, staticFields?: (dataId: string) => {
        key: string;
        operations: StatisticOperations;
    }[]): DataView;
    private createdStackData;
    protected _noAnimationDataKey(datum: Datum, index: number): unknown | undefined;
    protected generateDefaultDataKey(dataKey: DataKeyType): (datum: Datum, index: number, context: AddVChartPropertyContext) => unknown;
    protected _addDataIndexAndKey(): void;
    updateRawData(d: any): void;
    rawDataUpdate(d: DataView): void;
    viewDataFilterOver(d: DataView): void;
    viewDataUpdate(d: DataView): void;
    viewDataStatisticsUpdate(d: DataView): void;
    getDatumPositionValue(datum: Datum, field: string): any;
    getDatumPositionValues(datum: Datum, fields: string | string[]): any[];
    abstract getStatisticFields(): {
        key: string;
        operations: StatisticOperations;
    }[];
    abstract getGroupFields(): string[];
    abstract dataToPosition(data: Datum): IPoint;
    abstract dataToPositionX(data: Datum): number;
    abstract dataToPositionY(data: Datum): number;
    abstract valueToPosition(value1: any, value2?: any): IPoint;
    abstract initMark(): void;
    abstract initMarkStyle(): void;
    abstract getStackGroupFields(): string[];
    abstract getStackValueField(): string | undefined;
    setValueFieldToStack(): void;
    setValueFieldToPercent(): void;
    setValueFieldToStackOffsetSilhouette(): void;
    abstract getActiveMarks(): IMark[];
    initRootMark(): void;
    protected _initExtensionMark(options: {
        hasAnimation: boolean;
        depend?: IMark[];
    }): void;
    private _createExtensionMark;
    protected _updateExtensionMarkSpec(lastSpec?: any): void;
    getStackData(): ISeriesStackData;
    protected _parseDefaultInteractionConfig(mainMarks?: IMark[]): ({
        seriesId: number;
        regionId: number;
        selector: string[];
        type: string;
        trigger: EventType;
        triggerOff: EventType;
        blurState: STATE_VALUE_ENUM;
        highlightState: STATE_VALUE_ENUM;
        reverseState?: undefined;
        state?: undefined;
        isMultiple?: undefined;
    } | {
        type: string;
        seriesId: number;
        regionId: number;
        selector: string[];
        trigger: EventType;
        triggerOff: EventType;
        reverseState: STATE_VALUE_ENUM;
        state: STATE_VALUE_ENUM;
        isMultiple: boolean;
        blurState?: undefined;
        highlightState?: undefined;
    })[];
    protected _parseInteractionConfig(mainMarks?: IMark[]): void;
    initInteraction(): void;
    initAnimation(): void;
    initMarkState(): void;
    initSeriesStyleState(): void;
    afterInitMark(): void;
    getMarksWithoutRoot(): IMark[];
    getMarksInType(type: string | string[]): IMark[];
    getMarkInName(name: string): IMark | undefined;
    getMarkInId(markId: number): IMark | undefined;
    protected initEvent(): void;
    protected _releaseEvent(): void;
    protected initTooltip(): void;
    _compareSpec(spec: T, prevSpec: T, ignoreCheckKeys?: {
        [key: string]: true;
    }): {
        change: boolean;
        reMake: boolean;
        reRender: boolean;
        reSize: boolean;
        reCompile: boolean;
    };
    _updateSpecData(): void;
    reInit(spec?: T): void;
    onEvaluateEnd(ctx: IModelEvaluateOption): void;
    onRender(ctx: IModelRenderOption): void;
    release(): void;
    setLayoutStartPosition(pos: Partial<IPoint>): void;
    setLayoutRect({ width, height }: Partial<ILayoutRect>, levelMap?: Partial<ILayoutRect>): void;
    getSeriesKeys(): string[];
    getSeriesStyle(datum: Datum): (attribute: string) => unknown;
    protected _getSeriesInfo(field: string, keys: string[]): {
        key: string;
        style: (attribute: string) => unknown;
        shapeType: string;
    }[];
    getSeriesInfoInField(field: string): {
        key: string;
        style: (attribute: string) => unknown;
        shapeType: string;
    }[];
    getSeriesInfoList(): {
        key: string;
        style: (attribute: string) => unknown;
        shapeType: string;
    }[];
    protected _getDefaultColorScale(): any;
    protected _getDataScheme(): import("../..").ColorSchemeItem[] | import("../..").ProgressiveDataScheme<import("../..").ColorSchemeItem>;
    getDefaultColorDomain(): any[];
    getColorAttribute(): {
        scale: any;
        field: string;
    };
    getDimensionField(): string[];
    getMeasureField(): string[];
    protected onMarkPositionUpdate(): void;
    protected onMarkTreePositionUpdate(marks: IMark[]): void;
    protected _createMark<M extends IMark>(markInfo: ISeriesMarkInfo, option?: ISeriesMarkInitOption): NonNullable<M>;
    protected _getDataIdKey(): string | ((datum: Datum) => string);
    protected _getSeriesDataKey(datum: Datum): string;
    addViewDataFilter(option: ITransformOptions): void;
    reFilterViewData(): void;
    reTransformViewData(): void;
    fillData(): void;
    compile(): void;
    getDefaultShapeType(): string;
    getFieldAlias(field: string): any;
    getMarkInfoList(): import("../../model/interface").IModelMarkInfo[];
    protected _getInvalidConnectType(): "none" | "zero" | "connect";
    protected _getInvalidDefined: (datum: Datum) => boolean;
    protected _getRelatedComponentSpecInfo(specKey: string): import("../../model/interface").IModelSpecInfo<any>[];
}
