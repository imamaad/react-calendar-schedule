import React from "react";
import dayClasses from "../CalendarSchedule/stylesCalendar";
import moment from "moment";

export interface CalendarScheduleDatesInterface {
    bgColorHeader: string,
    format?: {
        top?: string,
        bottom?: string,
    },
    refListDates: React.LegacyRef<HTMLDivElement>,
    refTodayHeader: React.LegacyRef<HTMLDivElement>,
    calendar: Array<string | moment.Moment>,
    width: string | number
}

export const CalendarScheduleDates = (props: CalendarScheduleDatesInterface) => {
    const {bgColorHeader, refListDates, calendar, width, refTodayHeader, format = {top: "D MMM ddd", bottom: undefined}} = props;
    return (
        <div
            className='box-header-calendar-scheduler-horizontal'
            style={{width: `calc(100% - ${width}px)`}}
            ref={refListDates}
        >
            {calendar.map((day, index) =>
                <div key={index} style={{display: 'flex', flexDirection: 'column'}}>
                    {format?.top &&
                        <div
                            className={`box-title-day-calendar-scheduler-horizontal ${dayClasses(day)}`}
                            style={{width, flex: 1, backgroundColor: bgColorHeader}}
                            ref={dayClasses(day) === "today" ? refTodayHeader : null}

                        >
                            {day && moment(day).format(format.top)}
                        </div>
                    }
                    {format?.bottom &&
                        <div
                            className={`box-title-day-calendar-scheduler-horizontal ${dayClasses(day)}`}
                            style={{width, flex: 1, backgroundColor: bgColorHeader}}
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