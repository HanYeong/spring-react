import React from 'react';
import Topbar from './Topbar';

const Head = ({Children}) => {
    return (
        <Topbar>
            {Children}
        </Topbar>
    );
};

export default Head;