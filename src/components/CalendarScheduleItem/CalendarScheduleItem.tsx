import React from "react";
import {DataSourceItemInterface} from "../../common/interfaces";

export const CalendarScheduleItem = ({item}: { item: DataSourceItemInterface }) => {
    return (
        <div style={item.style}>
            {item.children}
        </div>
    )
}