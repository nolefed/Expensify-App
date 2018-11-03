import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


const addExpense= (
  { 
    description='', 
    note='',
    amount = 0, 
    createdAt=0 
  } = {}
  ) => ({
  type: 'ADD_EXPENSE',
  expense:{
    id:uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});


const editExpense = (id,updates) =>({
  type:'EDIT_EXPENSE',
  id,
  updates
});

const setTextFilter = (text = '') =>({
  type:'SET_TEXT_FILTER',
  text
});

const sortByDate = () =>({
  type:'SORT_BY_DATE'
});

const sortByAmount = () =>({
  type:'SORT_BY_AMOUNT'
});

const expensesReducerDefaultState= [];

const expenseReducer=(state=expensesReducerDefaultState,action)=>{
  switch(action.type){
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
      case 'REMOVE_EXPENSE':
       return state.filter(({ id })=>{
        return id!==action.id;
       });
      case 'EDIT_EXPENSE':
      return state.map((expense)=>{
        if (expense.id===action.id){
          return {
            ...expense,
            ...action.updates
          };
        } 
        else{
          return expense;
        };
      }); 
    default:
    return state;
  }
};

const filtersReducerDefaultState={
  text:'',
  sortBy:'date',
  startDate: undefined,
  endDate:undefined
};

const filtersReducer= (state = filtersReducerDefaultState,action) =>{
  switch(action.type){
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text:action.text
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };  
      case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };    
    default:
    return state;
  }
};

const store= createStore(
  combineReducers({
    expenses:expenseReducer,
    filters: filtersReducer

  })
);

store.subscribe(()=>{
  console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({ description : 'Rent', amount:100 })); 
const expenseTwo = store.dispatch(addExpense({ description : 'Coffee', amount:300 })); 

store.dispatch(removeExpense({ id:expenseOne.expense.id }));

store.dispatch(editExpense(expenseTwo.expense.id,{amount:500 }));

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

const demoState={
    expenses:[{
      id: 'sfsfs',
      description:'Januray Rent',
      note: 'This was the final payment for that address',
      amount:54500,
      createdAt:0  
    }],
    filters:{
      text:'rent',
      sortBy: 'amount',    // date or amount
      startDate: undefined,
      endDate: undefined
    }
};




