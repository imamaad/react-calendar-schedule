import * as React from 'react'
import {ComponentStory, ComponentMeta} from "@storybook/react";
import {CalendarSchedule} from "components";
import {useState} from "react";
import moment from "moment";

export default {
    title: "Example/CalendarSchedule",
    component: CalendarSchedule,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof CalendarSchedule>;

const Template: ComponentStory<typeof CalendarSchedule> = (args) => {
    const [date, setDate] = useState(moment().format());
    const handleChangeStartDate = (value: any) => {
        setDate(value);
    }


    return (
        <div style={{height: '100vh'}}>
            <CalendarSchedule
                {...args}
                startDate={date}
                renderCellDataSource={() => <div>DATA</div>}
                changeStartDate={handleChangeStartDate}
            />
        </div>
    )
};

export const TestOne = Template.bind({});
TestOne.args = {
    titleColumns: 'Aircraft',
    size: {width: 180, height: 180},
    columns: [{}, {}, {}, {}],
    dataSource: [{}, {}],
};