import React from "react";
import {render} from "@testing-library/react";
import {RangeCalendarSchedule} from "./RangeCalendarSchedule";

describe("CalendarSchedule", () => {
    test("renders the CalendarSchedule component", () => {
        render(
            <RangeCalendarSchedule
                size={{width: 180, height: 180}}
                bgColorHeader={'red'}
                columns={[]}
                dataSource={[]}
                startDate={'2020-10-10'}
                changeStartDate={() => {
                }}
                titleColumns={'title'}
            />
        );
    });
});