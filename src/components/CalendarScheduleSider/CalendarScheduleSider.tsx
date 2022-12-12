import {CalendarScheduleListGroup} from "../CalendarScheduleListGroup/CalendarScheduleListGroup";
import React from "react";
import {ColumnInterface} from "../../common/interfaces";

export interface CalendarScheduleSiderInterface {
    title: string,
    width?: string | number,
    refListGroup: React.LegacyRef<HTMLDivElement>,
    columns: Array<ColumnInterface>
}

export const CalendarScheduleSider = (props: CalendarScheduleSiderInterface) => {

    const {title, width = 180, refListGroup, columns} = props;

    return (
        <div className='box-left-titles-calendar-scheduler-horizontal' style={{width}}>
            <div className='box-title-items-calendar-scheduler-horizontal' style={{width}}>
                {title}
            </div>
            <CalendarScheduleListGroup
                columns={columns}
                width={180}
                heightItemGroup={180}
                refListGroup={refListGroup}
            />
        </div>
    )
}