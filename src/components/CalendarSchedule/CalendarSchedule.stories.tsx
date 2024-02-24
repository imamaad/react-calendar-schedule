import * as React from 'react'
import {ComponentStory, ComponentMeta} from "@storybook/react";
import {useState} from "react";
import moment from "moment";
import {CalendarSchedule} from "./CalendarSchedule";

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
        <div
            style={{height: '100vh', position: 'relative', overflow: 'auto'}}
        >
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
        {accessorKey: 'CRJ300', title: "CRJ 300", placeholderCell: 'p 2'},
        {accessorKey: 'CRJ300', title: "CRJ 300", placeholderCell: 'p 2'},
        {accessorKey: 'CRJ300', title: "CRJ 300", placeholderCell: 'p 2'},
        {accessorKey: 'CRJ300', title: "CRJ 300", placeholderCell: 'p 2'},
        // {accessorKey: 'CRJ300', title: "CRJ 400", placeholderCell: 'p 2'},
        // {accessorKey: 'CRJ300', title: "CRJ 500", placeholderCell: 'p 2'},
        // {accessorKey: 'CRJ300', title: "CRJ 600", placeholderCell: 'p 2'},
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
    loading: {
        startDate: moment()?.subtract(1, 'month'),
        endDate: moment()?.add(1, 'month'),
        visible: true,
        component: (<div>Loading...</div>)
    }
};