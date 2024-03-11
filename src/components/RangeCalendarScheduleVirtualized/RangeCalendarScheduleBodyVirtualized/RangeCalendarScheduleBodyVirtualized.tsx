import React from "react";
import {
    RangeCalendarScheduleSiderVirtualized
} from "../RangeCalendarScheduleSiderVirtualized/RangeCalendarScheduleSiderVirtualized";
import {
    RangeCalendarScheduleContainerVirtualized
} from "../RangeCalendarScheduleContainerVirtualized/RangeCalendarScheduleContainerVirtualized";
import {useRangeCalendarScheduleVirtualized} from "../RangeCalendarScheduleContextVirtualized";
import {
    RangeVirtualizedCategoryInterface
} from "../../../common/interfaces/RangeCalendarScheduleVirtualizedInitialInterface";

export const RangeCalendarScheduleBodyVirtualized = ({category}: {
    category: RangeVirtualizedCategoryInterface,
}) => {

    const {columnWidth, columnCount} = useRangeCalendarScheduleVirtualized();

    return (
        <div
            className={"GridBody"}
            style={{
                width: columnCount * columnWidth,
            }}
        >
            <RangeCalendarScheduleSiderVirtualized
                columns={category.columns}
            />
            <RangeCalendarScheduleContainerVirtualized
                columns={category.columns}
            />
        </div>
    )
}