import React, {HTMLAttributes} from 'react';
import logo from '../../../assets/favicon-32x32.png';
import './Header.scss';
import {Box, Link, Typography} from '@mui/material';
import Paper from '@mui/material/Paper';

export interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
}

export const Header: React.FC<HeaderProps> = (props) => {
    const {children, className, ...rest} = props;

    return (<Paper>
        <header className={`bn-header ${className}`} {...rest}>
        <Link href="https://github.com/zrwusa/data-structure-typed" target="_blank" underline="hover" rel="noopener">
            <img src={logo} alt="data-structure-typed logo"/>
        </Link>
        {children}
        <Box style={{
            display: 'flex',
            gap:10,
        }}>
            <Link href="https://github.com/zrwusa/data-structure-typed" target="_blank" rel="noopener" underline="hover"
                  color="#11be11">
                <Typography variant="h6" gutterBottom>
                    data-structure-typed
                </Typography>
            </Link>
            <Link href="https://data-structure-typed-docs.vercel.app/" target="_blank" rel="noopener" underline="hover"
                  color="inherit">
                <Typography variant="h6" gutterBottom>
                    API Docs
                </Typography>
            </Link>

        </Box>

        </header>
    </Paper>)
}