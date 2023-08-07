import axios from "axios"
import { startLoading, stopLoading, storeProfile, storeToken, userLogedIn } from "./slice"

const API_URL = "http://localhost:5005/auth"

export const bootstrapThunkLogin = async(dispatch, getState) =>{
    dispatch(startLoading())
    const token  = localStorage.getItem("token")

    if(token){
        try{
        // dispatch(storeToken(token))
        
        const profileResponse = await axios.get(`${API_URL}/profile`,{
            headers : {
                Authorization : `Bearer ${token}`
            }
        })
        // console.log("profileResponse....", profileResponse.data.user._doc)
        const profile = profileResponse.data.user._doc
    
        // dispatch(storeProfile(profile))
        // dispatch(stopLoading())

        dispatch(
            userLogedIn({
                token: token,
                profile: profile,
            })
        )

    }catch(err) {
        console.log("Error in bootstrapping", err)
    }

    }
}

// A thunk creator
export const fetchAuth = (username , password) => {
    // Return the thunk itself, i.e. a function
    return async(dispatch, getState)=>{
    const body = {username, password}
    try {
        dispatch(startLoading())
    const tokenResponse = await axios.post(`${API_URL}/login`, body)
    // console.log("loginResponse....", response.data)
    const token = tokenResponse.data.token
    localStorage.setItem("token", token) // sets the token to localStorage
    // dispatch(storeToken(token))

    const profileResponse = await axios.get(`${API_URL}/profile`,{
        headers : {
            Authorization : `Bearer ${token}`
        }
    })
    // console.log("profileResponse....", profileResponse.data.user._doc)
    const profile = profileResponse.data.user._doc

    // dispatch(storeProfile(profile));
    // dispatch(stopLoading());
    dispatch(
        userLogedIn({
            token: token,
            profile: profile,
        })
    )


    }catch (err) {
        console.log(err.message)
    }
}
}