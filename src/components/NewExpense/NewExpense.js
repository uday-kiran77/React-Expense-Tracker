import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";
import "./ExpenseForm.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
      //   id: Math.floor(Math.random() * 99999 + 1),
    };
    props.onAddExpense(expenseData);
    editHandler();
  };

  const editHandler = () => {
    setIsEditing((prevState) => {
      return prevState ? false : true;
    });
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={editHandler}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={editHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
