import {RangeColumnsInterface} from "./ColumnInterface";
import {RangeDataSourceInterface} from "./dataSourceItemInterface";
import React from "react";

export interface RangeCalendarScheduleInitialInterface extends RangeColumnsInterface, RangeDataSourceInterface {
    minTime: string,
    maxTime: string,
    sidebarWidth?: number,
    sidebarTitle?: string | React.ReactNode,
    bgColorHeader: string,
    format?: {
        top?: string,
        bottom?: string,
    },
    size: {
        width: number,
        height: number
    }
}