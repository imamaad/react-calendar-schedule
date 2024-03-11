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
import AnimateHeight from "react-animate-height";

export const RangeCalendarScheduleBodyVirtualized = ({category, open}: {
    category: RangeVirtualizedCategoryInterface,
    open: boolean
}) => {

    const {columnWidth, columnCount} = useRangeCalendarScheduleVirtualized();

    return (
        <AnimateHeight
            duration={200}
            height={open ? "auto" : 0}
        >
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
        </AnimateHeight>
    )
}