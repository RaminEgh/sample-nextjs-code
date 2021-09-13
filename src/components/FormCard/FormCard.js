import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from "../Card/CardHeader/CardHeader";


const FormCard = props => {
    return (
        <Box display='block'>
            <form onSubmit={props.onSubmit} name={props.name} method='post'>
                <Card>
                    {props.title ? <CardHeader title={props.title}/> : null}
                    <CardContent align='center'>
                        {props.children}
                    </CardContent>
                </Card>
            </form>
        </Box>
    );
};

export default FormCard;