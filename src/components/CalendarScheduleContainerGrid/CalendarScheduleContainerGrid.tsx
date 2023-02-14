import React from "react";
import {Moment} from "moment";
import {CalendarScheduleColumns} from "../CalendarScheduleColumns/CalendarScheduleColumns";
import {ColumnsInterface} from "../../common/interfaces";
import {DataSourceInterface} from "../../common/interfaces";

export interface CalendarScheduleContainerGridInterface extends ColumnsInterface, DataSourceInterface {
    refContent: React.LegacyRef<HTMLDivElement>,
    refBoxData: React.LegacyRef<HTMLDivElement>,
    calendar: Array<string | Moment>,
    width?: string | number,
    height?: string | number,
    loading?: {
        startDate: Moment,
        endDate: Moment,
        visible: boolean,
        component: React.ReactNode
    },
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

export const CalendarScheduleContainerGrid = (props: CalendarScheduleContainerGridInterface) => {
    const {
        refContent,
        contentEvents,
        calendar,
        refBoxData,
        columns,
        width = 180,
        height = 180,
        dataSource,
        loading
    } = props;

    return (
        <div ref={refContent} className="calendar-grid-row"
             onScroll={contentEvents?.onScroll}
             onMouseDown={contentEvents?.onMouseDown}
             onMouseLeave={contentEvents?.onMouseLeave}
             onMouseMove={contentEvents?.onMouseMove}
             onMouseUp={contentEvents?.onMouseUp}
             onTouchStart={contentEvents?.onTouchStart}
             onTouchMove={contentEvents?.onTouchMove}
             onTouchEnd={contentEvents?.onTouchEnd}
        >
            <div className='calendar-grid-cell'>
                <div className="colsContent" ref={refBoxData}>
                    <div className='draggable-calendar'>
                        <div className='box-calendar-scheduler-horizontal'>
                            <div className='box-body-calendar-scheduler-horizontal'>
                                {calendar.map((day, index) =>
                                    <CalendarScheduleColumns
                                        date={day}
                                        key={index}
                                        dataSource={dataSource}
                                        columns={columns}
                                        width={width}
                                        height={height}
                                        loading={loading}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}