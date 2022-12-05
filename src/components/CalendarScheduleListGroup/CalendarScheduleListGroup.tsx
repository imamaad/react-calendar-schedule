import React from "react";
import _ from "lodash";
import {CalendarScheduleItemGroup} from "components/CalendarScheduleItemGroup/CalendarScheduleItemGroup";

export interface Groups {
    title: string,
    subTitle?: string,
}

export interface CalendarScheduleListGroup {
    width?: string | number
    heightItemGroup?: string | number,
    columns: Array<Groups>
    refListGroup: React.LegacyRef<HTMLDivElement>
}

export const CalendarScheduleListGroup = (props: CalendarScheduleListGroup) => {
    const {width = 180, heightItemGroup = 180, columns, refListGroup} = props;

    return (
        <div className='list-titles-calendar-scheduler-horizontal' style={{width}} ref={refListGroup}>
            {_.map(columns, (item: Groups, index) =>
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