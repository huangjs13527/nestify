import React, { Component } from 'react';
import { withRouter } from 'next/router';
import { Layout } from 'antd';

import GlobalContext from '../contexts/GlobalContext';
import HomeBackground from '../components/HomeBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';

import 'antd/dist/antd.css';
import '../styles/reset.scss';

const { Content } = Layout;

@withRouter
export default class extends Component {
	
	render() {
		console.log(this.props.router);
		return (
			<GlobalContext.Provider value={{ ...this.state, ...this.props, ...this.props.router.query.data }}>
				<HomeBackground home />
				<Header />
				<Content>{this.props.children}</Content>
				<div className="hdz-blank-div"></div>
				<Footer />
			</GlobalContext.Provider>
		);
	}
}
