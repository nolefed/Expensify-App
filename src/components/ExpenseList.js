import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList =(props)=>(
    <div>
        <h1>Expense List</h1>
       
        {props.expenses.map((expense) => {
           return <ExpenseListItem key={expense.id} {...expense}/>      // once the filtered and sorted list arrives,it is displayed
        })}
    </div>

);

const mapStateToProps = (state)=>{
    return{
      expenses: selectExpenses(state.expenses, state.filters)    // the function call basically gets a sorted and filtered list of expense
    };
}

export default connect (mapStateToProps)(ExpenseList);

