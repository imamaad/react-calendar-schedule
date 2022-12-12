import moment from "moment";
import React, {CSSProperties} from "react";

export interface DataSourceItemInterface {
    column: string,
    date: moment.Moment,
    style?: CSSProperties | undefined,
    children: React.ReactNode,
}

export interface DataSourceInterface {
    dataSource: Array<DataSourceItemInterface>
}