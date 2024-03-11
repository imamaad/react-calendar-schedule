import React, {useMemo, useState} from "react";
import {useRangeCalendarScheduleVirtualized} from "../RangeCalendarScheduleContextVirtualized";
import {RangeCalendarScheduleHeaderVirtualized} from "../ReangeCalendarScheduleHeaderVirtualized";
import {RangeCalendarScheduleBodyVirtualized} from "../RangeCalendarScheduleBodyVirtualized";
import {
    RangeVirtualizedCategoryInterface
} from "../../../common/interfaces/RangeCalendarScheduleVirtualizedInitialInterface";

interface props {
    category: RangeVirtualizedCategoryInterface,
    categoryIndex: number,
}

export const RangeCalendarScheduleCategoryVirtualized = ({category, categoryIndex}: props) => {

    const {getRowCount, rowHeight, headerHeight} = useRangeCalendarScheduleVirtualized();

    const [open, setOpen] = useState(category.defaultOpen);

    const height = useMemo(() => open ? (headerHeight + (getRowCount(category.columns) * rowHeight)) : headerHeight, [open]);

    return (
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
            {
                open &&
                <RangeCalendarScheduleBodyVirtualized
                    category={category}
                />
            }
        </div>
    )
}