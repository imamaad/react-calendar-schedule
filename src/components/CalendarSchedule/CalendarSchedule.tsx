import React, {useEffect, useRef, useState} from "react";
import {useWindowSize} from "hooks";
import moment from "moment";
import {buildCalendar} from "./buildCalendar";
import _ from "lodash";
import dayClasses from "./stylesCalendar";

import "./calendar-schedule.scss";

export interface CalendarSchedule {
    startDate: string,
    titleColumns: string,
    columns: Array<any>,
    changeStartDate: (value: any) => void,
    size: { width: number, height: number },
    dataSource: Array<any>,
    renderCellDataSource: (day: any, item: any) => any
}

export const CalendarSchedule = (props: CalendarSchedule) => {
    const {startDate, titleColumns = "", columns = [], changeStartDate, size, dataSource, renderCellDataSource} = props;

    const [calendar, setCalendar] = useState<Array<any>>([]);
    const refSide = useRef<any>(null);
    const refCalendar = useRef<any>(null);
    const refTodayHeader = useRef<any>(null);
    const refBoxData = useRef<any>(null);
    const refBoxDays = useRef<any>(null);
    const [position, setPosition] = useState<any>({left: 0, top: 0, x: 0, y: 0});
    const [selectMove, setSelectMove] = useState<any>(false);
    const {width: widthScrollBar} = useWindowSize(refCalendar);
    const [lengthItemCalendar, setLengthItemCalendar] = useState(0);
    const [transformXBoxData, setTransformXBoxData] = useState(0);
    const [directionDrag, setDirectionDrag] = useState("RIGHT");


    const getDays = (day: any, length: any, direction: any = directionDrag) => {
        const next = direction === "RIGHT";
        return buildCalendar(day, next, length);
    };

    useEffect(() => {
        if (widthScrollBar) {
            setLengthItemCalendar((Math.ceil(widthScrollBar / size.width) + 1));
        }
        // eslint-disable-next-line
    }, [widthScrollBar]);

    useEffect(() => {
        if (!moment(startDate).isSame(_.first(calendar))) {
            setCalendar(getDays(moment(startDate), lengthItemCalendar, "RIGHT"));
        }
        // eslint-disable-next-line
    }, [lengthItemCalendar, startDate]);

    const onScroll = (event: any) => {
        const element = event.target;
        refSide.current.scrollTop = element.scrollTop;
        /*   if (refCalendar.current.scrollLeft !== lastScrollLeft) {
             // refCalendar.current.style.transform = `translate3d(${(refCalendar.current.scrollLeft * -1)}px, 0px, 0px)`;
             // handleLeftScroll();
             handleRightScroll();
           }*/
    };

    const startDrag = (x: any, y: any) => {
        const {scrollTop, scrollLeft} = refCalendar.current;
        setSelectMove(true);
        refCalendar.current.classList.add('select-for-scroll');
        setPosition({left: scrollLeft, top: scrollTop, x, y});
    };

    const dragging = (x: any, y: any) => {
        if (selectMove) {
            refCalendar.current.scrollTop = position.top - (y - position.y);
            const translateX = (position.left - (x - position.x)) * -1;
            setDirectionDrag(translateX < 0 ? "RIGHT" : "LEFT");
            changeTranslateXBoxData(transformXBoxData + translateX);
        }
    };

    const endDrag = () => {
        setSelectMove(false);
        refCalendar.current.classList.remove('select-for-scroll');
        appendDays();
        setTransformXBoxData(getTranslateX(refBoxData.current));
    };

    const mouseDown = (event: any) => {
        const {clientX, clientY} = event;
        startDrag(clientX, clientY);
    };

    const mouseMove = (event: any) => {
        const {clientX, clientY} = event;
        dragging(clientX, clientY);
    };

    const mouseUp = () => {
        endDrag();
    };

    const mouseOut = () => {
        if (selectMove) {
            endDrag();
        }
    };

    const generateTouchPoint = (event: any) => {
        const rect = event.target.getBoundingClientRect();

        const x = event.nativeEvent.changedTouches[0].pageX - rect.left;
        const y = event.nativeEvent.changedTouches[0].pageY - rect.top;
        return {x, y};
    };

    const touchStart = (event: any) => {
        const {x, y} = generateTouchPoint(event);
        startDrag(x, y);
    };

    const appendDays = () => {
        const translateX = getTranslateX(refBoxData.current);
        const lengthAppend = Math.ceil(Math.abs(translateX) / size.width);
        if (lengthAppend > 0 && translateX !== transformXBoxData) {
            switch (directionDrag) {
                case "RIGHT":
                    changeStartDate(appendDaysRight(lengthAppend - 1));
                    break;
                case "LEFT":
                    changeStartDate(appendDaysLeft(lengthAppend));
                    break;
                default:
            }
        }
    };

    const appendDaysRight = (length: any) => {
        const translateX = getTranslateX(refBoxData.current);
        const validLength = Math.ceil((refCalendar.current.clientWidth + Math.abs(translateX)) / size.width);
        const isValidAddDay = validLength > calendar.length;
        const isValidDropDay = (lengthItemCalendar - length < calendar.length && isValidAddDay);
        const day = _.last(calendar).clone().add(1, 'day');
        const days = getDays(day, isValidAddDay ? length : 0);
        const dropDays = _.drop(calendar, isValidDropDay ? length : 0);
        const resultCalendar = dropDays.concat(days);

        if (isValidDropDay)
            changeTranslateXBoxData(translateX + (length * size.width));

        /*Return First Date*/
        return moment(_.first(resultCalendar)).utc().format();
    };

    const appendDaysLeft = (length: any) => {
        const translateX = getTranslateX(refBoxData.current);
        const isValidAddDay = translateX > 0;
        const isValidDropDay = (lengthItemCalendar - length < calendar.length && isValidAddDay);
        const day = _.first(calendar).clone().subtract(1, "day");
        const days = getDays(day, isValidAddDay ? length : 0);
        const dropDays = _.dropRight(calendar, isValidDropDay ? length : 0);
        const resultCalendar = days.concat(dropDays);
        if (isValidAddDay)
            changeTranslateXBoxData(translateX - (length * size.width));

        return moment(_.first(resultCalendar)).utc().format();
    };

    const changeTranslateXBoxData = (value: any) => {
        refBoxData.current.style.transform = `translateX(${value}px)`;
        refBoxDays.current.style.transform = `translateX(${value}px)`;
    };

    const getTranslateX = (element: any) => {
        const str = element.style.transform;
        const matches = str && str.match(/[-]{0,1}[\d]*[.]{0,1}[\d]+/g);
        return matches ? parseInt(matches[0]) : 0;
    };

    const touchMove = (event: any) => {
        const {x, y} = generateTouchPoint(event);
        dragging(x, y);
    };

    const touchEnd = (event:any) => {
        const {x, y}:any = generateTouchPoint(event);
        endDrag();
    };

    return (
        <div className='calendar-grid-table calendar-ops'>
            <div className='box-left-titles-calendar-scheduler-horizontal' style={{width: size.width}}>
                <div className='box-title-items-calendar-scheduler-horizontal' style={{width: size.width}}>
                    {titleColumns}
                </div>
                <ul className='list-titles-calendar-scheduler-horizontal' style={{width: size.width}} ref={refSide}>
                    {_.map(columns, item =>
                        <li className='box-item-title-calendar-scheduler-horizontal'
                            style={{minWidth: size.width, height: size.height}} key={item._id}>
                            {<span>{item?.aircraftType?.shortname}</span>}
                            <span><b>{item.registration}</b></span>
                            {item.subTitleBottom && <span>{item.subTitleBottom}</span>}
                        </li>
                    )}
                </ul>
            </div>
            <div className="flex-1 d-flex flex-direction-column" style={{width: '1%'}}>
                <div className='box-header-calendar-scheduler-horizontal' ref={refBoxDays}>
                    {calendar.map((day, index) =>
                        <div className={`box-title-day-calendar-scheduler-horizontal ${dayClasses(day)}`}
                             style={{minWidth: size.width, width: size.width}}
                             ref={dayClasses(day) === "today" ? refTodayHeader : null} key={index}>
                            {day && moment(day).format('D MMM ddd')}
                        </div>
                    )}
                </div>

                <div ref={refCalendar} className="calendar-grid-row"
                     onScroll={onScroll} onMouseDown={mouseDown} onMouseLeave={mouseOut}
                     onMouseMove={mouseMove} onMouseUp={mouseUp} onTouchStart={touchStart}
                     onTouchMove={touchMove} onTouchEnd={touchEnd}
                >
                    <div className='calendar-grid-cell'>
                        <div className="colsContent" ref={refBoxData}>
                            <div className='draggable-calendar'>
                                <div className='box-calendar-scheduler-horizontal'>
                                    <div className='box-body-calendar-scheduler-horizontal'>
                                        {calendar.map((day, index) =>
                                            <div className='box-week-calendar-scheduler-horizontal' key={index}>
                                                {
                                                    <div className='box-data-day-calendar-scheduler-horizontal'>
                                                        {_.map(columns, item =>
                                                            <div className='box-item-day-calendar-scheduler-horizontal'
                                                                 style={{width: size.width, height: size.height}}
                                                                 key={item._id}>
                                                                {renderCellDataSource(day, item)}
                                                            </div>
                                                        )}
                                                    </div>
                                                }
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}