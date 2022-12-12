import React from "react";
import moment from "moment/moment";
import {CalendarScheduleDates} from "../CalendarScheduleDates/CalendarScheduleDates";
import {CalendarScheduleContainerGrid} from "../CalendarScheduleContainerGrid/CalendarScheduleContainerGrid";
import {ColumnsInterface} from "common/interfaces/ColumnInterface";
import {DataSourceInterface} from "common/interfaces/dataSourceItemInterface";

export interface CalendarScheduleContainerInterface extends ColumnsInterface, DataSourceInterface {
    refContent: React.LegacyRef<HTMLDivElement>,
    refListDates: React.LegacyRef<HTMLDivElement>,
    refTodayHeader: React.LegacyRef<HTMLDivElement>,
    refBoxData: React.LegacyRef<HTMLDivElement>,
    calendar: Array<string | moment.Moment>,
    width?: string | number,
    height?: string | number,
    contentEvents?: {
        onScroll: React.UIEventHandler<HTMLDivElement> | undefined
        onMouseDown: React.UIEventHandler<HTMLDivElement> | undefined
        onMouseLeave: React.UIEventHandler<HTMLDivElement> | undefined
        onMouseMove: React.UIEventHandler<HTMLDivElement> | undefined
        onMouseUp: React.UIEventHandler<HTMLDivElement> | undefined
        onTouchStart: React.UIEventHandler<HTMLDivElement> | undefined
        onTouchMove: React.UIEventHandler<HTMLDivElement> | undefined
        onTouchEnd: React.UIEventHandler<HTMLDivElement> | undefined
    }
}

export const CalendarScheduleContainer = (props: CalendarScheduleContainerInterface) => {
    const {
        refContent,
        calendar,
        width = 180,
        height = 180,
        refListDates,
        refTodayHeader,
        contentEvents,
        refBoxData,
        columns,
        dataSource,
    } = props;

    return (
        <div className="flex-1 d-flex flex-direction-column" style={{width: '1%'}}>
            <CalendarScheduleDates
                refListDates={refListDates}
                calendar={calendar}
                width={width}
                refTodayHeader={refTodayHeader}
            />

            <CalendarScheduleContainerGrid
                calendar={calendar}
                width={width}
                height={height}
                refBoxData={refBoxData}
                columns={columns}
                dataSource={dataSource}
                refContent={refContent}
                contentEvents={{
                    onScroll: contentEvents?.onScroll,
                    onMouseDown: contentEvents?.onMouseDown,
                    onMouseLeave: contentEvents?.onMouseLeave,
                    onMouseMove: contentEvents?.onMouseMove,
                    onMouseUp: contentEvents?.onMouseUp,
                    onTouchStart: contentEvents?.onTouchStart,
                    onTouchMove: contentEvents?.onTouchMove,
                    onTouchEnd: contentEvents?.onTouchEnd,
                }}
            />
        </div>
    )
}