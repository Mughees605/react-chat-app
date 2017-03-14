export var loginReducer = (state = {},action)=>{

    switch(action.type){
        case "LOGIN":
        return {
            uid:action.uid
        }
        default:
        return state
    }

}