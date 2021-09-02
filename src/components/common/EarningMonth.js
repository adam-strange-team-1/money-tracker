import DataIncome from "./Income";

const EarningMonth = () => {
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
  const arr = DataIncome.filter((el) => el.date.month === monthArr[month]);
  let amount = 0;
  arr.map((el) => (amount += el.amount));
  return amount;
};

export default EarningMonth;
