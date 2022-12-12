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
            />
        </div>
    )
};

export const TestOne = Template.bind({});
TestOne.args = {
    titleColumns: 'Aircraft',
    size: {width: 180, height: 180},
    columns: [
        {accessorKey: 'CRJ200', title: "CRJ 200", placeholderCell: 'p 1'},
        {accessorKey: 'CRJ300', title: "CRJ 200", placeholderCell: 'p 2'}
    ],
    dataSource: [
        {
            column: 'CRJ200',
            date: moment(),
            children: 'test 1',
            style: {
                backgroundColor: 'blue',
                color: '#fff',
                textAlign: 'center',
                borderRadius: 12,
                padding: '4px 0',
                marginBottom: 4
            }
        },
        {
            column: 'CRJ200',
            date: moment(),
            children: 'test 2',
            style: {
                backgroundColor: 'blue',
                color: '#fff',
                textAlign: 'center',
                borderRadius: 12,
                padding: '4px 0',
                marginBottom: 4
            }
        },
        {
            column: 'CRJ300',
            date: moment(),
            children: 'test 3'
        }
    ],
};