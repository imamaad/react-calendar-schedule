import React from "react";
import {useRangeCalendarSchedule} from "../RangeCalendarScheduleContextVirtualized";
import _ from "lodash";
import {RangeCalendarScheduleColumns} from "../RangeCalendarScheduleColumns/CalendarScheduleColumns";


export const RangeCalendarScheduleContainerGrid = () => {

    const {refBoxData,days, refCalendar, contentEvents} = useRangeCalendarSchedule();

    return (
        <div ref={refCalendar} className="calendar-grid-row"
             onScroll={contentEvents.onScroll}
             onMouseDown={contentEvents.onMouseDown}
             onMouseLeave={contentEvents.onMouseLeave}
             onMouseMove={contentEvents.onMouseMove}
             onMouseUp={contentEvents.onMouseUp}
             onTouchStart={contentEvents.onTouchStart}
             onTouchMove={contentEvents.onTouchMove}
             onTouchEnd={contentEvents.onTouchEnd}
        >
            <div className='calendar-grid-cell'>
                <div className="colsContent" ref={refBoxData}>
                    <div className='draggable-calendar'>
                        <div className='box-calendar-scheduler-horizontal'>
                            <div className='box-body-calendar-scheduler-horizontal'>
                                {_.map(days, (day, index) =>
                                    <RangeCalendarScheduleColumns date={day} key={index}/>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}