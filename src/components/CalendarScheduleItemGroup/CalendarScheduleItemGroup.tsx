import React from "react";

export interface CalendarScheduleItemGroup {
    title?: string,
    subTitle?: string,
    width?:string|number
    height?:string|number
}

export const CalendarScheduleItemGroup = (props: CalendarScheduleItemGroup) => {
    const {title, subTitle, width = 180, height = 180} = props;

    return (
        <div
            className='box-item-title-calendar-scheduler-horizontal'
            style={{width: width, height: height}}
        >
            <div>{title}</div>
            {subTitle && <div>{subTitle}</div>}
        </div>
    )
}