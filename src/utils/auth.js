
export const isAuthenticated = ()=>{
    if(typeof window !=="undefined"){
        const token = localStorage.getItem("user_token")
        return !!token;
    }

    return false
}