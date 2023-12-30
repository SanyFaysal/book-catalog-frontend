import { Navigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";


interface PrivateRouteProps {
    children: React.ReactNode
}
const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }: PrivateRouteProps) => {
    const { user } = useAppSelector(state => state.auth);
    if (!user?._id) {
        return <Navigate to="/signin" replace={true} />
    } else if (user?._id) {
        return children
    }
};

export default PrivateRoute;