import _ from "lodash";

export const buildCalendar = (value: any, next: any = true, number: any = 30) => {

    const startDay = value.clone();
    const endDay = value.clone().add(number, 'day');
    const lastDay = value.clone().subtract(number, 'day');

    const calendar = [];

    let currentDate = startDay;
    if (next) {
        while (currentDate < endDay) {
            calendar.push(currentDate);
            currentDate = currentDate.clone().add(1, 'day');
        }
        return calendar;
    } else {
        while (currentDate > lastDay) {
            calendar.push(currentDate);
            currentDate = currentDate.clone().subtract(1, 'day');
        }
        return _.sortBy(calendar);
    }
}