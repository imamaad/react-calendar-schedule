import React from "react";
import {
    RangeCalendarScheduleContainerGrid
} from "../RangeCalendarScheduleContainerGrid/RangeCalendarScheduleContainerGrid";

export const RangeCalendarScheduleContainer = () => {

    return (
        <div className="flex-1 d-flex flex-direction-column" style={{width: '1%'}}>
            <RangeCalendarScheduleContainerGrid/>
        </div>
    )
}