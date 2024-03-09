import React from "react";
import {RangeDataSourceItemInterface} from "../../../common/interfaces/dataSourceItemInterface";

export const RangeCalendarScheduleItem = ({item}: { item: RangeDataSourceItemInterface }) => {
    return (
        <div style={item.style}>
            {item.children}
        </div>
    )
}