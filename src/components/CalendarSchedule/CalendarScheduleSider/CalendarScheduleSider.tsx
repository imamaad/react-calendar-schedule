import {CalendarScheduleListGroup} from "../CalendarScheduleListGroup/CalendarScheduleListGroup";
import React from "react";
import {ColumnInterface} from "../../../common/interfaces";

export interface CalendarScheduleSiderInterface {
    width: string | number,
    height: string | number,
    refListGroup: React.LegacyRef<HTMLDivElement>,
    columns: Array<ColumnInterface>
}

export const CalendarScheduleSider = (props: CalendarScheduleSiderInterface) => {

    const { width,height, refListGroup, columns} = props;

    return (
        <div className='box-left-titles-calendar-scheduler-horizontal' style={{width}}>
            <CalendarScheduleListGroup
                columns={columns}
                width={width}
                height={height}
                refListGroup={refListGroup}
            />
        </div>
    )
}