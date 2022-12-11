import React from "react";
import {render} from "@testing-library/react";
import {CalendarSchedule} from "./CalendarSchedule";

describe("CalendarSchedule", () => {
    test("renders the CalendarSchedule component", () => {
        render(
            <CalendarSchedule
                size={{width: 180, height: 180}}
                columns={[]}
                dataSource={[]}
                renderItemCell={() => <div></div>}
                startDate={'2020-10-10'}
                changeStartDate={() => {
                }}
                titleColumns={'title'}
            />
        );
    });
});