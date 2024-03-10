import React from "react";
import {render} from "@testing-library/react";
import {RangeCalendarScheduleVirtualized} from "./RangeCalendarScheduleVirtualized";

describe("RangeCalendarSchedule", () => {
    test("renders the CalendarSchedule component", () => {
        render(
            <RangeCalendarScheduleVirtualized
                bgColorHeader={'red'}
                textColorHeader={'black'}
                headerHeight={48}
                startDate={'2020-10-10'}
                endDate={'2020-10-20'}
                categories={[]}
                bgColorSidebar={'red'}
                textColorSidebar={'red'}
                textColorColumn={"red"}
                bgColorColumn={"red"}
                groupRenderer={() => <div>test</div>}
                itemRenderer={() => <div>test</div>}
            />
        );
    });
});