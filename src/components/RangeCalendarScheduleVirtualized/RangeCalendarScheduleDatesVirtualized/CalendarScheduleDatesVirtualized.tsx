import React from "react";
import {useRangeCalendarScheduleVirtualized} from "../RangeCalendarScheduleContextVirtualized";
import {Grid} from "react-virtualized";
import {RangeVirtualizedColumnsInterface} from "../../../common/interfaces/ColumnVirtualizedInterface";
import moment from "moment/moment";


export const CalendarScheduleDatesVirtualized = () => {

    const {
        columnWidth,
        columnCount,
        headerHeight,
        overScanColumnCount,
        scrollLeft,
        width,
        bgColorHeader,
        textColorHeader,
        bordered,
        days,
        format
    } = useRangeCalendarScheduleVirtualized();

    const _renderHeaderCell = ({columnIndex, key, rowIndex, style}: any) => {
        return (
            <div
                className="imamaad-range-calendar-schedule-virtualized-sticky"
                key={key}
                style={{
                    ...style,
                    border: bordered ? '1px solid #bbb' : 'unset',
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <div style={{flex: 1, textAlign: 'center', borderBottom: '2px solid #bbb'}}>
                    {`${moment(days[columnIndex]).format(format?.top || 'YYYY-MM-DD')}`}
                </div>
                <div style={{flex: 1, textAlign: 'center'}}>
                    {`${moment(days[columnIndex]).format(format?.bottom || 'YYYY-MM-DD')}`}
                </div>
            </div>
        );
    }

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