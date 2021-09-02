import DataOutcome from "./Outcome";

const SpentMonth = () => {
  const n = new Date();
  const month = n.getMonth();
  const monthArr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const arr = DataOutcome.filter((el) => el.date.month === monthArr[month]);
  let amount = 0;
  arr.map((el) => (amount += el.amount));
  return amount;
};

export default SpentMonth;
