import React from "react";
import {useRangeCalendarSchedule} from "../RangeCalendarScheduleContextVirtualized";
import {RangeCalendarScheduleListGroup} from "../RangeCalendarScheduleListGroup/RangeCalendarScheduleListGroup";

export const RangeCalendarScheduleSider = () => {

    const {size} = useRangeCalendarSchedule();

    return (
        <div className='box-left-titles-calendar-scheduler-horizontal' style={{width:size?.width}}>
            <RangeCalendarScheduleListGroup />
        </div>
    )
}