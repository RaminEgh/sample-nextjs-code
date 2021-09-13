import {createTheme} from '@material-ui/core/styles';
import {blueGrey, grey, red} from '@material-ui/core/colors';
import Styles from "./styles";

// Create a theme instance.
const theme = createTheme({
    direction: 'rtl',
    styles: Styles,
    palette: {
        type: 'light',
        common: {
            borderColor: '#8F9598',
            footer: grey[300],
            footerDark: grey[800],
            drawerWidth: 320,
        },
        primary: {
            main: blueGrey[900],
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: grey[200],
        },
    },

    overrides: {
        MuiDivider: {
            root: {
                marginTop: 4,
            }
        },

        MuiButton: {
            root: {
                fontWeight: 'bold',
                borderRadius: 28
            },
        },

    },

});

export default theme;
