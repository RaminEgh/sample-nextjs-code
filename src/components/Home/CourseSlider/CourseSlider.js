import Slider from "react-slick";
import {Box} from "@material-ui/core";
import CourseItem from "../../Course/CourseItem";
import {keyGenerator} from "../../../helpers";

const CourseSlider = props => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <Box mx={4}>
            <Slider {...settings}>
                {
                    props.items?.map(item => {
                        return (
                            <Box key={keyGenerator()}>
                                <CourseItem item={item}/>
                            </Box>
                        )
                    })
                }
            </Slider>
        </Box>
    );
};

export default CourseSlider;