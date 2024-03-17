import React from "react";
import {RangeVirtualizedColumnInterface} from "./ColumnVirtualizedInterface";

export interface RangeVirtualizedCategoryInterface {
    title: string,
    defaultOpen: boolean,
    categoryId: string | number,
    columns: Array<RangeVirtualizedColumnInterface>,
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
    onContextMenu: (props: any) => void,

    openIcon: React.ReactNode,

    format?: {
        top?: string,
        bottom?: string,
    },

    categories: Array<RangeVirtualizedCategoryInterface>,

    groupRenderer: ((props: any) => React.ReactNode),
    itemRenderer: ((props: any) => React.ReactNode),
}