import React from "react";
import {render} from "@testing-library/react";
import {RangeCalendarSchedule} from "./RangeCalendarSchedule";

describe("RangeCalendarSchedule", () => {
    test("renders the CalendarSchedule component", () => {
        render(
            <RangeCalendarSchedule
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