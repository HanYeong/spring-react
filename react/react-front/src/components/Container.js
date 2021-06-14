import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Head from './Head';
import '../scss/index.scss';
import ContentsContainer from '../containers/ContentsContainer';

const Container = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <Head/>
                    <ContentsContainer/>
            </Route>
            <Route path="*">
                <div>page not found</div>
            </Route>
        </Switch>
    );
};
export default Container;