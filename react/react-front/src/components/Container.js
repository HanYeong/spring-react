import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Head from './Head';

const Container = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <Head>
                    <div>hiasdfsa</div>
                </Head>
            </Route>
            <Route path="*">
                <div>page not found</div>
            </Route>
        </Switch>
    );
};
export default Container;