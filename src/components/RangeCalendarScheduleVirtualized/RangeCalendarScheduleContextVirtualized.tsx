import {createContext, CSSProperties, useContext, useEffect, useMemo, useState} from "react";
import * as React from "react";
import {rangeBuildCalendarVirtualized} from "./rangeBuildCalendarVirtualized";
import {RangeCalendarScheduleVirtualizedInitialInterface} from "../../common/interfaces";
import {RangeVirtualizedColumnInterface} from "../../common/interfaces/ColumnVirtualizedInterface";
import _ from "lodash";
import {CellMeasurerCache, OnScrollParams} from "react-virtualized";
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
    onChangeRowHeight: (height: number) => void,
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
    onChangeOpen: (categoryId: string | number, visible: boolean) => void,
    cacheGrid: CellMeasurerCache
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
    const [rowHeight, setRowHeight] = useState<number>(initialProps.rowHeight || 175);

    const [columns, setColumns] = useState<Array<{
        type: 'HEADER' | 'COLUMN',
        title?: string,
        categoryId?: string | number,
        defaultOpen?: boolean,
        events?: { [propName: string]: Array<rangeVirtualizedDataSourceItemInterface> }
    }>>([]);

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


    useEffect(() => {
        const newColumns = _.reduce(categories, (result: Array<any> = [], category, key) => {

            const findColumn = _.find(columns, column => column?.categoryId === category.categoryId);

            const open = findColumn ? findColumn?.defaultOpen : category?.defaultOpen;

            result.push({
                type: 'HEADER',
                ...category,
                defaultOpen: open
            });

            if (open) {
                _.each(category.columns, column => {
                    result.push({
                        type: 'COLUMN',
                        ...column,
                    });
                });
            }

            return result;
        }, []);

        setColumns(newColumns);
    }, [categories]);

    const onChangeOpen = (categoryId: string | number, visible: boolean) => {
        const newColumns = _.reduce(categories, (result: Array<any> = [], category, key) => {

            const findColumn = _.find(columns, column => column?.categoryId === category.categoryId);

            const open = category?.categoryId === categoryId ? visible : findColumn?.defaultOpen;

            result.push({
                type: 'HEADER',
                ...category,
                defaultOpen: open
            });

            if (open) {
                _.each(category.columns, column => {
                    result.push({
                        type: 'COLUMN',
                        ...column,
                    });
                });
            }

            return result;
        }, []);

        setColumns(newColumns);
    }

    const onChangeMore = (values: {
        rowIndex: number,
        columnIndex: number,
        style: CSSProperties | undefined, key: string
    } | undefined) => {
        setMore(values);
    }

    const onChangeRowHeight = (height: number) => {
        setRowHeight(height);
    }

    const cacheGrid = new CellMeasurerCache({
        fixedHeight: true,
        defaultHeight: rowHeight,
    });

    const value: RangeCalendarScheduleVirtualizedContextType = {
        days: days,
        sidebarWidth: 230,
        columnWidth: 75,
        columnCount: days.length,
        getRowCount: (columns) => columns.length,
        overScanColumnCount: 0,
        overScanRowCount: 5,
        bordered: false,
        columns,
        more,
        onChangeMore,
        onChangeOpen,
        onChangeRowHeight,
        cacheGrid,
        ...initialProps,
        rowHeight: rowHeight,
    };

    return (
        <RangeCalendarScheduleContextVirtualized.Provider value={value}>
            {children}
        </RangeCalendarScheduleContextVirtualized.Provider>
    );
}

