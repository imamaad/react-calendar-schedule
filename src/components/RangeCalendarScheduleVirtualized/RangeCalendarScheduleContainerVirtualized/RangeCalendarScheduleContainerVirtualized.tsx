import React, {useRef} from "react";
import {Grid} from "react-virtualized";
import {useRangeCalendarScheduleVirtualized} from "../RangeCalendarScheduleContextVirtualized";
import {RangeVirtualizedColumnsInterface} from "../../../common/interfaces/ColumnVirtualizedInterface";
import _ from "lodash";
import moment from "moment";

interface props extends RangeVirtualizedColumnsInterface {
}

export const RangeCalendarScheduleContainerVirtualized = ({columns}: props) => {

    const {
        days,
        height,
        width,
        columnWidth,
        columnCount,
        overScanColumnCount,
        overScanRowCount,
        getRowCount,
        rowHeight,
        scrollTop,
        scrollLeft,
        textColorColumn,
        bgColorColumn,
        bordered,
        itemRenderer,
        onContextMenu
    } = useRangeCalendarScheduleVirtualized();

    const ref = useRef<any>(null);

    const _renderBodyCell = ({day, items, columnIndex, key, rowIndex, style, column}: any) => {

        return (
            <div
                key={key}
                onContextMenu={
                    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                        event.preventDefault();
                        if (event?.target === event?.currentTarget) {
                            onContextMenu({day, items, columnIndex, key, rowIndex, column, event})
                        }
                    }
                }
                style={{
                    ...style,
                    border: bordered ? '1px solid #bbb' : 'unset',
                    boxSizing: 'border-box',
                    padding: 5,
                    overflowY: 'auto'
                }}
            >
                {_.map(items, (item, itemKey) => _renderItemCell({item, columnIndex, key, rowIndex, style, itemKey}))}
            </div>
        );
    }

    const _renderItemCell = ({item, columnIndex, key, rowIndex, itemKey}: any) => {
        return (
            <div
                className='imamaad-range-calendar-schedule-virtualized-item'
                key={itemKey}
                style={{
                    marginBottom: 5,
                }}
            >
                {itemRenderer({item, columnIndex, key, rowIndex, itemKey})}
            </div>
        );
    }

    return (
        <div
            style={{
                backgroundColor: bgColorColumn,
                color: textColorColumn,
            }}
            ref={ref}
        >
            <Grid
                autoHeight={true}
                autoWidth={true}
                height={height}
                width={width}
                className={"BodyGrid"}
                columnWidth={columnWidth}
                columnCount={columnCount}

                overscanColumnCount={overScanColumnCount}
                overscanRowCount={overScanRowCount}
                cellRenderer={(props) => {
                    const day = days[props.columnIndex];
                    const column = columns[props?.rowIndex];
                    const items = column?.events?.[day] || [];

                    return _renderBodyCell({...props, day, items, column})
                }}
                rowHeight={rowHeight}
                rowCount={getRowCount(columns)}

                scrollTop={scrollTop - (ref?.current?.offsetTop || 0)}
                scrollLeft={scrollLeft}
            />
        </div>
    )
}