import * as React from 'react';
import {Meta, StoryObj} from "@storybook/react";
import {RangeCalendarScheduleVirtualized} from "./RangeCalendarScheduleVirtualized";
import moment from "moment";
import {groupBy} from "lodash";

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
        startDate: '2024-03-01',
        endDate: '2024-04-01',
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
        onContextMenu: (props) => {
            console.log({props})
        },
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
                        title:'MOHAMMAD',
                        events: {
                            "2024-03-05": [
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
                    {
                        title:'ALI',
                        events: {
                            "2024-03-13": [
                                {
                                    column: 'CRJ200',
                                    children: 'test 1',
                                },
                                {
                                    column: 'CRJ200',
                                    children: 'test 2',

                                }
                            ]
                        }
                    },
                    {
                        title:'MOJI',
                        events: {
                            "2024-03-15": [
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
                defaultOpen: true,
                columns: [
                    {
                        title:'REZA',
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
                    {
                        title:'AHMAD',
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
            {
                title: 'Aircraft 3',
                defaultOpen: false,
                columns: [
                    {
                        title:'MOHAMMAD',
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
                    {
                        title:'ALI',
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
                    {
                        title:'MOJI',
                        events: {
                            "2024-03-15": [
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
                title: 'Aircraft 4',
                defaultOpen: false,
                columns: [
                    {
                        title:'REZA',
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
                    {
                        title:'AHMAD',
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
            {
                title: 'Aircraft 5',
                defaultOpen: false,
                columns: [
                    {
                        title:'MOHAMMAD',
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
                    {
                        title:'ALI',
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
                    {
                        title:'MOJI',
                        events: {
                            "2024-03-15": [
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
                title: 'Aircraft 6',
                defaultOpen: false,
                columns: [
                    {
                        title:'REZA',
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
                    {
                        title:'AHMAD',
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
            }

        ],

        groupRenderer: (props: any) => {
            return <div>{props?.column?.title}</div>
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