import React, {CSSProperties} from "react";

export interface rangeVirtualizedDataSourceItemInterface {
    column: string,
    style?: CSSProperties | undefined,
    children: React.ReactNode,
}

export interface rangeVirtualizedDataSourceInterface {
    events: { [propName: string]: Array<rangeVirtualizedDataSourceItemInterface> }
}