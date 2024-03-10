import React from "react";
import {useRangeCalendarScheduleVirtualized} from "../RangeCalendarScheduleContextVirtualized";
import {
    CalendarScheduleDatesVirtualized
} from "../RangeCalendarScheduleDatesVirtualized/CalendarScheduleDatesVirtualized";
import {Grid} from "react-virtualized";
import {
    RangeVirtualizedCategoryInterface
} from "../../../common/interfaces/RangeCalendarScheduleVirtualizedInitialInterface";

export const RangeCalendarScheduleHeaderVirtualized = ({category}: { category: RangeVirtualizedCategoryInterface }) => {

    const {
        columnWidth,
        columnCount,
        _renderLeftHeaderCell,
        bgColorHeader,
        textColorHeader,
        headerHeight,
        sidebarWidth,
        bordered,
    } = useRangeCalendarScheduleVirtualized();

    return (
        <div
            className={"GridHeader"}
            style={{
                height: headerHeight,
                width: columnCount * columnWidth,
            }}
        >
            <div
                className={"GridTitle"}
                style={{
                    color: textColorHeader,
                    backgroundColor: bgColorHeader,
                    height: headerHeight,
                    width: sidebarWidth,
                    border: bordered ? '1px solid #bbb' : 'unset',
                    boxSizing: 'border-box',
                }}
            >
                <Grid
                    autoHeight={true}
                    autoWidth={true}
                    cellRenderer={(items) => _renderLeftHeaderCell({...items, title: category.title})}
                    className={"HeaderGrid"}
                    width={sidebarWidth}
                    height={headerHeight}
                    rowHeight={headerHeight}
                    columnWidth={sidebarWidth}
                    rowCount={1}
                    columnCount={1}
                />
            </div>

            <CalendarScheduleDatesVirtualized columns={category.columns}/>
        </div>
    )
}