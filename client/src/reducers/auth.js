const authReducer = (state={authData: null}, action)=>{
    switch(action.type){
        case 'AUTH':
            console.log(action.data);
            localStorage.setItem("authToken", action.data.token);
            return {authData: action.data};
        case 'LOGOUT':
            localStorage.clear();
            return state;
        default: 
            return state 
    }
}

export default authReducer;