import React from "react";
import {useRangeCalendarScheduleVirtualized} from "../RangeCalendarScheduleContextVirtualized";
import {
    CalendarScheduleDatesVirtualized
} from "../RangeCalendarScheduleDatesVirtualized/CalendarScheduleDatesVirtualized";
import {Grid} from "react-virtualized";
import {
    RangeVirtualizedCategoryInterface
} from "../../../common/interfaces/RangeCalendarScheduleVirtualizedInitialInterface";

export const RangeCalendarScheduleHeaderVirtualized = ({category, open, onChangeOpen}: {
    category: RangeVirtualizedCategoryInterface,
    open: boolean,
    onChangeOpen: (value: boolean) => void
}) => {

    const {
        columnWidth,
        columnCount,
        bgColorHeader,
        textColorHeader,
        headerHeight,
        sidebarWidth,
        bordered,
    } = useRangeCalendarScheduleVirtualized();

    const _renderLeftHeaderCell = ({title = "", columnIndex, key, style}: any) => {
        return (
            <div className="headerCell" key={key} style={style}>
                <div>{title}</div>
                <div onClick={() => onChangeOpen(!open)}>BTN</div>
            </div>
        );
    }

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