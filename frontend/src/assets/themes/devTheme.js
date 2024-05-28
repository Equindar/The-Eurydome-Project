import { orange, pink } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const devTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: orange,
        secondary: pink,

        background: {
            dark: '#000000',
            main: '#282C34',
            light: '#5C6677',
            paper: '#282C34',
        },
    },
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 640,
            laptop: 1024,
            desktop: 1280,
        },
    },
});
