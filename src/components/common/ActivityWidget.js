import DataIncome from "./Income";
import DataOutcome from "./Outcome";

const ActivityAmount = () => {
  let allIncome = 0;
  DataIncome.map((el) => {
    allIncome += el.amount;
  });
  let allOutcome = 0;
  DataOutcome.map((el) => {
    allOutcome += el.amount;
  });
  return allIncome - allOutcome;
};
export default ActivityAmount;
