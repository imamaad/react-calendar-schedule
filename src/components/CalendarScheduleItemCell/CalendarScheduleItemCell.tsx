import React, {useMemo} from "react";
import _ from "lodash";
import {ColumnInterface, DataSourceItemInterface} from "common/interfaces";
import {RenderItemCell} from "common/interfaces/RenderItemCell";
import {DataSourceInterface} from "common/interfaces/dataSourceItemInterface";

export interface CalendarScheduleItemCellInterface extends  RenderItemCell, DataSourceInterface{
    column: ColumnInterface,
    width: string | number,
    height: string | number,
}

export const CalendarScheduleItemCell = (props: CalendarScheduleItemCellInterface) => {
    const {column, renderItem, width, height, dataSource} = props;

    const items = useMemo(() =>
            _.filter(dataSource, (item: DataSourceItemInterface) => column.accessorKey === item.column)
        , [dataSource, column]);

    return (
        <div
            className='box-item-day-calendar-scheduler-horizontal'
            style={{width, height}}
        >
            <div className='box-list-items-calendar-scheduler'>
                {items.length
                    ? _.map(items, (item: DataSourceItemInterface, index: number) =>
                        <div key={index}>{renderItem(item, index)}</div>
                    )
                    : <div className='box-item-placeholder-calendar-scheduler'>{column.placeholderCell}</div>
                }
            </div>
        </div>
    )
}