import {createContext, CSSProperties, useContext, useEffect, useMemo, useState} from "react";
import * as React from "react";
import {rangeBuildCalendarVirtualized} from "./rangeBuildCalendarVirtualized";
import {RangeCalendarScheduleVirtualizedInitialInterface} from "../../common/interfaces";
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
    more: { rowIndex: number, columnIndex: number, style: CSSProperties | undefined, key: string } | undefined,
    onChangeMore: (values: {
        rowIndex: number,
        columnIndex: number,
        style: CSSProperties | undefined,
        key: string
    } | undefined) => void,
    columns: Array<{
        type: 'HEADER' | 'COLUMN',
        title?: string,
        events?: { [propName: string]: Array<rangeVirtualizedDataSourceItemInterface> }
    }>
}


export const RangeCalendarScheduleContextVirtualized = createContext<RangeCalendarScheduleVirtualizedContextType>(null!);
RangeCalendarScheduleContextVirtualized.displayName = 'RangeCalendarScheduleContext';

export const useRangeCalendarScheduleVirtualized = () => {
    return useContext(RangeCalendarScheduleContextVirtualized);
}

// export const RangeCalendarScheduleConsumer = RangeCalendarScheduleContextVirtualized.Consumer;

interface RangeScheduleProviderProps {
    children: React.ReactNode,
    initialProps: RangeCalendarScheduleVirtualizedInitialPropsInterface
}

export const RangeCalendarScheduleProvider: React.FC<RangeScheduleProviderProps> = ({children, initialProps}) => {

    const {startDate, endDate, categories} = initialProps;

    const [days, setDays] = useState<Array<string>>([]);
    const [more, setMore] = useState<{
        rowIndex: number, columnIndex: number,
        style: CSSProperties | undefined,
        key: string
    } | undefined>(undefined);

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
                    ...category,

                });

                if (category.defaultOpen) {
                    _.each(category.columns, column => {
                        result.push({
                            type: 'COLUMN',
                            ...column,
                        });
                    });
                }

                return result;
            }, [])
        , [categories]);

    const onChangeMore = (values: {
        rowIndex: number,
        columnIndex: number,
        style: CSSProperties | undefined, key: string
    } | undefined) => {
        setMore(values);
    }

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
        more,
        onChangeMore,
        ...initialProps,
    };

    return (
        <RangeCalendarScheduleContextVirtualized.Provider value={value}>
            {children}
        </RangeCalendarScheduleContextVirtualized.Provider>
    );
}

