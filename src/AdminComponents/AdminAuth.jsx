import React, {useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

function AdminAuth(props) {
const navigator = useNavigate();
const UserContext = useContext(AuthContext);

    useEffect(() => {
        if (UserContext.user?.role === "Admin") {
            navigator("/login");
        }
    }, []);


        return (
            <>{props.children}</>
        )
}

export default AdminAuth