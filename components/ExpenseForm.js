// components/ExpenseForm.js
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const categories = ['Alugel', 'Condomínio', 'Contas', 'empréstimos', 'outros'];

const ExpenseForm = ({ onAdd }) => {
  const [type, setType] = useState('expense');
  const [category, setCategory] = useState(categories[0]);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !description || !date) return;

    const newEntry = {
      id: uuidv4(),
      type,
      category,
      amount: parseFloat(amount),
      description,
      date,
    };

    onAdd(newEntry);

    setAmount('');
    setDescription('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Type:
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
      </label>
      <label>
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
      <label>
        Amount:
        <input
          type="number"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <button type="submit">Add Entry</button>
    </form>
  );
};

export default ExpenseForm;
