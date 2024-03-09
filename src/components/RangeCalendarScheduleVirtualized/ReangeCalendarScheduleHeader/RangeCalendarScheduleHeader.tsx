import React from "react";
import {useRangeCalendarSchedule} from "../RangeCalendarScheduleContextVirtualized";
import {RangeCalendarScheduleDates} from "../RangeCalendarScheduleDates/CalendarScheduleDates";

export const RangeCalendarScheduleHeader = () => {
    const {sidebarTitle, size, bgColorHeader} = useRangeCalendarSchedule();

    return (
        <div className='calendar-header-root'>
            <div
                className='box-title-items-calendar-scheduler-horizontal'
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    width: size.width,
                    backgroundColor: bgColorHeader
                }}
            >
                {sidebarTitle}
            </div>
            <RangeCalendarScheduleDates/>
        </div>
    )
}