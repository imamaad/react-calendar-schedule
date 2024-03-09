import React from "react";
import {render} from "@testing-library/react";
import {RangeCalendarScheduleVirtualized} from "./RangeCalendarScheduleVirtualized";

describe("RangeCalendarSchedule", () => {
    test("renders the CalendarSchedule component", () => {
        render(
            <RangeCalendarScheduleVirtualized
                size={{width: 180, height: 180}}
                bgColorHeader={'red'}
                columns={[]}
                dataSource={[]}
                minTime={'2020-10-10'}
                maxTime={'2020-10-20'}
                sidebarTitle={'title'}
            />
        );
    });
});