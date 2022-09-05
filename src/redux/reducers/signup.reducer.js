
const defaultState= {
    first_name:"",
    last_name:"",
    email:"",
    password:"",
    phone_number:"",
    address:"",
    country:"",
    province:"",
    city:"",
    postal_code:"",
    dob:"",
    nic:""

};

export const signupReducer = (state=defaultState,action)=>{

    switch(action.type){
        
        case 'USER_DETAIL_MAINTAIN_STATE':           
            return {...state,...action.payload,}

        default:
            return state;
    
    }


}