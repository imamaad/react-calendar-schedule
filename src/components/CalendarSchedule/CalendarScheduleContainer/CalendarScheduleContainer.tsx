import React from "react";
import moment, {Moment} from "moment/moment";
import {CalendarScheduleDates} from "../CalendarScheduleDates/CalendarScheduleDates";
import {CalendarScheduleContainerGrid} from "../CalendarScheduleContainerGrid/CalendarScheduleContainerGrid";
import { ColumnsInterface } from "../../../common/interfaces";
import {DataSourceInterface} from "../../../common/interfaces";

export interface CalendarScheduleContainerInterface extends ColumnsInterface, DataSourceInterface {
    refContent: React.LegacyRef<HTMLDivElement>,
    refListDates: React.LegacyRef<HTMLDivElement>,
    refTodayHeader: React.LegacyRef<HTMLDivElement>,
    refBoxData: React.LegacyRef<HTMLDivElement>,
    calendar: Array<string | moment.Moment>,
    width: string | number,
    height: string | number,
    contentEvents?: {
        onScroll: React.UIEventHandler<HTMLDivElement> | undefined
        onMouseDown: React.UIEventHandler<HTMLDivElement> | undefined
        onMouseLeave: React.UIEventHandler<HTMLDivElement> | undefined
        onMouseMove: React.UIEventHandler<HTMLDivElement> | undefined
        onMouseUp: React.UIEventHandler<HTMLDivElement> | undefined
        onTouchStart: React.UIEventHandler<HTMLDivElement> | undefined
        onTouchMove: React.UIEventHandler<HTMLDivElement> | undefined
        onTouchEnd: React.UIEventHandler<HTMLDivElement> | undefined
    },
    loading?: {
        startDate: Moment,
        endDate: Moment,
        visible: boolean,
        component: React.ReactNode
    }
}

export const CalendarScheduleContainer = (props: CalendarScheduleContainerInterface) => {
    const {
        refContent,
        calendar,
        width ,
        height ,
        refListDates,
        refTodayHeader,
        contentEvents,
        refBoxData,
        columns,
        dataSource,
        loading
    } = props;

    return (
        <div className="flex-1 d-flex flex-direction-column" style={{width: '1%'}}>
            <CalendarScheduleContainerGrid
                calendar={calendar}
                width={width}
                height={height}
                refBoxData={refBoxData}
                columns={columns}
                dataSource={dataSource}
                refContent={refContent}
                loading={loading}
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