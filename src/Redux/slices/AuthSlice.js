import {cresteSlice} from "@reduxjs/toolkit"

const initialState = {
    isLoggeedIn: localStorage.getItem('isLoggedIn') || false,
    role : localStorage.getItem('role') || "",
    data: localStorage.getItem('data') || {}
}

const authSlice = cresteSlice({
    name:'auth',
    initialstate,
    reducers:{},
})

//expoert const {} = authSlice.actions;
export default authSlice.reducers;