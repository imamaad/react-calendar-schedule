import _ from "lodash";
import {CalendarScheduleItemCell} from "../CalendarScheduleItemCell/CalendarScheduleItemCell";
import React, {useMemo} from "react";
import moment from "moment/moment";
import {ColumnsInterface} from "common/interfaces/ColumnInterface";
import {RenderItemCell} from "common/interfaces/RenderItemCell";
import {DataSourceInterface} from "common/interfaces/dataSourceItemInterface";

export interface CalendarScheduleColumnsInterface extends ColumnsInterface, RenderItemCell, DataSourceInterface {
    date: string | moment.Moment,
    width?: string | number,
    height?: string | number,
}

export const CalendarScheduleColumns = (props: CalendarScheduleColumnsInterface) => {

    const {date, columns, width = 180, height = 180, renderItem, dataSource} = props;

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
                            renderItem={renderItem}
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