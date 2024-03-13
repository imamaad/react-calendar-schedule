import {createContext, useContext, useEffect, useMemo, useState} from "react";
import * as React from "react";
import {rangeBuildCalendarVirtualized} from "./rangeBuildCalendarVirtualized";
import {RangeCalendarScheduleVirtualizedInitialInterface} from "../../common/interfaces";
import clsx from 'clsx';
import moment from "moment";
import {RangeVirtualizedColumnInterface} from "../../common/interfaces/ColumnVirtualizedInterface";
import _ from "lodash";
import {OnScrollParams} from "react-virtualized";
import {rangeVirtualizedDataSourceItemInterface} from "../../common/interfaces/rangeVirtualizedDataSourceInterface";


interface RangeCalendarScheduleVirtualizedInitialPropsInterface extends RangeCalendarScheduleVirtualizedInitialInterface {
    height: number,
    width: number,
    scrollLeft: number,
    scrollTop: number,
    scrollHeight: number,
    clientHeight: number,
    clientWidth: number,
    scrollWidth: number,
    onScroll: (params: OnScrollParams) => void
}

interface RangeCalendarScheduleVirtualizedContextType extends RangeCalendarScheduleVirtualizedInitialPropsInterface {
    days: Array<string>,
    sidebarWidth: number,
    columnWidth: number,
    columnCount: number,
    getRowCount: (columns: Array<RangeVirtualizedColumnInterface>) => number,
    rowHeight: number,
    overScanColumnCount: number,
    overScanRowCount: number,
    columns: Array<{
        type: 'HEADER' | 'COLUMN',
        title: string,
        show: boolean,
        groupId: string | number,
        columnId: string | number,
        events?: { [propName: string]: Array<rangeVirtualizedDataSourceItemInterface> }
    }>
}


export const RangeCalendarScheduleContextVirtualized = createContext<RangeCalendarScheduleVirtualizedContextType>(null!);

export const useRangeCalendarScheduleVirtualized = () => {
    return useContext(RangeCalendarScheduleContextVirtualized);
}

export const RangeCalendarScheduleConsumer = RangeCalendarScheduleContextVirtualized.Consumer;

interface RangeScheduleProviderProps {
    children: React.ReactNode,
    initialProps: RangeCalendarScheduleVirtualizedInitialPropsInterface
}

export const RangeCalendarScheduleProvider: React.FC<RangeScheduleProviderProps> = ({children, initialProps}) => {

    const {startDate, endDate, categories} = initialProps;

    const [days, setDays] = useState<Array<string>>([]);

    const getDays = (sDate: string, eDate: string) => {
        return rangeBuildCalendarVirtualized(sDate, eDate);
    };

    useEffect(() => {
        if (startDate && endDate) {
            const generateDays: Array<string> = getDays(startDate, endDate);
            setDays(generateDays);
        }
        // eslint-disable-next-line
    }, [startDate, endDate]);


    const columns = useMemo(() =>
            _.reduce(categories, (result: Array<any> = [], category, key) => {
                result.push({
                    type: 'HEADER',
                    title: category.title,
                    show: true,
                    groupId: 1,
                    columnId: 1
                });

                _.each(category.columns, column => {
                    result.push({
                        type: 'COLUMN',
                        title: column.title,
                        show: true,
                        groupId: 1,
                        columnId: 1,
                        events: column.events,
                    });
                });

                return result;
            }, [])
        , [categories]);

    const value: RangeCalendarScheduleVirtualizedContextType = {
        days: days,
        sidebarWidth: 230,
        columnWidth: 75,
        columnCount: days.length,
        getRowCount: (columns) => columns.length,
        rowHeight: 100,
        overScanColumnCount: 0,
        overScanRowCount: 5,
        bordered: false,
        columns,
        ...initialProps,
    };

    return (
        <RangeCalendarScheduleContextVirtualized.Provider value={value}>
            {children}
        </RangeCalendarScheduleContextVirtualized.Provider>
    );
}

