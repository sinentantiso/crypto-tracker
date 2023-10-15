import { createTheme, makeStyles } from '@mui/material';
import React from 'react';

const useStyles = makeStyles ((theme) => ({
    title: {
        flex: 1,
        color: "gold",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer",
    },
}))

const darkTheme = createTheme ({
    palette: {
        primary: {
          main: "#fff",
        },
        type: "dark",
    },
});

function Header() {
    return (
        <div>
            Hello Sine
        </div>
    );
}

export default Header;
