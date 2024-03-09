import React from "react";
import moment from "moment";
import _ from "lodash";
import dayClasses from "../rangeStylesCalendarVirtualized";
import {useRangeCalendarSchedule} from "../RangeCalendarScheduleContextVirtualized";


export const RangeCalendarScheduleDates = () => {

    const {days, refBoxDays, refTodayHeader, format, size, bgColorHeader} = useRangeCalendarSchedule();

    return (
        <div
            className='box-header-calendar-scheduler-horizontal'
            style={{width: `calc(100% - ${size.width}px)`}}
            ref={refBoxDays}
        >
            {_.map(days, (day, index) =>
                <div key={index} style={{display: 'flex', flexDirection: 'column'}}>
                    {format?.top &&
                        <div
                            className={`box-title-day-calendar-scheduler-horizontal ${dayClasses(day)}`}
                            style={{width: size.width, flex: 1, backgroundColor: bgColorHeader}}
                            ref={dayClasses(day) === "today" ? refTodayHeader : null}

                        >
                            {day && moment(day).format(format.top)}
                        </div>
                    }
                    {format?.bottom &&
                        <div
                            className={`box-title-day-calendar-scheduler-horizontal ${dayClasses(day)}`}
                            style={{width: size.width, flex: 1, backgroundColor: bgColorHeader}}
                            ref={dayClasses(day) === "today" ? refTodayHeader : null}
                        >
                            {day && moment(day).format(format.bottom)}
                        </div>
                    }
                </div>
            )}
        </div>
    )
}