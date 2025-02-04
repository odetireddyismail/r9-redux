const InitialState={
  Ismail:[],
};
 

export const ChangeNumber=(state = InitialState, {type, payload})=>{
    
    switch(type){
        // case 'PRO':
        //     return {...state, products:payload};
        
        case 'INC':
            return {...state,Ismail:payload};
            
            case 'DEC':
                return state-1;
               
                
            default: 
            return state;
    }
   
    
}
//console.log(ChangeNumber)
//console.log(InitialState);