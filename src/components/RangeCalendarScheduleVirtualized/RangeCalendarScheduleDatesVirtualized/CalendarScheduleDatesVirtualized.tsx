import React from "react";
import {useRangeCalendarScheduleVirtualized} from "../RangeCalendarScheduleContextVirtualized";
import {Grid} from "react-virtualized";
import {RangeVirtualizedColumnsInterface} from "../../../common/interfaces/ColumnVirtualizedInterface";


export const CalendarScheduleDatesVirtualized = ({columns}:RangeVirtualizedColumnsInterface) => {

    const {
        columnWidth,
        columnCount,
        headerHeight,
        overScanColumnCount,
        _renderHeaderCell,
        scrollLeft,
        width,
        bgColorHeader,
        textColorHeader,
    } = useRangeCalendarScheduleVirtualized();

    return (
        <div
            style={{
                backgroundColor: bgColorHeader,
                color: textColorHeader,
                height: headerHeight,
            }}
        >
            <Grid
                autoHeight={true}
                autoWidth={true}
                className={"HeaderGrid"}
                columnWidth={columnWidth}
                columnCount={columnCount}
                height={headerHeight}
                overscanColumnCount={overScanColumnCount}
                cellRenderer={_renderHeaderCell}
                rowHeight={headerHeight / 2}
                rowCount={2}
                scrollLeft={scrollLeft}
                width={width}
            />
        </div>
    )
}