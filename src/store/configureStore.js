import { createStore, combineReducers } from 'redux';
import expenseReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters'; 

export default () => {
    const store= createStore(
        combineReducers({
          expenses:expenseReducer,     // expense reducer is passed to the store
          filters: filtersReducer      // filters reducers is passed to the store
      }), 
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      );
      return store;
};

