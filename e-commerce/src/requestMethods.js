import axios from "axios"

const BASE_URL = "http://localhost:5000/api/"
// const TOKEN = JSON.parse((JSON.parse(localStorage.getItem("persist:root"))).user).currentUser.accessToken
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzYwNDBmMzhhZGIxMTdhNjM2YTVjNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNzU1MjYyNSwiZXhwIjoxNzA3ODExODI1fQ.6EL7kGQ68rQPJo_TxWu413B2Zn8OErQjD0iREhHOflU"

// DYNAMIC TOKEN LENE ME DIKKAT AA RHI H

export const publicRequest = axios.create({
    baseURL : BASE_URL,
});

export const userRequest = axios.create({
    baseURL : BASE_URL,
    headers : {token : `Bearer ${TOKEN}`}
});