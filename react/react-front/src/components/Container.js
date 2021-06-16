import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Head from './Head';
import '../scss/index.scss';
import ContentsContainer from '../containers/ContentsContainer';
import ViewContainer from '../containers/ViewContainer';

const Container = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <Head/>
                    <ContentsContainer/>
            </Route>
            <Route path="/:cid" exact>
                <Head/>
                <div className="viewBox">
                    <ViewContainer />
                </div>
            </Route>
            <Route path="*">
                <div>page not found</div>
            </Route>
        </Switch>
    );
};
export default Container;