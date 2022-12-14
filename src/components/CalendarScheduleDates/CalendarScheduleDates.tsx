import React from "react";
import dayClasses from "components/CalendarSchedule/stylesCalendar";
import moment from "moment";

export interface CalendarScheduleDates {
    refListDates: React.LegacyRef<HTMLDivElement>,
    refTodayHeader: React.LegacyRef<HTMLDivElement>,
    calendar: Array<string | moment.Moment>,
    width: string | number
}

export const CalendarScheduleDates = (props: CalendarScheduleDates) => {
    const {refListDates, calendar, width, refTodayHeader} = props;
    return (
        <div className='box-header-calendar-scheduler-horizontal' ref={refListDates}>
            {calendar.map((day, index) =>
                <div
                    className={`box-title-day-calendar-scheduler-horizontal ${dayClasses(day)}`}
                    style={{minWidth: width, width}}
                    ref={dayClasses(day) === "today" ? refTodayHeader : null}
                    key={index}
                >
                    {day && moment(day).format('D MMM ddd')}
                </div>
            )}
        </div>
    )
}