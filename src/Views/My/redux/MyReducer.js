import Types from './ActionTypes';
export const Initiali={
    Home:{
       
    },
    List:[
        
    ]
}

export default function(state = Initiali, action){
    switch(action.type){
        case Types.MY_DATA:{
            return {...state,Home:action}
        }
        case Types.MY_LIST_DATA:{
            return {...state,List:action.data}
        }
        default:{
            return state;
        }
    }
}