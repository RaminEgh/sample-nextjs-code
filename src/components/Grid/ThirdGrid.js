import Grid from '@material-ui/core/Grid';

const ThirdGrid = props => {
    return (
        <Grid container justify='center'>
            <Grid item md/>
            <Grid item md xs={12}>
                {props.children}
            </Grid>
            <Grid item md/>
        </Grid>
    );
};

export default ThirdGrid;