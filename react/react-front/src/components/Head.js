import React from 'react';
import AccountContainer from '../containers/AccountContainer';

const Head = ({Children}) => {
    return (
        <AccountContainer>
            {Children}
        </AccountContainer>
    );
};

export default Head;