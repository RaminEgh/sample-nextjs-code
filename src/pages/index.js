import Slider from "react-slick";
import Image from 'next/image'
import CourseSlider from "../components/Home/CourseSlider/CourseSlider";
import {keyGenerator} from "../helpers";
import Box from "@material-ui/core/Box";
import Link from 'next/link';

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
};



const Index = props => {

    return (
        <Box align='center'>
            <Slider {...settings}>
                {
                    props?.homeSlides?.map(item => {
                        return <Link href={item?.link} key={keyGenerator()}>
                            <a>
                                <Image
                                    key={keyGenerator()}
                                    src={item?.image}
                                    height={400}
                                    width={1340}
                                    alt={item?.title}
                                />
                            </a>
                        </Link>
                    })
                }

            </Slider>

            <CourseSlider items={props?.courses}/>
        </Box>


    );
};

async function getHome() {
    const response = await fetch(process.env.BASE_API, {
        method: 'GET',
        headers: {
            Accept: 'application/json; charset=UTF-8'
        }
    });
    const data = await response.json();
    return data || null;
}

export async function getStaticProps() {
    const {courses, homeSlides} = await getHome();
    return {
        props: {
            courses: courses,
            homeSlides: homeSlides
        },
        revalidate: 5
    }
}

export default Index;