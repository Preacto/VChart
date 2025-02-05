import type { ITooltipActual, ITooltipPositionActual } from '../../../../typings/tooltip';
import { BaseTooltipHandler } from '../base';
import type { IDomTooltipStyle } from './interface';
import { TooltipModel } from './model/tooltip-model';
import { type Maybe } from '@visactor/vutils';
import type { ITooltipSpec, TooltipHandlerParams } from '../../../../component/tooltip';
import type { IComponentPluginService } from '../../interface';
import type { ILayoutPoint } from '../../../../typings';
export declare class DomTooltipHandler extends BaseTooltipHandler {
    static readonly type: string;
    readonly type: string;
    protected _tooltipContainer: HTMLElement;
    protected _domStyle: IDomTooltipStyle;
    protected _tooltipActual?: ITooltipActual;
    protected _container: Maybe<HTMLDivElement>;
    protected _cacheCustomTooltipPosition: ILayoutPoint;
    protected model: TooltipModel;
    getVisibility(): boolean;
    setVisibility(_value: boolean): void;
    constructor();
    onAdd(service: IComponentPluginService<any>): void;
    initEl(): void;
    protected _removeTooltip(): void;
    protected _updateTooltip(visible: boolean, params: TooltipHandlerParams): void;
    protected _initStyle(): void;
    protected _getParentElement(spec: ITooltipSpec): HTMLElement;
    isTooltipShown(): boolean;
    reInit(): void;
    protected _updatePosition({ x, y }: ITooltipPositionActual): void;
    protected _initEvent(el: HTMLElement): void;
}
export declare const registerDomTooltipHandler: () => void;
