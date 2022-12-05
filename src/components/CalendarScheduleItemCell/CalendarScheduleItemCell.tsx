import React, {useMemo} from "react";
import _ from "lodash";

export interface CalendarScheduleItemCell {
    column: any,
    renderItemCell: (item?: any, index?: number) => React.ReactNode | string,
    width: string | number,
    height: string | number,
    dataSource: Array<any>
}

export const CalendarScheduleItemCell = (props: CalendarScheduleItemCell) => {
    const {column, renderItemCell, width, height, dataSource} = props;

    const items = useMemo(() =>
            _.filter(dataSource, (item: any) => column.accessorKey === item.column)
        , [dataSource, column]);

    return (
        <div
            className='box-item-day-calendar-scheduler-horizontal'
            style={{width, height}}
        >
            <div className='width-100 height-100 overflow-auto p-1'>
                {items.length
                    ? _.map(items, (item, index) => <div key={index}>{renderItemCell(item, index)}</div>)
                    : column.placeholderCell
                }
            </div>
        </div>
    )
}