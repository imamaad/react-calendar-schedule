import React from "react";
import _ from "lodash";
import {useRangeCalendarSchedule} from "../RangeCalendarScheduleContext";
import {RangeColumnInterface} from "../../../common/interfaces/ColumnInterface";
import {RangeCalendarScheduleItemGroup} from "../RangeCalendarScheduleItemGroup/RangeCalendarScheduleItemGroup";


export const RangeCalendarScheduleListGroup = () => {
    const {size, refSide, columns} = useRangeCalendarSchedule();

    return (
        <div className='list-titles-calendar-scheduler-horizontal' style={{width: size.width}} ref={refSide}>
            {_.map(columns, (item: RangeColumnInterface, index) =>
                <RangeCalendarScheduleItemGroup
                    key={index}
                    title={item.title}
                    subTitle={item.subTitle}
                    accessorKey={item.accessorKey}
                    placeholderCell={item.placeholderCell}
                />
            )}
        </div>
    )
}