import React from "react";
import {useRangeCalendarSchedule} from "../RangeCalendarScheduleContext";
import {RangeColumnInterface} from "../../../common/interfaces/ColumnInterface";

export const RangeCalendarScheduleItemGroup = (props: RangeColumnInterface) => {
    const {title, subTitle } = props;

    const {size} = useRangeCalendarSchedule();

    return (
        <div
            className='box-item-title-calendar-scheduler-horizontal'
            style={{width: size.width, height: size.height}}
        >
            <div>{title}</div>
            {subTitle && <div>{subTitle}</div>}
        </div>
    )
}