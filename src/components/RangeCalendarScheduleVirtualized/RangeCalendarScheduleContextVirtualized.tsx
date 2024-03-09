import {createContext, ElementRef, useContext, useEffect, useMemo, useRef, useState} from "react";
import * as React from "react";
import {RangeCalendarScheduleInitialInterface} from "../../common/interfaces";
import moment from "moment/moment";
import {rangeBuildCalendarVirtualized} from "./rangeBuildCalendarVirtualized";
import {useWindowSize} from "../../hooks";
import _ from "lodash";


interface RangeCalendarScheduleContextType extends RangeCalendarScheduleInitialInterface {
    days: Array<string>,
    refSide: React.RefObject<HTMLInputElement>,
    refCalendar: React.RefObject<HTMLInputElement>,
    refTodayHeader: React.RefObject<HTMLInputElement>,
    refBoxData: React.RefObject<HTMLInputElement>,
    refBoxDays: React.RefObject<HTMLInputElement>,

    contentEvents: {
        onScroll: React.UIEventHandler<HTMLDivElement>
        onMouseDown: React.UIEventHandler<HTMLDivElement>
        onMouseLeave: React.UIEventHandler<HTMLDivElement>
        onMouseMove: React.UIEventHandler<HTMLDivElement>
        onMouseUp: React.UIEventHandler<HTMLDivElement>
        onTouchStart: React.UIEventHandler<HTMLDivElement>
        onTouchMove: React.UIEventHandler<HTMLDivElement>
        onTouchEnd: React.UIEventHandler<HTMLDivElement>
    }
}


export const RangeCalendarScheduleContextVirtualized = createContext<RangeCalendarScheduleContextType>(null!);

export const useRangeCalendarSchedule = () => {
    return useContext(RangeCalendarScheduleContextVirtualized);
}

export const RangeCalendarScheduleConsumer = RangeCalendarScheduleContextVirtualized.Consumer;

interface RangeScheduleProviderProps {
    children: React.ReactNode,
    initialProps: RangeCalendarScheduleInitialInterface
}

export const RangeCalendarScheduleProvider: React.FC<RangeScheduleProviderProps> = ({children, initialProps}) => {

    const {size, minTime, maxTime} = initialProps;

    const [visibleTimeStart, setVisibleTimeStart] = useState<string>(minTime);
    const [visibleTimeEnd, setVisibleTimeEnd] = useState<string>(maxTime);

    const [days, setDays] = useState<Array<string>>([]);
    const [transformXBoxData, setTransformXBoxData] = useState<number>(0);
    const [directionDrag, setDirectionDrag] = useState<"RIGHT" | "LEFT">("RIGHT");
    const [selectMove, setSelectMove] = useState<boolean>(false);
    const [position, setPosition] = useState<{ left: number, top: number, x: number, y: number }>({
        left: 0,
        top: 0,
        x: 0,
        y: 0
    });

    const widthItem = useMemo(() => size.width, [size.width]);

    const refSide = useRef<HTMLInputElement | null>(null);
    const refCalendar = useRef<HTMLInputElement | null>(null);
    const refTodayHeader = useRef<HTMLInputElement | null>(null);
    const refBoxData = useRef<HTMLInputElement | null>(null);
    const refBoxDays = useRef<HTMLInputElement | null>(null);


    const {width: widthScrollBar} = useWindowSize(refCalendar);

    const lengthItemCalendar: number = useMemo(() => {
        return widthScrollBar !== undefined ? (Math.ceil(widthScrollBar / widthItem)) : 0
    }, [widthScrollBar, widthItem]);


    const onChangeDayPoint = (dayPoint?: string) => {
        if (dayPoint) {
            setVisibleTimeStart(dayPoint);
        }
    }

    const onFindTimeStart = () => {
        if (refBoxData.current && refCalendar.current) {
            const translateX = getTranslateX(refBoxData.current);

            const widthMore = refBoxData.current.offsetWidth - refCalendar.current.clientWidth - (translateX * -1);
            const widthPrv = refBoxData.current.offsetWidth - (refCalendar.current.clientWidth + widthMore);
            const indexFirstDate = Math.floor(widthPrv / widthItem);
            const firstDate = moment(days?.[indexFirstDate]);

            /*Return First Date*/
            return firstDate.clone().utc().format();
        }
    }

    const getDays = (day: string | undefined, subtract: number, add: number) => {
        return day ? rangeBuildCalendarVirtualized(day, subtract, add) : [];
    };

    const changeTranslateXBoxData = (value: any) => {
        if (refBoxData.current)
            refBoxData.current.style.transform = `translateX(${value}px)`;

        if (refBoxDays.current)
            refBoxDays.current.style.transform = `translateX(${value}px)`;
    };

    const getStartDate = (days: Array<string>) => {
        if (refBoxData.current && refCalendar.current) {
            const translateX = getTranslateX(refBoxData.current);

            const widthMore = refBoxData.current.offsetWidth - refCalendar.current.clientWidth - (translateX * -1);
            const widthPrv = refBoxData.current.offsetWidth - (refCalendar.current.clientWidth + widthMore);
            const indexFirstDate = Math.floor(widthPrv / widthItem);
            const widthContentPlusMore = refCalendar.current.clientWidth + widthMore;

            /*Return First Date*/
            return {
                selectedDate: days?.[indexFirstDate],
                widthContentPlusMore,
                widthRemains: widthPrv % widthItem
            };
        }
    }

    const appendDaysRight = () => {
        if (refBoxData.current && refCalendar.current) {
            const translateX = getTranslateX(refBoxData.current);

            const widthMore = refBoxData.current.offsetWidth - refCalendar.current.clientWidth - (translateX * -1);
            const widthPrv = refBoxData.current.offsetWidth - (refCalendar.current.clientWidth + widthMore);
            const indexFirstDate = Math.floor(widthPrv / widthItem);
            const lengthMore = Math.floor(widthMore / widthItem);
            const firstDate = days?.[indexFirstDate];

            if (lengthMore < lengthItemCalendar) {
                const lengthChangeItems = lengthItemCalendar - lengthMore;

                const lastDate = moment(_.last(days)).utc().add(1, 'day').format();

                const templateCalender = getDays(lastDate, 0, lengthChangeItems);

                setDays(oldDays => [...oldDays, ...templateCalender]);
            }


            /*Return First Date*/
            return firstDate;
        }
    };

    const appendDaysLeft = () => {
        if (refBoxData.current && refCalendar.current) {
            const translateX = getTranslateX(refBoxData.current);

            const widthMore = refBoxData.current.offsetWidth - refCalendar.current.clientWidth - (translateX * -1);
            const widthPrv = refBoxData.current.offsetWidth - (refCalendar.current.clientWidth + widthMore);
            const indexDayPoint = Math.floor(widthPrv / widthItem);
            const lengthPrv = Math.floor(widthPrv / widthItem) + 1;
            const firstDate = days?.[indexDayPoint];


            console.log({widthPrv})
            if (lengthPrv < lengthItemCalendar) {

                const lengthChangeItems = lengthItemCalendar - lengthPrv;


                const firstDate = moment(_.first(days)).utc().format();

                const templateCalender = getDays(firstDate, lengthChangeItems, 0);

                // setDays(oldDays => [...templateCalender, ...oldDays]);

                setDays(oldDays => [...templateCalender, ...oldDays]);

                const translateXBoxSize = translateX - (templateCalender.length * widthItem);

                changeTranslateXBoxData(translateXBoxSize);
            }


            /*Return First Date*/
            return firstDate;
        }
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
        endDrag({clientX: x, clientY: y});
    };

    const onScroll = (event: any) => {
        const element = event.target;

        if (refSide.current?.scrollTop)
            refSide.current.scrollTop = element.scrollTop;
    };

    const startDrag = (x: any, y: any) => {
        if (refCalendar.current) {
            const {scrollTop, scrollLeft} = refCalendar.current;
            setSelectMove(true);


            refCalendar.current.classList.add('select-for-scroll');
            setPosition({left: scrollLeft, top: scrollTop, x, y});
        }

    };

    const dragging = (x: any, y: any) => {
        if (selectMove && refCalendar.current) {
            const translateX = (position.left - (x - position.x)) * -1;

            const directionDrag = translateX < 0 ? "RIGHT" : "LEFT";

            /* if (directionDrag === "LEFT" && moment(minTime).utc().startOf('day').isSameOrAfter(moment(onFindTimeStart()).utc().startOf('day'))) {
                 console.log({
                     one: moment(minTime).utc().startOf('day').format(),
                     two: moment(onFindTimeStart()).utc().startOf('day').format()
                 })

                 return;
             }
 */
            refCalendar.current.scrollTop = position.top - (y - position.y);
            setDirectionDrag(directionDrag);
            changeTranslateXBoxData(transformXBoxData + translateX);
        }
    };

    const endDrag = ({clientX, clientY}: any) => {
        if (refCalendar.current) {
            setSelectMove(false);
            refCalendar.current.classList.remove('select-for-scroll');
            appendDays();

            const translateX = (position.left - (clientX - position.x)) * -1;

            setTransformXBoxData(transformXBoxData + translateX);
        }
    };


    const mouseDown = (event: any) => {
        const {clientX, clientY} = event;
        startDrag(clientX, clientY);
    };

    const mouseMove = (event: any) => {
        const {clientX, clientY} = event;
        dragging(clientX, clientY);
    };

    const mouseUp = (event: any) => {
        const {clientX, clientY} = event;
        endDrag({clientX, clientY});
    };

    const mouseOut = (event: any) => {
        if (selectMove) {
            const {clientX, clientY} = event;
            endDrag({clientX, clientY});
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
                    onChangeDayPoint(appendDaysRight());
                    break;
                case "LEFT":
                    onChangeDayPoint(appendDaysLeft());
                    break;
                default:
            }
        }
    };


    useEffect(() => {
        if (lengthItemCalendar) {
            const generateDays: Array<string> = getDays(visibleTimeStart, lengthItemCalendar, lengthItemCalendar * 2);
            setDays(generateDays);

            const translateXBoxSize = (lengthItemCalendar * widthItem) * -1;

            changeTranslateXBoxData(translateXBoxSize);
            setTransformXBoxData(translateXBoxSize);
        } else {
            setDays([]);
        }

        // eslint-disable-next-line
    }, [lengthItemCalendar]);

    /*   useEffect(() => {
           const selectedStartDate = getStartDate()?.selectedDate;

           if (!selectedStartDate || !moment(visibleTimeStart).isSame(selectedStartDate, 'date')) {
               const templateCalender = getDays(moment(visibleTimeStart), lengthItemCalendar);
               setDays(templateCalender);

               let translateXBoxSize = 0;
               if (selectedStartDate) {
                   const widthRemains = getStartDate()?.widthRemains || 0;
                   translateXBoxSize = (((lengthItemCalendar * widthItem) + widthRemains) * -1);
               } else {
                   translateXBoxSize = (lengthItemCalendar * widthItem) * -1;
               }

               changeTranslateXBoxData(translateXBoxSize);
               setTransformXBoxData(translateXBoxSize);
           }
           // eslint-disable-next-line
       }, [lengthItemCalendar, visibleTimeStart]);*/

    const value: RangeCalendarScheduleContextType = {
        days: days,
        sidebarWidth: 230,
        refSide: refSide,
        refCalendar: refCalendar,
        refTodayHeader: refTodayHeader,
        refBoxData: refBoxData,
        refBoxDays: refBoxDays,
        contentEvents: {
            onScroll: onScroll,
            onMouseDown: mouseDown,
            onMouseLeave: mouseOut,
            onMouseMove: mouseMove,
            onMouseUp: mouseUp,
            onTouchStart: touchStart,
            onTouchMove: touchMove,
            onTouchEnd: touchEnd,
        },
        ...initialProps,
    };

    return (
        <RangeCalendarScheduleContextVirtualized.Provider value={value}>
            {children}
        </RangeCalendarScheduleContextVirtualized.Provider>
    );
}

