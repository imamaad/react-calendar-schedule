import _ from "lodash";
import React from "react";
import moment from "moment";
import {useRangeCalendarSchedule} from "../RangeCalendarScheduleContext";
import {RangeCalendarScheduleItemCell} from "../RangeCalendarScheduleItemCell/CalendarScheduleItemCell";

export interface CalendarScheduleColumnsInterface {
    date: string | moment.Moment,
}

export const RangeCalendarScheduleColumns = (props: CalendarScheduleColumnsInterface) => {

    const {columns} = useRangeCalendarSchedule();

    return (
        <div className='box-week-calendar-scheduler-horizontal'>
            {
                <div className='box-data-day-calendar-scheduler-horizontal'>
                    {_.map(columns, (column, index) =>
                        <RangeCalendarScheduleItemCell key={index} column={column}/>
                    )}
                </div>
            }
        </div>
    )
}