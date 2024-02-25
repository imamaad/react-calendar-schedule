import {createContext, useContext} from "react";
import * as React from "react";
import {RangeCalendarScheduleInitialInterface} from "../../common/interfaces";


interface RangeCalendarScheduleContextType extends RangeCalendarScheduleInitialInterface {

}


export const RangeCalendarScheduleContext = createContext<RangeCalendarScheduleContextType>(null!);

export const useRangeCalendarSchedule = () => {
    return useContext(RangeCalendarScheduleContext);
}

export const RangeCalendarScheduleConsumer = RangeCalendarScheduleContext.Consumer;

interface RangeScheduleProviderProps {
    children: React.ReactNode,
    initialProps: RangeCalendarScheduleInitialInterface
}

export const RangeCalendarScheduleProvider: React.FC<RangeScheduleProviderProps> = ({children, initialProps}) => {


    const value: RangeCalendarScheduleContextType = {
        sidebarWidth: 230,
        ...initialProps,
    };

    return <RangeCalendarScheduleContext.Provider value={value}>{children}</RangeCalendarScheduleContext.Provider>;
}

