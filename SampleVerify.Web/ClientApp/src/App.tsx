import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Customers from './components/Customers';
import Transactions from './components/Transactions';

export default () => (
    <Layout>
        <Route exact path='/' component={Dashboard} />
        <Route path='/customers' component={Customers} />
        <Route path='/transactions' component={Transactions} />
    </Layout>
);
