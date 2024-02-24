import React from "react";
import _ from "lodash";
import {CalendarScheduleItemGroup} from "../CalendarScheduleItemGroup/CalendarScheduleItemGroup";
import {ColumnInterface} from "../../common/interfaces";

export interface CalendarScheduleListGroupInterface {
    width?: string | number
    height?: string | number,
    columns: Array<ColumnInterface>
    refListGroup: any
}

export const CalendarScheduleListGroup = (props: CalendarScheduleListGroupInterface) => {
    const {width , height , columns, refListGroup} = props;

    return (
        <div className='list-titles-calendar-scheduler-horizontal' style={{width}} ref={refListGroup}>
            {_.map(columns, (item: ColumnInterface, index) =>
                <CalendarScheduleItemGroup
                    title={item.title}
                    subTitle={item.subTitle}
                    key={index}
                    height={height}
                    width={width}
                />
            )}
        </div>
    )
}