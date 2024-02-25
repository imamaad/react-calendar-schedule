export interface ColumnInterface {
    title: string,
    subTitle?: string,
    accessorKey: string,
    placeholderCell: string,

    [propName: string]: any,
}

export interface ColumnsInterface {
    columns: Array<ColumnInterface>
}

export interface RangeColumnInterface {
    title: string,
    subTitle?: string,
    accessorKey: string,
    placeholderCell: string,

    [propName: string]: any,
}

export interface RangeColumnsInterface {
    columns: Array<RangeColumnInterface>
}