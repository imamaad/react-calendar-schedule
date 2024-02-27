import _ from "lodash";
import moment from "moment";

export const rangeBuildCalendar = (date: string, subtract: number = 30, add: number = 30) => {

    const startDay = moment(date).clone().subtract(subtract, 'day');
    const endDay = moment(date).clone().add(add, 'day');

    const calendar: Array<string> = [];

    let currentDate = startDay;

    while (currentDate < endDay) {
        calendar.push(currentDate.utc().startOf('day').format());
        currentDate = currentDate.clone().add(1, 'day');
    }

    return _.sortBy(calendar);
}