import React from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Master in C++',
      amount: 2999,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'Getting Started with Python', amount: 1499, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Web Development',
      amount: 999,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'JavaScript',
      amount: 599,
      date: new Date(2021, 5, 12),
    },
  ];

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <h2>Let's Start Learning with Coding Spark🎇!</h2>
      <NewExpense/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;