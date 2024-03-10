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
                    {accessorKey: 'CRJ200', title: "CRJ 200", placeholderCell: 'p 1'},
                    {accessorKey: 'CRJ300', title: "CRJ 300", placeholderCell: 'p 2'},
                    {accessorKey: 'CRJ400', title: "CRJ 400", placeholderCell: 'p 3'},
                    {accessorKey: 'CRJ500', title: "CRJ 500", placeholderCell: 'p 4'},
                    {accessorKey: 'CRJ600', title: "CRJ 600", placeholderCell: 'p 5'},
                    {accessorKey: 'CRJ600', title: "CRJ 600", placeholderCell: 'p 5'},
                    {accessorKey: 'CRJ600', title: "CRJ 600", placeholderCell: 'p 5'},
                ],
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
            {
                title: 'Aircraft 2',
                columns: [
                    {accessorKey: 'CRJ200', title: "CRJ 200", placeholderCell: 'p 1'},
                    {accessorKey: 'CRJ300', title: "CRJ 300", placeholderCell: 'p 2'},
                    {accessorKey: 'CRJ300', title: "CRJ 400", placeholderCell: 'p 3'},
                    {accessorKey: 'CRJ300', title: "CRJ 500", placeholderCell: 'p 4'},
                    {accessorKey: 'CRJ300', title: "CRJ 600", placeholderCell: 'p 5'},
                    {accessorKey: 'CRJ300', title: "CRJ 600", placeholderCell: 'p 5'},
                    {accessorKey: 'CRJ300', title: "CRJ 600", placeholderCell: 'p 5'},
                    {accessorKey: 'CRJ300', title: "CRJ 600", placeholderCell: 'p 5'},
                    {accessorKey: 'CRJ300', title: "CRJ 600", placeholderCell: 'p 5'},
                    {accessorKey: 'CRJ300', title: "CRJ 600", placeholderCell: 'p 5'},
                ],
                dataSource: [
                    {
                        column: 'CRJ200',
                        date: '2024-02-25T21:01:39+03:30',
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
            {
                title: 'Aircraft 2',
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
            {
                title: 'Aircraft 3',
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
            {
                title: 'Aircraft 4',
                columns: [
                    {accessorKey: 'CRJ200', title: "CRJ 200", placeholderCell: 'p 1'},
                    {accessorKey: 'CRJ300', title: "CRJ 300", placeholderCell: 'p 2'},
                    {accessorKey: 'CRJ300', title: "CRJ 400", placeholderCell: 'p 3'},
                    {accessorKey: 'CRJ300', title: "CRJ 500", placeholderCell: 'p 4'},
                    {accessorKey: 'CRJ300', title: "CRJ 600", placeholderCell: 'p 5'},
                    {accessorKey: 'CRJ300', title: "CRJ 600", placeholderCell: 'p 5'},
                    {accessorKey: 'CRJ300', title: "CRJ 600", placeholderCell: 'p 5'},
                    {accessorKey: 'CRJ300', title: "CRJ 600", placeholderCell: 'p 5'},
                    {accessorKey: 'CRJ300', title: "CRJ 600", placeholderCell: 'p 5'},
                    {accessorKey: 'CRJ300', title: "CRJ 600", placeholderCell: 'p 5'},
                    {accessorKey: 'CRJ300', title: "CRJ 600", placeholderCell: 'p 5'},
                ],
                dataSource: [
                    {
                        column: 'CRJ200',
                        date: '2024-02-25T21:01:39+03:30',
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
            {
                title: 'Aircraft 4',
                columns: [
                    {accessorKey: 'CRJ200', title: "CRJ 200", placeholderCell: 'p 1'},
                    {accessorKey: 'CRJ300', title: "CRJ 300", placeholderCell: 'p 2'},
                ],
                dataSource: [
                    {
                        column: 'CRJ200',
                        date: '2024-02-25T21:01:39+03:30',
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
            {
                title: 'Aircraft 5',
                columns: [
                    {accessorKey: 'CRJ200', title: "CRJ 200", placeholderCell: 'p 1'},
                ],
                dataSource: [
                    {
                        column: 'CRJ200',
                        date: '2024-02-25T21:01:39+03:30',
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
            {
                title: 'Aircraft 6',
                columns: [
                    {accessorKey: 'CRJ200', title: "CRJ 200", placeholderCell: 'p 1'},
                    {accessorKey: 'CRJ300', title: "CRJ 300", placeholderCell: 'p 2'},
                    {accessorKey: 'CRJ300', title: "CRJ 400", placeholderCell: 'p 3'},
                    {accessorKey: 'CRJ300', title: "CRJ 400", placeholderCell: 'p 3'},
                    {accessorKey: 'CRJ300', title: "CRJ 400", placeholderCell: 'p 3'},
                    {accessorKey: 'CRJ300', title: "CRJ 400", placeholderCell: 'p 3'},
                    {accessorKey: 'CRJ300', title: "CRJ 400", placeholderCell: 'p 3'},
                    {accessorKey: 'CRJ300', title: "CRJ 500", placeholderCell: 'p 4'},
                    {accessorKey: 'CRJ300', title: "CRJ 600", placeholderCell: 'p 5'},
                ],
                dataSource: [
                    {
                        column: 'CRJ200',
                        date: '2024-02-25T21:01:39+03:30',
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
            {
                title: 'Aircraft 7',
                columns: [
                    {accessorKey: 'CRJ200', title: "CRJ 200", placeholderCell: 'p 1'},
                    {accessorKey: 'CRJ300', title: "CRJ 300", placeholderCell: 'p 2'},
                    {accessorKey: 'CRJ300', title: "CRJ 400", placeholderCell: 'p 3'},
                    {accessorKey: 'CRJ300', title: "CRJ 500", placeholderCell: 'p 4'},
                    {accessorKey: 'CRJ300', title: "CRJ 600", placeholderCell: 'p 5'},
                    {accessorKey: 'CRJ300', title: "CRJ 600", placeholderCell: 'p 5'},
                    {accessorKey: 'CRJ300', title: "CRJ 600", placeholderCell: 'p 5'},
                    {accessorKey: 'CRJ300', title: "CRJ 600", placeholderCell: 'p 5'},
                    {accessorKey: 'CRJ300', title: "CRJ 600", placeholderCell: 'p 5'},
                    {accessorKey: 'CRJ300', title: "CRJ 600", placeholderCell: 'p 5'},
                    {accessorKey: 'CRJ300', title: "CRJ 600", placeholderCell: 'p 5'},
                    {accessorKey: 'CRJ300', title: "CRJ 600", placeholderCell: 'p 5'},
                    {accessorKey: 'CRJ300', title: "CRJ 600", placeholderCell: 'p 5'},
                    {accessorKey: 'CRJ300', title: "CRJ 600", placeholderCell: 'p 5'},
                    {accessorKey: 'CRJ300', title: "CRJ 600", placeholderCell: 'p 5'},
                    {accessorKey: 'CRJ300', title: "CRJ 600", placeholderCell: 'p 5'},
                    {accessorKey: 'CRJ300', title: "CRJ 600", placeholderCell: 'p 5'},
                ],
                dataSource: [
                    {
                        column: 'CRJ200',
                        date: '2024-02-25T21:01:39+03:30',
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
            {
                title: 'Aircraft 2',
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
            {
                title: 'Aircraft 2',
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
            {
                title: 'Aircraft 2',
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
            {
                title: 'Aircraft 2',
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
            {
                title: 'Aircraft 2',
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
            {
                title: 'Aircraft 2',
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
            {
                title: 'Aircraft 2',
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
            {
                title: 'Aircraft 2',
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
            {
                title: 'Aircraft 2',
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