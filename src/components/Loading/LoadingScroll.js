import React from 'react';
import Loading from './Loading';

const LoadingScroll = props => {
    return (
        <>
            {!props.loading ? window.scrollTo({top:0, behavior: 'smooth'}) : <Loading loading={props.loading} center/>}
        </>
    );
};

export default LoadingScroll;