import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import app from "../firebase/firebase.config";
import { setUser, toggleLoading } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const auth = getAuth(app)
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const { email, isLoading } = useSelector((state) => state.userSlice)
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(setUser({
                    email: user.email,
                    name: user.displayName
                }))
                dispatch(toggleLoading(false))
            } else {
                dispatch(toggleLoading(false))
            }
        })
    }, [])
    if(!email){
        return navigate("/")
    }
};

export default PrivateRoute;