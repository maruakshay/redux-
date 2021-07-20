import React , {useState}from 'react'
import { createStore } from 'redux';
import { Reducer } from './Reducer';

export default () => {
    

    
   const store =  createStore(Reducer);
    store.dispatch({
        type : 'getstate',
        name : 'Akshay',
        gender: 'male'

    });
    store.dispatch({
        type: 'getstate',
        name: 'meena',
        gender: 'female'

    });
    store.dispatch({
        type: 'getstate',
        name: 'Dimple',
        gender: 'female'

    });
    store.dispatch({
        type: 'getstate',
        name: 'Manoj',
        gender: 'male'

    });
    store.dispatch({
        type: 'deleteState',
        name: 'mee'
    })
    console.log(store.getState());

    return (
        <>
        
        </>
    )
}