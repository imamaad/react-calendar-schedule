import React, {useEffect, useMemo, useRef, useState} from "react";
import {useRangeCalendarScheduleVirtualized} from "../RangeCalendarScheduleContextVirtualized";
import _ from "lodash";


export const RangeCalendarScheduleMoreVirtualized = () => {

    const divRef = useRef<HTMLDivElement>(null);
    const [divHeight, setDivHeight] = useState(0);
    const {
        more,
        onChangeMore,
        bordered,
        scrollLeft,
        scrollTop,
        headerHeight,
        columns,
        days,
        itemRenderer,
        onContextMenu
    } = useRangeCalendarScheduleVirtualized();

    const onClose = () => {
        onChangeMore(undefined);
    }

    useEffect(() => {
        const getDivDimensions = () => {
            if (divRef.current && more) {
                const {height: divRefHeight} = divRef.current.getBoundingClientRect();
                setDivHeight(divRefHeight);
            }
        };

        // فراخوانی تابع در ابتدای رندر و همچنین هر بار که محتویات div تغییر می‌کند
        getDivDimensions();
        window.addEventListener('resize', getDivDimensions);

        // حذف listener هنگام unmount
        return () => {
            window.removeEventListener('resize', getDivDimensions);
        };
    }, [more]);

    const _renderItemCell = ({item, columnIndex, key, rowIndex, itemKey}: any) => {
        return (
            <div
                className='imamaad-range-calendar-schedule-virtualized-item'
                key={itemKey}
                style={{
                    marginBottom: 5,
                }}
            >
                {itemRenderer({item, columnIndex, key, rowIndex, itemKey})}
            </div>
        );
    }

    const left = useMemo(() => ((more?.style?.left as number || 0) - scrollLeft), [scrollLeft, more?.style?.left]);
    const totalLeft = useMemo(() => window.innerWidth - (left + ((more?.style?.width as number) || 0)), [left, window.innerWidth, more?.style?.width]);
    const resultLeft = useMemo(() => (totalLeft > 0 ? left : left + totalLeft) > 0 ? (totalLeft > 0 ? left : left + totalLeft) : 0, [totalLeft, left]);

    const top = useMemo(() => ((more?.style?.top as number || 0) + headerHeight - scrollTop), [scrollLeft, more?.style?.top, headerHeight, scrollTop])
    const totalTop = useMemo(() => window.innerHeight - (top + divHeight), [top, window.innerHeight, divHeight]);
    const resultTop = useMemo(() => (totalTop > 0 ? top : top + totalTop) > 0 ? (totalTop > 0 ? top : top + totalTop) : 0, [totalTop, top]);

    const items = useMemo(() => (more && columns && days) ? (columns?.[more.rowIndex]?.events?.[days[more?.columnIndex]] || []) : [], [more, columns, days]);

    return (
        <div>
            <div
                className={`imamaad-range-calendar-schedule-virtualized-mask ${more ? "show" : ""}`}
                onClick={onClose}
            />

            <div
                ref={divRef}
                onContextMenu={
                    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                        event.preventDefault();
                        if (event?.target === event?.currentTarget) {
                            onContextMenu({
                                day: more?.columnIndex && days[more?.columnIndex],
                                items,
                                columnIndex: more?.columnIndex,
                                key: more?.key,
                                rowIndex: more?.rowIndex,
                                column: more?.rowIndex && columns[more?.rowIndex],
                                event
                            })
                        }
                    }
                }
                style={{
                    border: bordered ? '1px solid #bbb' : 'unset',
                    boxShadow: " 0 0 10px 1px",
                    position: "absolute",
                    top: resultTop,
                    left: resultLeft,
                    width: more?.style?.width,
                    height: "auto",
                    zIndex: 1006,
                    overflow: "auto",
                    maxHeight: "100%",
                    maxWidth: "100%",
                    backgroundColor: "#fff",
                    display: more ? "block" : "none",
                    boxSizing: "border-box",
                }}
            >
                <div style={{padding: 5, marginBottom: 25}}>
                    {_.map(items, (item, itemKey) => _renderItemCell({
                        item,
                        columnIndex: more?.columnIndex,
                        key: more?.key,
                        rowIndex: more?.rowIndex,
                        style: more?.style,
                        itemKey,
                    }))}
                </div>
                <div
                    style={{
                        width: "100%",
                        backgroundColor: "rgba(75,75,75,0.49)",
                        textAlign: "center",
                        cursor: "pointer",
                        color: "#fff",
                        fontSize: 12
                    }}
                    onClick={onClose}
                >
                    Close
                </div>
            </div>
        </div>
    )
}