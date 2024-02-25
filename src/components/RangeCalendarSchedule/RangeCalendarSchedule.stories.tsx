import * as React from 'react'
import {ComponentStory, ComponentMeta} from "@storybook/react";
import {useState} from "react";
import moment from "moment";
import {RangeCalendarSchedule} from "./RangeCalendarSchedule";

export default {
    title: "Example/RangeCalendarSchedule",
    component: RangeCalendarSchedule,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof RangeCalendarSchedule>;

const Template: ComponentStory<typeof RangeCalendarSchedule> = (args) => {
    const [date, setDate] = useState(moment().format());
    const handleChangeStartDate = (value: any) => {
        setDate(value);
    }

    return (
        <div
            style={{height: '100vh', position: 'relative', overflow: 'auto'}}
        >
            <RangeCalendarSchedule
                {...args}
                startDate={date}
                changeStartDate={handleChangeStartDate}
            />
        </div>
    )
};

export const TestOne = Template.bind({});
TestOne.args = {
    bgColorHeader: '#e2eaf3',
    format: {
        top: 'YYYY',
        bottom: 'D MMM ddd',
    },
    titleColumns: (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>Aircraft 2</div>
    ),
    size: {width: 230, height: 180},
    columns: [
        {accessorKey: 'CRJ200', title: "CRJ 200", placeholderCell: 'p 1'},
        {accessorKey: 'CRJ300', title: "CRJ 300", placeholderCell: 'p 2'},
        {accessorKey: 'CRJ300', title: "CRJ 400", placeholderCell: 'p 3'},
        {accessorKey: 'CRJ300', title: "CRJ 500", placeholderCell: 'p 4'},
        {accessorKey: 'CRJ300', title: "CRJ 600", placeholderCell: 'p 5'},
    ],
    dataSource: [
        {
            column: 'CRJ200',
            date: '2024-02-25T21:01:39+03:30',
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
            date: '2024-02-25T21:01:39+03:30',
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
            date: '2024-02-25T21:01:39+03:30',
            children: 'test 3'
        }
    ]
};