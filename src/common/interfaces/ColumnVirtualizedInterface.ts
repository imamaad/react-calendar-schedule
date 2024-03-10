export interface RangeVirtualizedColumnInterface {
    title: string,
    subTitle?: string,
    accessorKey: string,
    placeholderCell: string,

    [propName: string]: any,
}

export interface RangeVirtualizedColumnsInterface {
    columns: Array<RangeVirtualizedColumnInterface>
}