import { Navigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";


interface PrivateRouteProps {
    children: React.ReactNode
}
const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }: PrivateRouteProps) => {
    const { user, isLoading } = useAppSelector(state => state.auth);
    if (isLoading) {
        return <p className="text-center">Loading...</p>
    } else if (user?._id) {
        return children
    }
    else if (!user?._id) {
        <Navigate to={'/signin'} replace={true} />
    }
};

export default PrivateRoute;