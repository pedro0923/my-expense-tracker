// pages/index.js
import { useState } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import { format } from 'date-fns';

export default function Home() {
  const [entries, setEntries] = useState([]);

  const addEntry = (entry) => {
    setEntries([entry, ...entries]);
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAdd={addEntry} />
      <ExpenseList entries={entries} />
    </div>
  );
}
