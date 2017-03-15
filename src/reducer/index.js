export var loginReducer = (state = {},action)=>{

    switch(action.type){
        case "LOGIN":
        return {
            uid:action.uid
        }
        case "LOGOUT":
        return {}
        default:
        return state
    }

}
export var getData = (state = {},action)=>{
    switch(action.type){
        case "FETCH_DATA":


        
        return {
            ...state,
            data:action.data
        }
        default:
        return state;
    }
}