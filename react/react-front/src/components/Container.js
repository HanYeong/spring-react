import React from 'react';
import { Switch, Route } from 'react-router-dom';
import '../scss/index.scss';
import ContentsContainer from '../containers/ContentsContainer';
import ViewContainer from '../containers/ViewContainer';
import Body from './Body';

const Container = () => {
    return (
        <Switch>
            <Body>
            <Route path="/" exact>
                    <ContentsContainer/>
            </Route>
            <Route path="/:cid" exact>
                    <ViewContainer />
            </Route>
            </Body>
            <Route path="*">
                <div>page not found</div>
            </Route>
        </Switch>
    );
};
export default React.memo(Container);