import React, {useRef} from "react";
import {Grid} from "react-virtualized";
import {useRangeCalendarScheduleVirtualized} from "../RangeCalendarScheduleContextVirtualized";
import {RangeVirtualizedColumnsInterface} from "../../../common/interfaces/ColumnVirtualizedInterface";
import {rangeVirtualizedDataSourceInterface} from "../../../common/interfaces/rangeVirtualizedDataSourceInterface";
import _ from "lodash";
import moment from "moment";

interface props extends RangeVirtualizedColumnsInterface {
    categoryIndex: number,
}

export const RangeCalendarScheduleContainerVirtualized = ({columns, categoryIndex}: props) => {

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

    const ref = useRef<any>(null);

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
                    const items = _.filter(columns[props?.rowIndex]?.dataSource, item => {
                        return moment(days[props.columnIndex]).format('YYYY-MM-DD') === moment(item.date).format("YYYY-MM-DD")
                    });

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