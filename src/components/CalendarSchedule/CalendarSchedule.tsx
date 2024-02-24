import React, {useEffect, useMemo, useRef, useState} from "react";
import moment, {Moment} from "moment";
import {buildCalendar} from "./buildCalendar";
import {CalendarScheduleSider} from "../CalendarScheduleSider/CalendarScheduleSider";
import {CalendarScheduleContainer} from "../CalendarScheduleContainer/CalendarScheduleContainer";
import {ColumnsInterface} from "../../common/interfaces";
import {DataSourceInterface} from "../../common/interfaces";
import {useWindowSize} from "../../hooks";

import "./calendar-schedule.scss";
import {CalendarScheduleDates} from "../CalendarScheduleDates/CalendarScheduleDates";


export interface CalendarScheduleInterface extends ColumnsInterface, DataSourceInterface {
    bgColorHeader: string,
    format?: {
        top?: string,
        bottom?: string,
    },
    minDate?: string,
    maxDate?: string,
    startDate: string,
    titleColumns: string | React.ReactNode,
    changeStartDate: (value: any) => void,
    size: {
        width: number,
        height: number
    },
    loading?: {
        startDate: Moment,
        endDate: Moment,
        visible: boolean,
        component: React.ReactNode
    }
}

export const CalendarSchedule = (props: CalendarScheduleInterface) => {
    const {
        bgColorHeader,
        format,
        startDate,
        titleColumns = "",
        columns = [],
        changeStartDate,
        size,
        dataSource,
        loading
    } = props;

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
    const widthItem = useMemo(() => size.width + 2, [size.width]);

    const getDays = (day: any, length: any, direction: any = directionDrag) => {
        const next = direction === "RIGHT";
        return buildCalendar(day, next, length);
    };

    useEffect(() => {
        if (widthScrollBar) {
            setLengthItemCalendar((Math.ceil(widthScrollBar / widthItem) + 1));
        }
        // eslint-disable-next-line
    }, [widthScrollBar]);

    useEffect(() => {
        const selectedStartDate = getStartDate().selectedDate;
        if (!selectedStartDate || !moment(startDate).isSame(selectedStartDate, 'date')) {
            const templateCalender = getDays(moment(startDate), lengthItemCalendar);
            setCalendar(templateCalender);

            let translateXBoxSize = 0;
            if (selectedStartDate) {
                translateXBoxSize = (((lengthItemCalendar * widthItem) + getStartDate().widthRemains) * -1);
            } else {
                translateXBoxSize = (lengthItemCalendar * widthItem) * -1;
            }

            changeTranslateXBoxData(translateXBoxSize);
            setTransformXBoxData(translateXBoxSize);
        }
        // eslint-disable-next-line
    }, [lengthItemCalendar, startDate]);

    const onScroll = (event: any) => {
        const element = event.target;
        refSide.current.scrollTop = element.scrollTop;
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

        const lengthAppend = Math.ceil(lengthItemCalendar);

        if (lengthAppend > 0 && translateX !== transformXBoxData) {
            switch (directionDrag) {
                case "RIGHT":
                    changeStartDate(appendDaysRight());
                    break;
                case "LEFT":
                    changeStartDate(appendDaysLeft());
                    break;
                default:
            }
        }
    };

    const getStartDate = () => {
        const translateX = getTranslateX(refBoxData.current);

        const widthMore = refBoxData.current.offsetWidth - refCalendar.current.clientWidth - (translateX * -1);
        const widthPrv = refBoxData.current.offsetWidth - (refCalendar.current.clientWidth + widthMore);
        const indexFirstDate = Math.floor(widthPrv / widthItem);
        const widthContentPlusMore = refCalendar.current.clientWidth + widthMore;

        /*Return First Date*/
        return {
            selectedDate: calendar?.[indexFirstDate] && moment(calendar?.[indexFirstDate]),
            widthContentPlusMore,
            widthRemains: widthPrv % widthItem
        };
    }

    const appendDaysRight = () => {
        const translateX = getTranslateX(refBoxData.current);

        const widthMore = refBoxData.current.offsetWidth - refCalendar.current.clientWidth - (translateX * -1);
        const widthPrv = refBoxData.current.offsetWidth - (refCalendar.current.clientWidth + widthMore);
        const indexFirstDate = Math.floor(widthPrv / widthItem);
        const lengthMore = Math.floor(widthMore / widthItem);
        const firstDate = calendar?.[indexFirstDate];
        if (lengthMore <= lengthItemCalendar) {
            const templateCalender = getDays(firstDate.clone(), lengthItemCalendar, "RIGHT");
            setCalendar(templateCalender);
        }


        /*Return First Date*/
        return firstDate.clone().utc().format();
    };

    const appendDaysLeft = () => {
        const translateX = getTranslateX(refBoxData.current);

        const widthMore = refBoxData.current.offsetWidth - refCalendar.current.clientWidth - (translateX * -1);
        const widthPrv = refBoxData.current.offsetWidth - (refCalendar.current.clientWidth + widthMore);
        const indexFirstDate = Math.floor(widthPrv / widthItem);
        const lengthPrv = Math.floor(widthPrv / widthItem);
        const firstDate = calendar?.[indexFirstDate];

        if (lengthPrv <= lengthItemCalendar) {
            const templateCalender = getDays(firstDate.clone(), lengthItemCalendar, "RIGHT");
            setCalendar(templateCalender);
        }


        /*Return First Date*/
        return firstDate.clone().utc().format();
    };

    const changeTranslateXBoxData = (value: any) => {
        if (refBoxData.current)
            refBoxData.current.style.transform = `translateX(${value}px)`;

        if (refBoxDays.current)
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

    const touchEnd = (event: any) => {
        const {x, y}: any = generateTouchPoint(event);
        endDrag();
    };

    return (
        <div className='calendar-grid-table calendar-ops'>
            <div className='calendar-header-root'>
                <div
                    className='box-title-items-calendar-scheduler-horizontal'
                    style={{width: size.width, backgroundColor: bgColorHeader}}
                >
                    {titleColumns}
                </div>
                <CalendarScheduleDates
                    bgColorHeader={bgColorHeader}
                    refListDates={refBoxDays}
                    calendar={calendar}
                    width={size.width}
                    refTodayHeader={refTodayHeader}
                    format={format}
                />
            </div>


            <div className='calendar-body-root'>
                <CalendarScheduleSider
                    columns={columns}
                    width={size.width}
                    height={size.height}
                    refListGroup={refSide}
                />
                <CalendarScheduleContainer
                    refContent={refCalendar}
                    calendar={calendar}
                    refListDates={refBoxDays}
                    refTodayHeader={refTodayHeader}
                    refBoxData={refBoxData}
                    columns={columns}
                    dataSource={dataSource}
                    loading={loading}
                    width={size.width}
                    height={size.height}
                    contentEvents={{
                        onScroll: onScroll,
                        onMouseDown: mouseDown,
                        onMouseLeave: mouseOut,
                        onMouseMove: mouseMove,
                        onMouseUp: mouseUp,
                        onTouchStart: touchStart,
                        onTouchMove: touchMove,
                        onTouchEnd: touchEnd,
                    }}
                />
            </div>
        </div>
    )
}