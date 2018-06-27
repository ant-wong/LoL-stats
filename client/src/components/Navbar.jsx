import React, { Component } from 'react'
import { Input } from 'antd'

import Logo from '../img/league-logo.png'

const Search = Input.Search

export default class Navbar extends Component {
	render() {
		return (
			<nav>
				<header>
					<img src={Logo} alt="logo"/>
					<h1>LoL Statistics</h1>
				</header>

				<Search
					placeholder="Search Summoners"
					onSearch={value => console.log(value)}
					className="nav-search"
				/>
			</nav>
		)
	}
}