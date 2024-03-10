import React from "react";
import {useRangeCalendarScheduleVirtualized} from "../RangeCalendarScheduleContextVirtualized";
import {Grid} from "react-virtualized";
import {RangeVirtualizedColumnsInterface} from "../../../common/interfaces/ColumnVirtualizedInterface";

interface props extends RangeVirtualizedColumnsInterface {
    categoryIndex: number,
}

export const RangeCalendarScheduleSiderVirtualized = ({columns, categoryIndex}: props) => {

    const {
        overScanColumnCount,
        overScanRowCount,
        _renderLeftSideCell,
        height,
        rowHeight,
        getRowCount,
        scrollTop,
        sidebarWidth,
        bgColorSidebar,
        textColorSidebar,
    } = useRangeCalendarScheduleVirtualized();

    return (
        <div
            className={"LeftSideGridContainer"}
            style={{
                color: textColorSidebar,
                backgroundColor: bgColorSidebar,
                width: sidebarWidth
            }}
        >
            <Grid
                autoHeight={true}
                autoWidth={true}
                overscanColumnCount={overScanColumnCount}
                overscanRowCount={overScanRowCount}
                cellRenderer={(props) => {
                    return _renderLeftSideCell({...props,column:columns[props.columnIndex]})
                }}
                columnWidth={sidebarWidth}
                columnCount={1}
                className={"LeftSideGrid"}
                height={height}
                rowHeight={rowHeight}
                rowCount={getRowCount(columns)}
                scrollTop={scrollTop - ((rowHeight + (getRowCount(columns) * rowHeight)) * categoryIndex)}
                width={sidebarWidth}
            />
        </div>
    )
}