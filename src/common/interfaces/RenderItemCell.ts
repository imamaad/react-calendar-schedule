import {DataSourceItemInterface} from "common/interfaces/dataSourceItemInterface";
import React from "react";

export interface RenderItemCell {
    renderItem: (item: DataSourceItemInterface, index: number) => React.ReactNode | string,
}