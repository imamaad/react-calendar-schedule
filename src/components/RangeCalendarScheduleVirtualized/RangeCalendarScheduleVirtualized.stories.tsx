import * as React from 'react'
import {Meta, StoryObj} from "@storybook/react";
import {RangeCalendarScheduleVirtualized} from "./RangeCalendarScheduleVirtualized";
import moment from "moment";

const meta: Meta<typeof RangeCalendarScheduleVirtualized> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/configure/#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: "Example/RangeCalendarScheduleVirtualized",
    component: RangeCalendarScheduleVirtualized,
    decorators: [],
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        minTime: moment().utc().format(),
        maxTime: moment().utc().add(7, 'day').format(),
        bgColorHeader: '#e2eaf3',
        format: {
            top: 'YYYY',
            bottom: 'D MMM ddd',
        },
        sidebarTitle: 'Aircraft',
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
    }
};

export default meta;

type Story = StoryObj<typeof RangeCalendarScheduleVirtualized>;

export const Basic: Story = {
    render: (args) => {

        return (
            <div
                style={{height: '100vh', position: 'relative', overflow: 'auto'}}
            >
                <RangeCalendarScheduleVirtualized
                    {...args}
                />
            </div>
        )
    },
};