import React from 'react';
import { data } from '../../../data';
import { useReducer } from 'react';
import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from './action';   
import reducer from './reducer';



const defaultState = {
  people: data,
  isLoading:false,
};


const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: {id} });
    };
 
 
 
  const clearList = () => {
  dispatch({ type: 'CLEAR_LIST' });   
  }  
  
  const resetList = () => {
    dispatch({ type: 'RESET_LIST' });
  }
  
  
  console.log(state);
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove
            </button>
          </div>
        );
      })}
      {state.people.length < 1 ? (
        <button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={resetList}
      >
        Reset List
      </button>
      ) : (
        <button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={clearList}
      >
        clear items
      </button>
      )}
    </div>
  );
};

export default ReducerBasics;
