import DataIncome from "./Income";
const allIncome = () => {
  let allIncome = 0;
  DataIncome.map((el) => {
    allIncome += el.amount;
  });
  return allIncome;
};

export default allIncome;
