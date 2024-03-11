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
        startDate: moment().format(),
        endDate: moment().add(30, 'day').format(),
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
        openIcon: "A",

        format: {
            top: 'YYYY',
            bottom: 'D MMM ddd',
        },
        categories: [
            {
                title: 'Aircraft 1',
                defaultOpen: true,
                columns: [
                    {
                        events: {
                            "2024-03-13": [
                                {
                                    column: 'CRJ200',
                                    children: 'test 1',
                                },
                                {
                                    column: 'CRJ200',
                                    children: 'test 2',

                                },
                                {
                                    column: 'CRJ300',
                                    children: 'test 3'
                                },
                                {
                                    column: 'CRJ200',
                                    children: 'test 1',
                                },
                                {
                                    column: 'CRJ200',
                                    children: 'test 2',

                                },
                                {
                                    column: 'CRJ300',
                                    children: 'test 3'
                                },
                                {
                                    column: 'CRJ200',
                                    children: 'test 1',
                                },
                                {
                                    column: 'CRJ200',
                                    children: 'test 2',

                                },
                                {
                                    column: 'CRJ300',
                                    children: 'test 3'
                                }
                            ]
                        }
                    },
                ],
            },
            {
                title: 'Aircraft 2',
                defaultOpen: false,
                columns: [
                    {
                        events: {
                            "2024-03-14": [
                                {
                                    column: 'CRJ200',
                                    children: 'test 1',
                                },
                                {
                                    column: 'CRJ200',
                                    children: 'test 2',

                                },
                                {
                                    column: 'CRJ300',
                                    children: 'test 3'
                                }
                            ]
                        }
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