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
                changeStartDate={handleChangeStartDate}
                renderItemCell={(item, index) => <div key={index}>{item.title}</div>}
            />
        </div>
    )
};

export const TestOne = Template.bind({});
TestOne.args = {
    titleColumns: 'Aircraft',
    size: {width: 180, height: 180},
    columns: [
        {accessorKey: 'CRJ200', title: "CRJ 200", placeholderCell: 'placeholderCell 1'},
        {accessorKey: 'CRJ300', title: "CRJ 200", placeholderCell: 'placeholderCell 2'}
    ],
    dataSource: [
        {
            column: 'CRJ200',
            date: '2022-12-05T12:47:13+03:30',
            title: 'test 1'
        },
        {
            column: 'CRJ300',
            date: '2022-12-05T12:47:13+03:30',
            title: 'test 2'
        }
    ],
};