import _ from "lodash";
import {CalendarScheduleItemCell} from "../CalendarScheduleItemCell/CalendarScheduleItemCell";
import React, {useMemo} from "react";
import moment from "moment/moment";

export interface CalendarScheduleColumnsInterface {
    date: string | moment.Moment,
    width?: string | number,
    height?: string | number,
    columns: Array<any>,
    renderItemCell: (item?: any, index?: number) => React.ReactNode | string,
    dataSource: Array<any>
}

export const CalendarScheduleColumns = (props: CalendarScheduleColumnsInterface) => {

    const {date, columns, width = 180, height = 180, renderItemCell, dataSource} = props;

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
                            renderItemCell={renderItemCell}
                            width={width}
                            height={height}
                            key={index}
                            column={column}
                            dataSource={items}
                        />
                    )}
                </div>
            }
        </div>
    )
}