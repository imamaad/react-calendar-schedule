export const beforeToday = (day:any) => {
  return day.isBefore(new Date(), "day");
}

export const isToday = (day:any) => {
  return day.isSame(new Date(), "day");
}

const dayClasses = (day:any) => {
  if (beforeToday(day)) return "before";
  else if (isToday(day)) return "today";
  else return "";
}

export default dayClasses;