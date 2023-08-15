import React, {HTMLAttributes} from 'react';
import logo from '../../../assets/favicon-32x32.png';
import './Header.scss';
import {Link, Typography} from '@mui/material';

export interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
}

export const Header: React.FC<HeaderProps> = (props) => {
    const {children, className, ...rest} = props;

    return (<header className={`bn-header ${className}`} {...rest}>
        <Link href="https://github.com/zrwusa/data-structure-typed" target="_blank" underline="hover" rel="noopener">
            <img src={logo} alt="data-structure-typed logo"/>
        </Link>
        {children}
        <Link href="https://github.com/zrwusa/data-structure-typed" target="_blank" rel="noopener" underline="hover"
              color="inherit">
            <Typography variant="h6" gutterBottom>
                Try data-structure-typed
            </Typography>
        </Link>
    </header>)
}