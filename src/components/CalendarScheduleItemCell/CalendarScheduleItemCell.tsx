import React, {useMemo} from "react";
import _ from "lodash";
import {ColumnInterface} from "../../common/interfaces";
import {DataSourceInterface, DataSourceItemInterface} from "../../common/interfaces";
import {CalendarScheduleItem} from "../CalendarScheduleItem";
import moment, {Moment} from "moment";

export interface CalendarScheduleItemCellInterface extends DataSourceInterface {
    thisDay: Moment,
    column: ColumnInterface,
    width: string | number,
    height: string | number,
    loading?: {
        startDate: Moment,
        endDate: Moment,
        visible: boolean,
        component: React.ReactNode
    }
}

export const CalendarScheduleItemCell = (props: CalendarScheduleItemCellInterface) => {
    const {thisDay, column, width, height, dataSource, loading} = props;

    const items = useMemo(() =>
            _.filter(dataSource, (item: DataSourceItemInterface) => column.accessorKey === item.column)
        , [dataSource, column]);

    return (
        <div
            className='box-item-day-calendar-scheduler-horizontal'
            style={{width, height}}
        >
            <div className='box-list-items-calendar-scheduler'>
                {loading?.visible && thisDay.isBetween(loading.startDate, loading.endDate) ?
                    <>{loading.component}</>
                    :
                    <>
                        {items.length
                            ? _.map(items, (item: DataSourceItemInterface, index: number) =>
                                <div key={index}>
                                    <CalendarScheduleItem item={item}/>
                                </div>
                            )
                            : <div className='box-item-placeholder-calendar-scheduler'>{column.placeholderCell}</div>
                        }
                    </>
                }
            </div>
        </div>
    )
}