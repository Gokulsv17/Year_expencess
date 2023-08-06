import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import "./app.css"
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2023, 0, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2023, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 29.67,
    date: new Date(2023, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2023, 3, 12),
  },
  {
    id: "e5",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2023, 4, 12),
  },
  {
    id: "e6",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2023, 5, 12),
  },
  {
    id: "e7",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2023, 6, 12),
  },
  {
    id: "e8",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2023, 7, 12),
  },
  {
    id: "e9",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2023, 8, 1),
  },
  {
    id: "e10",
    title: "New Desk (Wooden)",
    amount: 45,
    date: new Date(2023, 2, 12),
  },
  {
    id: "e11",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2023, 1, 12),
  },
  {
    id: "e12",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2023, 0, 12),
  },
  {
    id: "e13",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2023, 0, 12),
  },
];

const  App=()=> {
const [expenses,setExpenses]=  useState(DUMMY_EXPENSES)

  const addExpenseHandler = expense =>{
   setExpenses((prevExpenses)=>{
    return [expense, ...prevExpenses]
   })
  }
  return (
    <div className="App">
    <h1>Let's Get Started</h1>
    <NewExpenses onAddExpense={addExpenseHandler}/>
    <Expenses items={expenses}/>
    </div>
  );
}

export default App;
