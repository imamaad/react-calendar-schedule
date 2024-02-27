import React from "react";
import {RangeCalendarScheduleConsumer, RangeCalendarScheduleProvider} from "./RangeCalendarScheduleContext";
import {RangeCalendarScheduleInitialInterface} from "../../common/interfaces";
import {RangeCalendarScheduleHeader} from "./ReangeCalendarScheduleHeader";

import "./range-calendar-schedule.scss";
import {RangeCalendarScheduleBody} from "./RangeCalendarScheduleBody";

export const RangeCalendarSchedule: React.FC<RangeCalendarScheduleInitialInterface> = (props) => {

    return (
        <RangeCalendarScheduleProvider initialProps={props}>
            <RangeCalendarScheduleConsumer>
                {({}) => (
                    <div className='calendar-grid-table calendar-ops'>
                        <RangeCalendarScheduleHeader/>
                        <RangeCalendarScheduleBody/>
                    </div>
                )}
            </RangeCalendarScheduleConsumer>
        </RangeCalendarScheduleProvider>
    )
}