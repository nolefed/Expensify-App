
import uuid from 'uuid';

export const addExpense= (   // takes an input and returns action object
    { 
      description='', 
      note='',
      amount = 0, 
      createdAt=0 
    } = {}
    ) => ({
    type: 'ADD_EXPENSE',
    expense:{                 // this expense object is being sent along with action object so that reducer can add the expense
      id:uuid(),
      description,
      note,
      amount,
      createdAt
    }
  });
  
  export const removeExpense = ({ id } = {}) => ({     // takes id as an input and returns action object
    type: 'REMOVE_EXPENSE',
    id
  });
  
  
  export const editExpense = (id,updates) =>({     // takes id and updates as input and returns action object
    type:'EDIT_EXPENSE',
    id,
    updates
  });