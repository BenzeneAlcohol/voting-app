


const reducer = (polls = [], action)=>{
    switch(action.type){
        case 'GET_ALL':
            return action.payload;
        default:
            return polls;
    }
}

export default reducer;