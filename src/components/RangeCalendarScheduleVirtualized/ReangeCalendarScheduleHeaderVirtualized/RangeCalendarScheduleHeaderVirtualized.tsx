import React from "react";
import {useRangeCalendarScheduleVirtualized} from "../RangeCalendarScheduleContextVirtualized";
import {
    CalendarScheduleDatesVirtualized
} from "../RangeCalendarScheduleDatesVirtualized/CalendarScheduleDatesVirtualized";
import {Grid} from "react-virtualized";
import {
    RangeVirtualizedCategoryInterface
} from "../../../common/interfaces/RangeCalendarScheduleVirtualizedInitialInterface";

export const RangeCalendarScheduleHeaderVirtualized = ({category, open, onChangeOpen, categoryIndex}: {
    category: RangeVirtualizedCategoryInterface,
    open: boolean,
    onChangeOpen: (value: boolean) => void,
    categoryIndex: number
}) => {

    const {
        columnWidth,
        columnCount,
        bgColorHeader,
        textColorHeader,
        headerHeight,
        sidebarWidth,
        bordered,
        openIcon
    } = useRangeCalendarScheduleVirtualized();

    const _renderLeftHeaderCell = ({title = "", columnIndex, key, style}: any) => {
        return (
            <div
                className="headerCell" key={key}
                style={{
                    ...style,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: "0 10px",
                    boxSizing: "border-box",
                }}
            >
                <div>{title}</div>
                <div onClick={() => onChangeOpen(!open)} style={{cursor: "pointer"}}>
                    {openIcon}
                </div>
            </div>
        );
    }

    return (
        <div
            className={"GridHeader"}
            style={{
                height: headerHeight,
                width: sidebarWidth + (columnCount * columnWidth),
                backgroundColor: bgColorHeader,
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

            {(open || categoryIndex === 0) && <CalendarScheduleDatesVirtualized/>}
        </div>
    )
}