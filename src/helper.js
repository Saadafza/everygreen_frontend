import jwtDecode from "jwt-decode";


// get the user details
export const getUser = () => {
    const token = localStorage.getItem("token");
    if(token) {
        return jwtDecode(token);
    }
    return null;
}