import React, { Component } from 'react'
import { Input } from 'antd'

const Search = Input.Search

export default class Navbar extends Component {
	render() {
		return (
			<nav>
				<h1>LoL Statistics</h1>

				<Search
					placeholder="Search Summoners"
					onSearch={value => console.log(value)}
					style={{ width: 200 }}
					className="nav-search"
				/>
			</nav>
		)
	}
}