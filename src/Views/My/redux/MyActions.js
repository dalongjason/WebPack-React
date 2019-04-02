import Types from './ActionTypes'
import NetWork from '../../../Commonly/utils/NetWork';
import Token from '../../../Commonly/utils/Token';

export function ListGet(ID,Callback=()=>{}) {
    return async dispatch=>{

        dispatch({
            type:Types.HOME_LIST_DATA,
            data:[]
        })

    }

}