import React, {useMemo} from "react";
import _ from "lodash";
import {RangeColumnInterface} from "../../../common/interfaces/ColumnInterface";
import moment from "moment";
import {RangeDataSourceItemInterface} from "../../../common/interfaces/dataSourceItemInterface";
import {useRangeCalendarSchedule} from "../RangeCalendarScheduleContextVirtualized";
import {RangeCalendarScheduleItem} from "../RangeCalendarScheduleItem";

export interface CalendarScheduleItemCellInterface {
    column: RangeColumnInterface,
}

export const RangeCalendarScheduleItemCell = (props: CalendarScheduleItemCellInterface) => {
    const {column} = props;

    const {dataSource, size} = useRangeCalendarSchedule();

    const items = useMemo(() =>
            _.filter(dataSource, (item: RangeDataSourceItemInterface) => column.accessorKey === item.column)
        , [dataSource, column]);

    return (
        <div
            className='box-item-day-calendar-scheduler-horizontal'
            style={{width: size.width, height: size.height}}
        >
            <div className='box-list-items-calendar-scheduler'>
                <>
                    {items.length
                        ? _.map(items, (item: RangeDataSourceItemInterface, index: number) =>
                            <div key={index}>
                                <RangeCalendarScheduleItem item={item}/>
                            </div>
                        )
                        : <div className='box-item-placeholder-calendar-scheduler'>{column.placeholderCell}</div>
                    }
                </>
            </div>
        </div>
    )
}