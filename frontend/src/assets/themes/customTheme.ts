import { orange, pink } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const customTheme = createTheme({
    breakpoints: {
        values: {
            desktop: 1280,
            laptop: 1024,
            mobile: 0,
            tablet: 640,
        },
    },
    palette: {
        background: {
            dark: '#000000',
            light: '#5C6677',
            main: '#282C34',
            paper: '#282C34',
        },
        mode: 'dark',
        primary: orange,

        secondary: pink,
    },
});
