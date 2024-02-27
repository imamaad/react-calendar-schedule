import * as React from 'react'
import {Meta, StoryObj} from "@storybook/react";
import {useState} from "react";
import moment from "moment";
import {CalendarSchedule} from "./CalendarSchedule";

const meta: Meta<typeof CalendarSchedule> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/configure/#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: "Example/CalendarSchedule",
    component: CalendarSchedule,
    decorators: [],
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        bgColorHeader: '#e2eaf3',
        format: {
            top: 'YYYY',
            bottom: 'D MMM ddd',
        },
        titleColumns: 'Air',
        size: {width: 230, height: 180},
        columns: [
            {accessorKey: 'CRJ200', title: "CRJ 200", placeholderCell: 'p 1'},
            {accessorKey: 'CRJ300', title: "CRJ 300", placeholderCell: 'p 2'},
            {accessorKey: 'CRJ300', title: "CRJ 300", placeholderCell: 'p 2'},
            {accessorKey: 'CRJ300', title: "CRJ 300", placeholderCell: 'p 2'},
            {accessorKey: 'CRJ300', title: "CRJ 300", placeholderCell: 'p 2'},
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
    }
};

export default meta;

type Story = StoryObj<typeof CalendarSchedule>;

export const Basic: Story = {
    render: (args) => {
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
    },
};