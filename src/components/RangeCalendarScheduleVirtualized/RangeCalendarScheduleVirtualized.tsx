import React from "react";
import {RangeCalendarScheduleConsumer, RangeCalendarScheduleProvider} from "./RangeCalendarScheduleContextVirtualized";
import {RangeCalendarScheduleVirtualizedInitialInterface} from "../../common/interfaces";
import {AutoSizer, ScrollSync} from 'react-virtualized';
import {useScrollContainer} from 'react-indiana-drag-scroll';

import './ScrollSync.example.css';
import './range-calendar-schedule-virtualized.scss';
import _ from "lodash";
import moment from "moment/moment";
import {
    RangeCalendarScheduleSiderVirtualized
} from "./RangeCalendarScheduleSiderVirtualized/RangeCalendarScheduleSiderVirtualized";
import {
    RangeCalendarScheduleContainerVirtualized
} from "./RangeCalendarScheduleContainerVirtualized/RangeCalendarScheduleContainerVirtualized";


export const RangeCalendarScheduleVirtualized: React.FC<RangeCalendarScheduleVirtualizedInitialInterface> = (props) => {

    const scrollContainer = useScrollContainer({
        mouseScroll: {
            ignoreElements: '.LeftSideGridContainer,.GridTitle',
            rubberBand: false,
            inertia: false,
        }
    });

    return (
        <div className='imamaad-range-calendar-schedule-virtualized' style={{height: '100%', width: '100%'}}>
            <AutoSizer>
                {({width, height}) => (
                    <ScrollSync>
                        {({
                              clientHeight,
                              clientWidth,
                              onScroll,
                              scrollHeight,
                              scrollLeft,
                              scrollTop,
                              scrollWidth,
                          }) => {

                            return (

                                <RangeCalendarScheduleProvider
                                    initialProps={{
                                        width,
                                        height,
                                        scrollLeft,
                                        scrollTop,
                                        scrollHeight,
                                        clientHeight,
                                        clientWidth,
                                        scrollWidth,
                                        onScroll,
                                        ...props,
                                    }}
                                >
                                    <RangeCalendarScheduleConsumer>
                                        {({}) => (
                                            <div className={"GridRow"}>
                                                <RangeCalendarScheduleSiderVirtualized/>
                                                <RangeCalendarScheduleContainerVirtualized/>
                                            </div>
                                        )}
                                    </RangeCalendarScheduleConsumer>
                                </RangeCalendarScheduleProvider>
                            );
                        }}
                    </ScrollSync>

                )}
            </AutoSizer>
        </div>
    )
}