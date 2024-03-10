import * as React from 'react';
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
        startDate: moment().utc().format(),
        endDate: moment().utc().add(30, 'day').format(),
        bgColorHeader: '#e2eaf3',
        textColorHeader: '#000',
        textColorSidebar: '#000',
        bgColorSidebar: '#fff',
        headerHeight: 48,
        columnWidth: 150,
        rowHeight: 175,
        sidebarWidth: 230,
        bordered: true,
        textColorColumn: "#000",
        bgColorColumn: "#fff",
        format: {
            top: 'YYYY',
            bottom: 'D MMM ddd',
        },
        categories: [
            {
                title: 'Aircraft 1',
                columns: [
                    {
                        accessorKey: 'CRJ200',
                        dataSource: [
                            {
                                column: 'CRJ200',
                                date: '2024-03-12T21:01:39+03:30',
                                children: 'test 1',
                            },
                            {
                                column: 'CRJ200',
                                date: '2024-02-25T21:01:39+03:30',
                                children: 'test 2',

                            },
                            {
                                column: 'CRJ300',
                                date: '2024-02-25T21:01:39+03:30',
                                children: 'test 3'
                            }
                        ]
                    },
                ],
            },
        ],

        groupRenderer: (props: any) => {
            return <div>test</div>
        },
        itemRenderer: (props: any) => {
            return <div>test</div>
        },
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