
const cartReducer = (state =[], action) => {
    if (action.type === 'ADD-ITEM') 
    {

        //if state is empty, add item obj 
        if (state.length === 0) 
        {
            let newItemObj = {
                item: action.item,
                count: 1,
                price: action.price,
                totalPrice: action.price
            }

            return [...state, newItemObj]
        }
        //if state is non-empty
        else 
        {
            //check item is existed
            let newState = state.filter((stateObj => stateObj.item === action.item))
            //if newState is empty
            if (newState.length === 0) 
            {
                let newObj = {
                    item: action.item,
                    count: 1,
                    price: action.price,
                    totalPrice: action.price
                }
                return [...state, newObj]
            }
            //if newstate is non-empty
            else 
            {
                state.forEach((stateObj, ind) => {
                    if (stateObj.item === action.item)
                    {
                        let modifiedObj = {
                            item: action.item,
                            count: stateObj.count + 1,
                            price: action.price,
                            totalPrice: stateObj.totalPrice + action.price
                        }
                        //replace modifiedObj with storeObj
                       // state.splice(ind, 1, modifiedObj)
                         state=[...state.slice(0,ind),modifiedObj,...state.slice(ind+1)]

                    }
                })
                return state;
            }
        }
        
     }
     else if(action.type==='REMOVE-ITEM')
    {
        state.forEach((stateObj, ind) => {
            if (stateObj.item === action.item)
            {
                let deletedObj = {
                    item: action.item,
                    count:    stateObj.count -1,
                    price: action.price,
                    totalPrice: stateObj.totalPrice -action.price
                }
                //replace modifiedObj with storeObj
               // state.splice(ind, 1, modifiedObj)
                 state=[...state.slice(0,ind),deletedObj,...state.slice(ind+1)]

            }
        })
       return state;
    }
    else 
    {
        return state;
    }
    

 }
 
     
    

  

export default cartReducer;