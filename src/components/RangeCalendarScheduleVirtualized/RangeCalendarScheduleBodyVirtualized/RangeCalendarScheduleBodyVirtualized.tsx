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

export const RangeCalendarScheduleBodyVirtualized = ({category, categoryIndex}: {
    category: RangeVirtualizedCategoryInterface,
    categoryIndex: number
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
                categoryIndex={categoryIndex}
            />
            <RangeCalendarScheduleContainerVirtualized
                dataSource={category.dataSource}
                columns={category.columns}
                categoryIndex={categoryIndex}
            />
        </div>
    )
}