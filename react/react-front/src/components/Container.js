import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Head from './Head';
import '../scss/index.scss';
import Contents from './Contents';

const Container = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <Head/>
                    <Contents/>
            </Route>
            <Route path="*">
                <div>page not found</div>
            </Route>
        </Switch>
    );
};
export default Container;