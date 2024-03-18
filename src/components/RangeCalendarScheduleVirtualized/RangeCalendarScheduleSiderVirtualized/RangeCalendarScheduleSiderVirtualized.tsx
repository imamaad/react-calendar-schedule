import React, {useMemo, useState} from "react";
import {useRangeCalendarScheduleVirtualized} from "../RangeCalendarScheduleContextVirtualized";
import {CellMeasurer, CellMeasurerCache, Grid} from "react-virtualized";
import scrollbarSize from 'dom-helpers/scrollbarSize';
import _ from "lodash";
import {Rnd} from "react-rnd";


export const RangeCalendarScheduleSiderVirtualized = () => {

    const {
        overScanColumnCount,
        overScanRowCount,
        rowHeight,
        scrollTop,
        sidebarWidth,
        bgColorSidebar,
        textColorSidebar,
        headerHeight,
        columns,
        height,
        openIcon,
        groupRenderer,
        bordered,
        columnWidth,
        bgColorHeader,
        textColorHeader,
        onChangeOpen,
        onChangeRowHeight,
        cacheGrid
    } = useRangeCalendarScheduleVirtualized();

    const [resize, setResize] = useState<number | undefined>(undefined);

    const _renderLeftTopHeaderCell = ({title = "", columnIndex, key, style, column, rowIndex, parent}: any) => {
        return (
            <div
                key={key}
                style={{
                    ...style,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: "0 10px",
                    border: bordered ? '1px solid #bbb' : 'unset',
                    boxSizing: "border-box",
                    backgroundColor: bgColorHeader,
                    color: textColorHeader,
                }}
            >
                <div>{title}</div>
                <div
                    onClick={() => onChangeOpen(column?.categoryId, !column?.defaultOpen)}
                    style={{
                        cursor: "pointer",
                        transition: 'all 200ms',
                        transform: `rotate( ${column?.defaultOpen ? '-180deg' : '0deg'})`
                    }}
                >
                    {openIcon}
                </div>
            </div>
        );
    }

    const _renderLeftHeaderCell = ({title = "", columnIndex, key, style, column, rowIndex, parent}: any) => {
        return (
            <CellMeasurer
                cache={cacheGrid}
                columnIndex={columnIndex}
                key={key}
                parent={parent}
                rowIndex={rowIndex}
            >
                <div
                    key={key}
                    style={{
                        ...style,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: "0 10px",
                        border: bordered ? '1px solid #bbb' : 'unset',
                        boxSizing: "border-box",
                        backgroundColor: bgColorHeader,
                        color: textColorHeader,
                    }}
                >
                    <div>{title}</div>
                    <div
                        onClick={() => onChangeOpen(column?.categoryId, !column?.defaultOpen)}
                        style={{
                            cursor: "pointer",
                            transition: 'all 200ms',
                            transform: `rotate( ${column?.defaultOpen ? '-180deg' : '0deg'})`
                        }}
                    >
                        {openIcon}
                    </div>
                </div>
            </CellMeasurer>
        );
    }

    const _renderLeftSideCell = ({column, columnIndex, key, rowIndex, style, parent}: any) => {

        return (
            <CellMeasurer
                cache={cacheGrid}
                columnIndex={columnIndex}
                key={key}
                parent={parent}
                rowIndex={rowIndex}
            >
                <div
                    key={key}
                    style={{
                        ...style,
                        border: bordered ? '1px solid #bbb' : 'unset',
                        boxSizing: 'border-box',
                        color: textColorSidebar,
                        backgroundColor: bgColorSidebar,
                        zIndex: resize === rowIndex ? 99 : "unset"
                    }}
                >
                    <Rnd
                        key={key}
                        size={{width: style.width, height: style.height}}
                        onResizeStart={(e, dir, elementRef) => {
                            setResize(rowIndex)
                            const testDiv = elementRef.querySelector('.resize-handle-bottom');
                            if (testDiv) {
                                (testDiv as HTMLDivElement).style.backgroundColor = '#97cf13';
                            }
                        }}
                        enableResizing={{
                            bottom: true,
                            bottomLeft: false,
                            bottomRight: false,
                            left: false,
                            right: false,
                            top: false,
                            topLeft: false,
                            topRight: false,
                        }}
                        resizeHandleClasses={{
                            bottom: 'resize-handle-bottom'
                        }}
                        onResizeStop={(e, direction, elementRef, delta, position) => {
                            setResize(undefined);
                            const testDiv = elementRef.querySelector('.resize-handle-bottom');
                            if (testDiv) {
                                (testDiv as HTMLDivElement).style.backgroundColor = 'transparent';
                            }

                            onChangeRowHeight(parseInt(elementRef.style.height));
                        }}
                        disableDragging={true}

                    >
                        {
                            groupRenderer({column, columnIndex, key, rowIndex, style})
                        }
                    </Rnd>
                </div>
            </CellMeasurer>
        );
    }

    function processSizeColumns(inputArray: Array<number>) {
        const resultArray = [];
        let currentSum = 0;
        let startIndex = -1;

        for (let i = 0; i < inputArray.length; i++) {
            if (inputArray[i] === 48) {
                if (startIndex !== -1) {
                    const lastRecord = resultArray[resultArray.length - 1];
                    if (lastRecord) {
                        currentSum += lastRecord.sum;
                    }

                    resultArray.push({
                        index: startIndex,
                        sum: currentSum,
                        // record: inputArray.slice(startIndex, i)
                    });
                    currentSum = 0;
                }
                startIndex = i;
            }

            currentSum += inputArray[i];
        }

        // Check if there's an incomplete record at the end
        if (startIndex !== -1) {
            const lastRecord = resultArray[resultArray.length - 1];
            if (lastRecord) {
                currentSum += lastRecord.sum;
            }

            resultArray.push({
                index: startIndex,
                sum: currentSum,
                // record: inputArray.slice(startIndex)
            });
        }

        return resultArray;
    }

    function findClosestGreaterRecord(arr: Array<{ sum: number, index: number }>, targetSum: number) {
        let closestGreaterRecord = null;
        let minDifference = Infinity;

        for (const item of arr) {
            const difference = item.sum - targetSum;

            if (difference >= 0 && difference < minDifference) {
                minDifference = difference;
                closestGreaterRecord = item;
            }
        }

        return closestGreaterRecord;
    }

    const sizeColumns = useMemo(() => _.map(columns, column => column.type === "HEADER" ? headerHeight : rowHeight), [columns]);
    const resultProcessSizeColumns = useMemo(() => processSizeColumns(sizeColumns), [sizeColumns]);

    return (
        <>
            <div
                className={"LeftSideGridContainer"}
                style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                }}>
                <Grid
                    className={"HeaderGrid"}
                    width={sidebarWidth}
                    height={headerHeight}
                    rowHeight={headerHeight}
                    columnWidth={sidebarWidth}
                    rowCount={1}
                    columnCount={1}
                    cellRenderer={(props) => {
                        const findIndex = findClosestGreaterRecord(resultProcessSizeColumns, scrollTop)?.index || props?.rowIndex;

                        const column = columns?.[findIndex];
                        if (props.rowIndex === 0 && column?.type === "HEADER") {
                            return _renderLeftTopHeaderCell({...props, title: column.title, column});
                        }

                        return <div key={props?.key}/>;
                    }
                    }
                />
            </div>
            <div
                className={"LeftSideGridContainer"}
                style={{
                    position: 'absolute',
                    left: 0,
                    top: headerHeight,
                }}>
                <Grid
                    overscanColumnCount={overScanColumnCount}
                    overscanRowCount={overScanRowCount}
                    columnWidth={sidebarWidth}
                    columnCount={1}
                    className={"LeftSideGrid"}
                    height={height - headerHeight - scrollbarSize()}
                    deferredMeasurementCache={cacheGrid}

                    // rowHeight={cacheGrid.rowHeight}
                    rowHeight={({index}) => {
                        const rowIndex = index + 1;

                        if (columns[rowIndex].type === "HEADER") {
                            return headerHeight;
                        }

                        return cacheGrid.rowHeight({index: index});
                    }
                    }

                    cellRenderer={(props) => {
                        const rowIndex = props.rowIndex + 1;

                        const column = columns[rowIndex];

                        if (column.type === "HEADER") {
                            return _renderLeftHeaderCell({...props, title: column.title, column});
                        }


                        return _renderLeftSideCell({...props, column: columns[rowIndex]})
                    }
                    }

                    rowCount={columns.length - 1 >= 0 ? columns.length - 1 : 0}
                    scrollTop={scrollTop}
                    width={sidebarWidth}
                />
            </div>
        </>
    )
}