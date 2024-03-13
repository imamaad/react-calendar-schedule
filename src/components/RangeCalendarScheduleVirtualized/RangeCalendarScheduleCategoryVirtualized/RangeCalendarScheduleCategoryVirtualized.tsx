import React, {useMemo, useState} from "react";
import {useRangeCalendarScheduleVirtualized} from "../RangeCalendarScheduleContextVirtualized";
import {RangeCalendarScheduleHeaderVirtualized} from "../ReangeCalendarScheduleHeaderVirtualized";
import {RangeCalendarScheduleBodyVirtualized} from "../RangeCalendarScheduleBodyVirtualized";
import {
    RangeVirtualizedCategoryInterface
} from "../../../common/interfaces/RangeCalendarScheduleVirtualizedInitialInterface";

export const RangeCalendarScheduleCategoryVirtualized = () => {

    return (
        <RangeCalendarScheduleBodyVirtualized/>
    )
    /*return (
        <div
            style={{
                height: height,
            }}
        >
            <RangeCalendarScheduleHeaderVirtualized
                category={category}
                categoryIndex={categoryIndex}
                open={open}
                onChangeOpen={(value: boolean) => {
                    setOpen(value)
                }}
            />
            <RangeCalendarScheduleBodyVirtualized
                category={category}
                open={open}
            />
        </div>
    )*/
}