import React, { Component } from 'react';
import Layout from '../components/Layout';

const Index = (props) => (
    <Layout>
        <div>
            <h1>index.js</h1>
        </div>
    </Layout>
);

Index.getInitialProps = () =>{
    return {
        what: 'what'
    };
}

export default Index;
