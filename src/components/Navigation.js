import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navigation = (props) => {
    const navigate = useNavigate();

    return (
        <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
            Меню
            </Typography>
            <Button color="inherit" onClick={() => navigate('/road-list')}>
            Дорожній лист
            </Button>
            <Button color="inherit" onClick={() => navigate('/directory')}>
            Довідник
            </Button>
        </Toolbar>
        </AppBar>
    );
};

export default Navigation;
