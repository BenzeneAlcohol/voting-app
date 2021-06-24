import * as api from '../api';

//Actions

export const getPolls = ()=> async (dispatch)=>{
    try{
        const {data} = await api.fetchPolls();
        const action = {
            type: 'GET_ALL',
            payload: data
        }
        dispatch(action);
    }
    catch(err){
        console.log(err.message);
    }

}

