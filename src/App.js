import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummy_expenses = [
  {
    id: "e1",
    title: "Grocery",
    amount: 150.55,
    date: new Date(2020, 2, 5),
  },
  {
    id: "e2",
    title: "Internet Bill",
    amount: 88.55,
    date: new Date(2020, 2, 5),
  },
  {
    id: "e3",
    title: "Mobile Recharge",
    amount: 22.55,
    date: new Date(2019, 2, 5),
  },
  {
    id: "e4",
    title: "House Rent",
    amount: 500.55,
    date: new Date(2022, 1, 5),
  },
  {
    id: "e5",
    title: "Office Expenses",
    amount: 1000.55,
    date: new Date(2022, 1, 5),
  },
  {
    id: "e6",
    title: "New Mobile Rent",
    amount: 900.55,
    date: new Date(2022, 1, 5),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(dummy_expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // const filterValueChange = (value) => {
  //   const newExp = expenses.filter(
  //     (expense) => expense.date.getFullYear().toString() === value
  //   );
  //   setExpenses(newExp);
  // };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
