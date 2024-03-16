import React from "react";
import {RangeCalendarScheduleProvider} from "./RangeCalendarScheduleContextVirtualized";
import {RangeCalendarScheduleVirtualizedInitialInterface} from "../../common/interfaces";
import {AutoSizer, ScrollSync} from 'react-virtualized';
import {
    RangeCalendarScheduleSiderVirtualized
} from "./RangeCalendarScheduleSiderVirtualized/RangeCalendarScheduleSiderVirtualized";
import {
    RangeCalendarScheduleContainerVirtualized
} from "./RangeCalendarScheduleContainerVirtualized/RangeCalendarScheduleContainerVirtualized";

import './ScrollSync.example.css';
import './range-calendar-schedule-virtualized.scss';
import {RangeCalendarScheduleMoreVirtualized} from "./RangeCalendarScheduleMoreVirtualized";

export const RangeCalendarScheduleVirtualized: React.FC<RangeCalendarScheduleVirtualizedInitialInterface> = (props) => {


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
                                    <div>
                                        <RangeCalendarScheduleMoreVirtualized/>
                                        <div className={"GridRow"}>
                                            <RangeCalendarScheduleSiderVirtualized/>
                                            <RangeCalendarScheduleContainerVirtualized/>
                                        </div>
                                    </div>
                                </RangeCalendarScheduleProvider>
                            );
                        }}
                    </ScrollSync>

                )}
            </AutoSizer>
        </div>
    )
}