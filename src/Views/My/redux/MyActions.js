import Types from './ActionTypes'
import NetWork from '../../../Commonly/utils/NetWork';
import Token from '../../../Commonly/utils/Token';

export function ListGet() {
    return async dispatch=>{

        dispatch({
            type:Types.MY_LIST_DATA,
            data:['1','2']
        })

    }

}