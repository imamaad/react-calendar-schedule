import {createContext, useContext, useEffect, useState} from "react";
import * as React from "react";
import {rangeBuildCalendarVirtualized} from "./rangeBuildCalendarVirtualized";
import {RangeCalendarScheduleVirtualizedInitialInterface} from "../../common/interfaces";
import clsx from 'clsx';
import moment from "moment";
import {RangeVirtualizedColumnInterface} from "../../common/interfaces/ColumnVirtualizedInterface";
import _ from "lodash";


interface RangeCalendarScheduleVirtualizedInitialPropsInterface extends RangeCalendarScheduleVirtualizedInitialInterface {
    height: number,
    width: number,
    scrollLeft: number,
    scrollTop: number,
    scrollHeight: number,
    clientHeight: number,
    clientWidth: number,
    scrollWidth: number,
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

    _renderLeftHeaderCell: (props: any) => React.ReactNode
    _renderLeftSideCell: (props: any) => React.ReactNode
    _renderHeaderCell: (props: any) => React.ReactNode
    _renderBodyCell: (props: any) => React.ReactNode
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

    const {startDate, endDate, format, bordered, groupRenderer, itemRenderer} = initialProps;


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


    const _renderLeftHeaderCell = ({title = "", columnIndex, key, style}: any) => {
        return (
            <div className="headerCell" key={key} style={style}>
                {title}
            </div>
        );
    }

    const _renderLeftSideCell = ({column, columnIndex, key, rowIndex, style}: any) => {
        return (
            <div
                key={key}
                style={{
                    ...style,
                    border: bordered ? '1px solid #bbb' : 'unset',
                    boxSizing: 'border-box',
                }}
            >
                {
                    groupRenderer({column, columnIndex, key, rowIndex, style})
                }
            </div>
        );
    }

    const _renderHeaderCell = ({columnIndex, key, rowIndex, style}: any) => {

        return (
            <div
                className="headerCell"
                key={key}
                style={{
                    ...style,
                    border: bordered ? '1px solid #bbb' : 'unset',
                    boxSizing: 'border-box',
                }}
            >
                {`${moment(days[columnIndex]).format((rowIndex === 0 ? format?.top : format?.bottom) || 'YYYY-MM-DD')}`}
            </div>
        );
    }

    const _renderBodyCell = ({items, columnIndex, key, rowIndex, style}: any) => {
        return (
            <div
                key={key}
                style={{
                    ...style,
                    border: bordered ? '1px solid #bbb' : 'unset',
                    boxSizing: 'border-box',
                }}
            >
                {_.map(items, (item, itemKey) => _renderItemCell({item, columnIndex, key, rowIndex, style, itemKey}))}
            </div>
        );
    }

    const _renderItemCell = ({item, columnIndex, key, rowIndex, style, itemKey}: any) => {
        return (
            <div
                key={itemKey}
                style={{
                    ...style,
                    border: bordered ? '1px solid #bbb' : 'unset',
                    boxSizing: 'border-box',
                }}
            >
                {itemRenderer({item, columnIndex, key, rowIndex, style, itemKey})}
            </div>
        );
    }


    const value: RangeCalendarScheduleVirtualizedContextType = {
        days: days,
        sidebarWidth: 230,
        columnWidth: 75,
        columnCount: days.length,
        getRowCount: (columns) => columns.length,
        rowHeight: 100,
        overScanColumnCount: 10,
        overScanRowCount: 10,
        bordered: false,
        ...initialProps,
        _renderLeftHeaderCell,
        _renderLeftSideCell,
        _renderHeaderCell,
        _renderBodyCell,
    };

    return (
        <RangeCalendarScheduleContextVirtualized.Provider value={value}>
            {children}
        </RangeCalendarScheduleContextVirtualized.Provider>
    );
}

