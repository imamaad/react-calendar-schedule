import {rangeVirtualizedDataSourceItemInterface} from "./rangeVirtualizedDataSourceInterface";

export interface RangeVirtualizedColumnInterface {
    accessorKey: string,

    dataSource: Array<rangeVirtualizedDataSourceItemInterface>

    [propName: string]: any,
}

export interface RangeVirtualizedColumnsInterface {
    columns: Array<RangeVirtualizedColumnInterface>
}