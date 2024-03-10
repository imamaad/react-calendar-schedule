import React, {CSSProperties} from "react";

export interface rangeVirtualizedDataSourceItemInterface {
    column: string,
    date: string,
    style?: CSSProperties | undefined,
    children: React.ReactNode,
}

export interface rangeVirtualizedDataSourceInterface {
    dataSource: Array<rangeVirtualizedDataSourceItemInterface>
}