import _ from "lodash";
import moment from "moment";

export const rangeBuildCalendarVirtualized = (sDate: string, eDate: string) => {

    const startDay = moment(sDate).startOf('day');
    const endDay = moment(eDate).endOf('day');

    const calendar: Array<string> = [];

    let currentDate = startDay;

    while (currentDate < endDay) {
        calendar.push(currentDate.utc().startOf('day').format());
        currentDate = currentDate.clone().add(1, 'day');
    }

    return _.sortBy(calendar);
}