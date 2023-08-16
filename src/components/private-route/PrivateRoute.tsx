import * as React from 'react';
import { RouteProps, useNavigate } from 'react-router';
import { Navigate } from 'react-router-dom';
import store from '../../stores/root';

type IProps = RouteProps & {
    redirectPath: string;
    children: React.ReactNode;
};

const Protected: React.FC<IProps> = ({ children, redirectPath }) => {
    const navigate = useNavigate();
    const isAuth = !!store.getState().userState.user.access_token;

    if (!isAuth) {
        navigate('/login', { state: { from: redirectPath } });
        return null;
    }

    return <>{children}</>; // You can use a fragment or any other parent wrapper here
};

export default Protected;
