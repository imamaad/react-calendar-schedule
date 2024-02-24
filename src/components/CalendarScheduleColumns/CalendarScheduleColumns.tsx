import _ from "lodash";
import {CalendarScheduleItemCell} from "../CalendarScheduleItemCell/CalendarScheduleItemCell";
import React, {useMemo} from "react";
import moment from "moment/moment";
import {ColumnsInterface} from "../../common/interfaces";
import {DataSourceInterface} from "../../common/interfaces";
import {Moment} from "moment";

export interface CalendarScheduleColumnsInterface extends ColumnsInterface, DataSourceInterface {
    date: string | Moment,
    width: string | number,
    height: string | number,
    loading?: {
        startDate: Moment,
        endDate: Moment,
        visible: boolean,
        component: React.ReactNode
    }
}

export const CalendarScheduleColumns = (props: CalendarScheduleColumnsInterface) => {

    const {date, columns, width , height , dataSource, loading} = props;

    const thisDay = useMemo(() => moment(date), [date]);

    const items = useMemo(() =>
            _.filter(dataSource, (item: any) => moment(item.date)?.isSame(thisDay, 'date'))
        , [dataSource, thisDay]);

    return (
        <div className='box-week-calendar-scheduler-horizontal'>
            {
                <div className='box-data-day-calendar-scheduler-horizontal'>
                    {_.map(columns, (column, index) =>
                        <CalendarScheduleItemCell
                            thisDay={thisDay}
                            width={width}
                            height={height}
                            key={index}
                            column={column}
                            dataSource={items}
                            loading={loading}
                        />
                    )}
                </div>
            }
        </div>
    )
}