import Types from './ActionTypes';
export const Initiali={
    Home:{
       
    },
    List:[
        
    ]
}

export default function(state = Initiali, action){
    switch(action.type){
        case Types.HOME_DATA:{
            return {...state,Home:action}
        }
        case Types.HOME_LIST_DATA:{
            return {...state,List:action.data}
        }
        default:{
            return state;
        }
    }
}