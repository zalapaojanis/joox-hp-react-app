import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import CTRL from 'react-nc';

import Home from '../pages/Home/Home';

import { Layout } from 'antd';
import classnames from 'classnames';

const { CONSTANT } = CTRL;

const getListDeployedFeatures = () => [
    {
        isNeeded: true,
        title: '',
        path: '/',
        isExact: true,
        icon: 'home',
        component: Home
    },
];

const getDefaultRedirectPage = routers => {
    return (routers || []).filter(
        r =>
            !r.path.includes(':') &&
            !r.path.includes('-create') &&
            !r.path.includes('-edit')
    );
};

const Routes = () => {
    let { collapsed } = CTRL.state;
    const activedRouters = getListDeployedFeatures().filter(f => f.isNeeded);
    return (
        <Router>
            <Layout
                id="ContentContainer"
                className={classnames(
                    'content-section',
                    collapsed && 'small',
                    'Routes'
                )}
                style={{ background: '#222222' }}
            >
                {(activedRouters !== []) ? (
                    <Switch>
                        {activedRouters.map(f => (
                            <Route
                                key={f.path}
                                exact={f.isExact}
                                path={f.path}
                                component={f.component}
                            />
                        ))}
                        <Redirect
                            to={
                                Array.isArray(getDefaultRedirectPage(activedRouters)) &&
                                    getDefaultRedirectPage(activedRouters).length > 0
                                    ? getDefaultRedirectPage(activedRouters)[0].path
                                    : CONSTANT.DEFAULT_ROUTE
                            }
                        />
                    </Switch>
                ) : (
                    <Switch>
                        <Route exact path={CONSTANT.DEFAULT_ROUTE} />
                        <Redirect to={CONSTANT.DEFAULT_ROUTE} />
                    </Switch>
                )}
            </Layout>
        </Router>
    );
}

export default Routes;
