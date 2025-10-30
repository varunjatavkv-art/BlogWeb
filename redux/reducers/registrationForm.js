import { createSlice } from "@reduxjs/toolkit";

const registrationSlice = createSlice({
     name: "registration",
     state:{
        
     },
     reducers: {
        getFormData : (state, action) => {
            state.formData = action.payload
        }
     }
});

export const {getFormData} = registrationSlice.actions;
export default registrationSlice.reducer;