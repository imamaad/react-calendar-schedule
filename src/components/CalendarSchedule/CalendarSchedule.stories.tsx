import * as React from 'react'
import {ComponentStory, ComponentMeta} from "@storybook/react";
import {CalendarSchedule} from "components";

export default {
    title: "Example/CalendarSchedule",
    component: CalendarSchedule,
} as ComponentMeta<typeof CalendarSchedule>;

const Template: ComponentStory<typeof CalendarSchedule> = (args) => <CalendarSchedule {...args} />;

export const TestOne = Template.bind({});
