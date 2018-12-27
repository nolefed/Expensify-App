import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense } from './actions/expenses';
import {setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'; 
import './styles/styles.scss'
 
const store = configureStore();   // creates a stores by passing the reducers. 

store.dispatch(addExpense({ description: 'Water bill', amount:4500 }));   //dispatches action to change the state of the application
store.dispatch(addExpense({ description: 'Gas bill', createdAt:1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));


const state = store.getState();    // returns the current state of the redux store
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
      <AppRouter />

    </Provider>
);

ReactDOM.render(jsx,document.getElementById('app'));

