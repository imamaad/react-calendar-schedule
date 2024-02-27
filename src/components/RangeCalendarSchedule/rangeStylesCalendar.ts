import moment from "moment";

export const beforeToday = (day:moment.Moment | string) => {
  return moment(day).isBefore(moment(), "day");
}

export const isToday = (day:moment.Moment | string) => {
  return moment(day).isSame(moment(), "day");
}

const dayClasses = (day:moment.Moment | string) => {
  if (beforeToday(day)) return "before";
  else if (isToday(day)) return "today";
  else return "";
}

export default dayClasses;