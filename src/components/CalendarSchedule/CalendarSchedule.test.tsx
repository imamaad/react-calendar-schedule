import React from "react";
import {render} from "@testing-library/react";
import {CalendarSchedule} from "components/CalendarSchedule/CalendarSchedule";

describe("CalendarSchedule", () => {
    test("renders the CalendarSchedule component", () => {
        render(<CalendarSchedule/>);
    });
});