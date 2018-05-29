import React from 'react';

import ExpenseList from './ExpenseList';
import ExpanseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSummary />
        <ExpanseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;