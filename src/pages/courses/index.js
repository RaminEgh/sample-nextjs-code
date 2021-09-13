import CourseItem from "../../components/Course/CourseItem";
import Grid from "@material-ui/core/Grid";
import {keyGenerator} from "../../helpers";

const Courses = (props) => {
    return (
            <Grid container spacing={2}>
                {
                    props?.courses?.map(item => {
                        return <Grid key={keyGenerator()} item md={3}>
                            <CourseItem item={item}/>
                        </Grid>
                    })
                }
            </Grid>
    );
};


export async function getServerSideProps(context) {
    let response = await fetch(process.env.BASE_API + '/courses');
    let courses = null;
    if (response.status === 200) {
        await response.json().then(data => {
            courses = data || null;
        });
    }
    return {
        props: {courses: courses}
    };
}

export default Courses;