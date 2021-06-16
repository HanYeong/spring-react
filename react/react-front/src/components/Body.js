import React from 'react';
import AccountContainer from '../containers/AccountContainer';

function Body({children}) {
    return (
        <div>
            <AccountContainer/>
            {children}
        </div>
    );
}
export default React.memo(Body);