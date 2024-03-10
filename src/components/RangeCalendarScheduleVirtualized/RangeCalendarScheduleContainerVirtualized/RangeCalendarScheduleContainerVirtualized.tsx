import React from "react";
import {Grid} from "react-virtualized";
import {useRangeCalendarScheduleVirtualized} from "../RangeCalendarScheduleContextVirtualized";
import {RangeVirtualizedColumnsInterface} from "../../../common/interfaces/ColumnVirtualizedInterface";
import {rangeVirtualizedDataSourceInterface} from "../../../common/interfaces/rangeVirtualizedDataSourceInterface";
import _ from "lodash";
import moment from "moment";

interface props extends RangeVirtualizedColumnsInterface, rangeVirtualizedDataSourceInterface {
    categoryIndex: number,
}

export const RangeCalendarScheduleContainerVirtualized = ({columns, dataSource, categoryIndex}: props) => {

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
        _renderBodyCell,
        scrollTop,
        scrollLeft,
        textColorColumn,
        bgColorColumn,
    } = useRangeCalendarScheduleVirtualized();

    return (
        <div
            style={{
                backgroundColor: bgColorColumn,
                color: textColorColumn,
            }}
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
                    const items = _.filter(dataSource, item => {
                        return item.column === columns[props?.rowIndex].accessorKey && moment(days[props.columnIndex]).format('YYYY-MM-DD') === moment(item.date).format("YYYY-MM-DD")
                    });

                    return _renderBodyCell({...props, items})
                }}
                rowHeight={rowHeight}
                rowCount={getRowCount(columns)}

                scrollTop={scrollTop - ((rowHeight + (getRowCount(columns) * rowHeight)) * categoryIndex)}
                scrollLeft={scrollLeft}
            />
        </div>
    )
}