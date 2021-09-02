import DataOutcome from "./Outcome";
const AllExpense = () => {
  let allOutcome = 0;
  DataOutcome.map((el) => {
    allOutcome += el.amount;
  });
  return allOutcome;
};

export default AllExpense;
