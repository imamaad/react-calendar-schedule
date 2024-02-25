import _ from "lodash";

export const rangeBuildCalendar = (date: any, next: any = true, number: any = 30) => {

    const startDay = date.clone().subtract(number, 'day');
    const endDay = date.clone().add(number * 2, 'day');

    const calendar = [];

    let currentDate = startDay;
    while (currentDate < endDay) {
        calendar.push(currentDate);
        currentDate = currentDate.clone().add(1, 'day');
    }

    return _.sortBy(calendar);
}