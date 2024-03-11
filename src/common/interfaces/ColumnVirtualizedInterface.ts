import {rangeVirtualizedDataSourceItemInterface} from "./rangeVirtualizedDataSourceInterface";

export interface RangeVirtualizedColumnInterface {
    events: { [propName: string]: Array<rangeVirtualizedDataSourceItemInterface> }

    [propName: string]: any,
}

export interface RangeVirtualizedColumnsInterface {
    columns: Array<RangeVirtualizedColumnInterface>
}