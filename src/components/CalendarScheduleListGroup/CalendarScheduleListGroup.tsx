import React from "react";
import _ from "lodash";
import {CalendarScheduleItemGroup} from "../CalendarScheduleItemGroup/CalendarScheduleItemGroup";
import {ColumnInterface} from "../../common/interfaces";

export interface CalendarScheduleListGroupInterface {
    width?: string | number
    heightItemGroup?: string | number,
    columns: Array<ColumnInterface>
    refListGroup: any
}

export const CalendarScheduleListGroup = (props: CalendarScheduleListGroupInterface) => {
    const {width = 180, heightItemGroup = 180, columns, refListGroup} = props;

    return (
        <div className='list-titles-calendar-scheduler-horizontal' style={{width}} ref={refListGroup}>
            {_.map(columns, (item: ColumnInterface, index) =>
                <CalendarScheduleItemGroup
                    title={item.title}
                    subTitle={item.subTitle}
                    key={index}
                    height={heightItemGroup}
                    width={width}
                />
            )}
        </div>
    )
}