import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import FileItem from "./FileItem";
import {makeStyles} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));

const FileList = ({items}) => {
    const classes = useStyles();
    return (
        <div>
            <Typography variant="h6" className={classes.title}>

            </Typography>
            <div className={classes.demo}>
                <List >
                    {
                        items?.map(item => {
                            return <FileItem item={item}/>
                        })
                    }
                </List>
            </div>
        </div>
    );
};

export default FileList;