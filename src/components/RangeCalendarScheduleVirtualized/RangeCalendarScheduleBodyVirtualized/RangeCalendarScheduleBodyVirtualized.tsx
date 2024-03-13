import React from "react";
import {
    RangeCalendarScheduleSiderVirtualized
} from "../RangeCalendarScheduleSiderVirtualized/RangeCalendarScheduleSiderVirtualized";
import {
    RangeCalendarScheduleContainerVirtualized
} from "../RangeCalendarScheduleContainerVirtualized/RangeCalendarScheduleContainerVirtualized";
import {useRangeCalendarScheduleVirtualized} from "../RangeCalendarScheduleContextVirtualized";


export const RangeCalendarScheduleBodyVirtualized = () => {

    const {columnWidth, columnCount, width, height} = useRangeCalendarScheduleVirtualized();

    return (

        <div
            className={"GridBody"}
            style={{
                width: width,
                height: height
            }}
        >
            <RangeCalendarScheduleSiderVirtualized/>
            <RangeCalendarScheduleContainerVirtualized/>
        </div>
    )
}