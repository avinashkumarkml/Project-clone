
const inititalState=[];


export const addItems = (store=inititalState,action)=>{
    
    switch(action.type){
        case "ADDITEM":
            return [
            ...store,
            action.payload
        ]
        case "UPDATEADD":
                return [...store];
        case "DELETECART":
                return [];
        case 'DELITEM':
            return store=store.filter((x)=>{
                return x.id !== action.payload.id
            })
            default:
                return store;
    }
    
}