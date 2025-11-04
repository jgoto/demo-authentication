export function getToken(){
    return localStorage.getItem('token');
}

export function isTokenExpired(token){
    if(!token)
        return true;
    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        const exp = payload.exp * 1000;
        return Date.now() > exp;
        
    } catch (error) {
        return true;
    }
}

export function isLoggedIn(){
    const token = getToken();
    return token && !isTokenExpired(token);
}

export function logout(){
    localStorage.removeItem('token');
}