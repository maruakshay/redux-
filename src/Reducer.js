import Storage from './Storage';
let user = {
    name : ''
    
}

export function Reducer(state = [], actions)
{
    if(actions.type === 'getstate')
       {
          user = {
              name : actions.name,
              
          }
         Storage(user);
          state.push(user);

          return state;
       }
       else if(actions.type === 'deleteState')
       {
           console.log('deleting the element.....');
            for(let i = 0; i < state.length;i++){
                if(actions.name === state[i].name)
                state.splice(i, 1);
                else
                console.log('no name found to delete')
            }
           return state;
           
       }

}