import React from "react";
import {RangeCalendarScheduleSider} from "../RangeCalendarScheduleSider/RangeCalendarScheduleSider";
import {RangeCalendarScheduleContainer} from "../RangeCalendarScheduleContainer/RangeCalendarScheduleContainer";

export const RangeCalendarScheduleBody = () => {
    return (
        <div className='calendar-body-root'>
            <RangeCalendarScheduleSider/>

            <RangeCalendarScheduleContainer/>
        </div>
    )
}