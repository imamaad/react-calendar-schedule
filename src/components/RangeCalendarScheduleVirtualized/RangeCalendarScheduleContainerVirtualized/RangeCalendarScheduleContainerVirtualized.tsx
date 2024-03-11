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
        itemRenderer
    } = useRangeCalendarScheduleVirtualized();

    const ref = useRef<any>(null);

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

    const _renderItemCell = ({item, columnIndex, key, rowIndex, itemKey}: any) => {
        return (
            <div
                key={itemKey}
                style={{
                    border: bordered ? '1px solid #bbb' : 'unset',
                    boxSizing: 'border-box',
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
                    const items = columns[props?.rowIndex]?.events?.[day] || [];

                    return _renderBodyCell({...props, items})
                }}
                rowHeight={rowHeight}
                rowCount={getRowCount(columns)}

                scrollTop={scrollTop - (ref?.current?.offsetTop || 0)}
                scrollLeft={scrollLeft}
            />
        </div>
    )
}