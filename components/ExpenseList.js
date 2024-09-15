// components/ExpenseList.js
const ExpenseList = ({ entries }) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.date}</td>
              <td>{entry.type}</td>
              <td>{entry.category}</td>
              <td>${entry.amount.toFixed(2)}</td>
              <td>{entry.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default ExpenseList;
  