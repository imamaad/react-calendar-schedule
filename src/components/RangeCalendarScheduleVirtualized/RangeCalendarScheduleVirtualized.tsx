import React from "react";
import {RangeCalendarScheduleConsumer, RangeCalendarScheduleProvider} from "./RangeCalendarScheduleContextVirtualized";
import {RangeCalendarScheduleInitialInterface} from "../../common/interfaces";
import scrollbarSize from 'dom-helpers/scrollbarSize';
import clsx from 'clsx';

import {AutoSizer, Grid, List, ScrollSync} from 'react-virtualized';
import './ScrollSync.example.css';

export const RangeCalendarScheduleVirtualized: React.FC<RangeCalendarScheduleInitialInterface> = (props) => {


    const columnWidth = 75;
    const columnCount = 50;
    const overscanColumnCount = 0;
    const overscanRowCount = 5;
    const rowHeight = 40;
    const rowCount = 100;

    const _renderLeftHeaderCell = ({columnIndex, key, style}: any) => {
        return (
            <div className="headerCell" key={key} style={style}>
                {`C${columnIndex}`}
            </div>
        );
    }

    const _renderLeftSideCell = ({columnIndex, key, rowIndex, style}: any) => {
        const rowClass =
            rowIndex % 2 === 0
                ? columnIndex % 2 === 0
                    ? "evenRow"
                    : "oddRow"
                : columnIndex % 2 !== 0
                    ? "evenRow"
                    : "oddRow";
        const classNames = clsx(rowClass, "cell");

        return (
            <div className={classNames} key={key} style={style}>
                {`R${rowIndex}, C${columnIndex}`}
            </div>
        );
    }

    const _renderHeaderCell = ({columnIndex, key, rowIndex, style}: any) => {
        if (columnIndex < 1) {
            return;
        }

        return _renderLeftHeaderCell({columnIndex, key, rowIndex, style});
    }

    const _renderBodyCell = ({columnIndex, key, rowIndex, style}: any) => {
        if (columnIndex < 1) {
            return;
        }

        return _renderLeftSideCell({columnIndex, key, rowIndex, style});
    }

    return (
        <RangeCalendarScheduleProvider initialProps={props}>
            <RangeCalendarScheduleConsumer>
                {({}) => (
                    /*<div className='calendar-grid-table calendar-ops'>
                        <RangeCalendarScheduleHeader/>
                        <RangeCalendarScheduleBody/>
                    </div>*/
                    <div style={{height: '100%'}}>
                        <AutoSizer>
                            {({width, height}) => (
                                <ScrollSync>
                                    {({
                                          clientHeight,
                                          clientWidth,
                                          onScroll,
                                          scrollHeight,
                                          scrollLeft,
                                          scrollTop,
                                          scrollWidth,
                                      }) => {

                                        const leftColor = '#ffffff';

                                        const topColor = '#ffffff';

                                        const middleColor = '#ffffff';

                                        return (
                                            <div className={"GridRow"}>
                                                <div>
                                                    <div
                                                        className={"LeftSideGridContainer"}
                                                        style={{
                                                            position: 'absolute',
                                                            left: 0,
                                                            top: 0,
                                                            color: leftColor,
                                                            backgroundColor: 'red',
                                                        }}>
                                                        <Grid
                                                            cellRenderer={_renderLeftHeaderCell}
                                                            className={"HeaderGrid"}
                                                            width={columnWidth}
                                                            height={rowHeight}
                                                            rowHeight={rowHeight}
                                                            columnWidth={columnWidth}
                                                            rowCount={1}
                                                            columnCount={1}
                                                        />
                                                    </div>

                                                    <div
                                                        style={{
                                                            backgroundColor: 'black',
                                                            color: topColor,
                                                            height: rowHeight,
                                                            width: width - scrollbarSize(),

                                                            position: 'absolute',
                                                            left: 0,
                                                            top: 0,
                                                        }}>
                                                        <Grid
                                                            className={"HeaderGrid"}
                                                            columnWidth={columnWidth}
                                                            columnCount={columnCount}
                                                            height={rowHeight}
                                                            overscanColumnCount={overscanColumnCount}
                                                            cellRenderer={_renderHeaderCell}
                                                            rowHeight={rowHeight}
                                                            rowCount={1}
                                                            scrollLeft={scrollLeft}
                                                            width={width - scrollbarSize()}
                                                        />
                                                    </div>
                                                </div>

                                                <div className={"GridColumn"}>
                                                    <div>
                                                        <div
                                                            className={"LeftSideGridContainer"}
                                                            style={{
                                                                position: 'absolute',
                                                                left: 0,
                                                                top: rowHeight,
                                                                color: leftColor,
                                                                backgroundColor: 'green',
                                                            }}>
                                                            <Grid
                                                                overscanColumnCount={overscanColumnCount}
                                                                overscanRowCount={overscanRowCount}
                                                                cellRenderer={_renderLeftSideCell}
                                                                columnWidth={columnWidth}
                                                                columnCount={1}
                                                                className={"LeftSideGrid"}
                                                                height={height - scrollbarSize()}
                                                                rowHeight={rowHeight}
                                                                rowCount={rowCount}
                                                                scrollTop={scrollTop}
                                                                width={columnWidth}
                                                            />
                                                        </div>
                                                        <div
                                                            style={{
                                                                backgroundColor: 'orange',
                                                                color: middleColor,
                                                                height,
                                                                width,
                                                            }}>
                                                            <Grid
                                                                className={"BodyGrid"}
                                                                columnWidth={columnWidth}
                                                                columnCount={columnCount}
                                                                height={height}
                                                                onScroll={onScroll}
                                                                overscanColumnCount={overscanColumnCount}
                                                                overscanRowCount={overscanRowCount}
                                                                cellRenderer={_renderBodyCell}
                                                                rowHeight={rowHeight}
                                                                rowCount={rowCount}
                                                                width={width}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }}
                                </ScrollSync>
                            )}
                        </AutoSizer>
                    </div>
                )}
            </RangeCalendarScheduleConsumer>
        </RangeCalendarScheduleProvider>
    )
}