import React from "react";
import {RangeVirtualizedColumnInterface, RangeVirtualizedColumnsInterface} from "./ColumnVirtualizedInterface";
import {
    rangeVirtualizedDataSourceInterface,
    rangeVirtualizedDataSourceItemInterface
} from "./rangeVirtualizedDataSourceInterface";

export interface RangeVirtualizedCategoryInterface {
    title: string,
    columns: Array<RangeVirtualizedColumnInterface>,
    dataSource: Array<rangeVirtualizedDataSourceItemInterface>
}

export interface RangeCalendarScheduleVirtualizedInitialInterface {
    startDate: string,
    endDate: string,
    sidebarWidth?: number,
    columnWidth?: number,
    rowHeight?: number,
    bgColorHeader: string,
    textColorHeader: string,
    textColorSidebar: string,
    headerHeight: number,
    bgColorSidebar: string,
    bordered?: boolean,
    textColorColumn: string,
    bgColorColumn: string,
    format?: {
        top?: string,
        bottom?: string,
    },

    categories: Array<RangeVirtualizedCategoryInterface>,

    groupRenderer: ((props: any) => React.ReactNode),
    itemRenderer: ((props: any) => React.ReactNode),
}