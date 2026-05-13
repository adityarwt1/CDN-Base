import {create} from 'zustand'

export const userAuthZustand = create((set)=>{
    accessToken:null;
    setAccessToken: (token)=>set({accessToken:token})
})