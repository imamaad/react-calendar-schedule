import {RangeColumnsInterface} from "./ColumnInterface";
import {RangeDataSourceInterface} from "./dataSourceItemInterface";
import React from "react";

export interface RangeCalendarScheduleInitialInterface extends RangeColumnsInterface, RangeDataSourceInterface {
    sidebarWidth?: number,
    bgColorHeader: string,
    format?: {
        top?: string,
        bottom?: string,
    },
    minDate?: string,
    maxDate?: string,
    startDate: string,
    titleColumns: string | React.ReactNode,
    changeStartDate: (value: any) => void,
    size: {
        width: number,
        height: number
    }
}