import React from 'react';
import './SearchBar.css';

const sortByOptions = {
	'Best Match': 'best_match',
	'Highest Rated': 'rating',
	'Most Reviewed': 'review_count'
};

export class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			term: '',
			location: '',
			sortBy: 'best_match'
		}
	}

	getSortByClass(sortByOption) {
		if(sortByOption === this.state.sortBy) {
			return 'active'
		}
		return "";
	}

	handleSortByChange(sortByOption) {
		this.setState({
			sortBy: sortByOption
		});
	}

	handleTermChange(event) {
		this.setState({
			
		});
	}

	handleLocationChange(event) {
		this.setState({
			
		});
	}

	renderSortByOptions() {
		return Object.keys(sortByOptions).map(function(sortByOption) {
			let sortByOptionValue = sortByOptions[sortByOption];
			return `<li className={getSortByClass(sortByOptionValue)} onclick={handleSortByChange.bind(this, sortByOptionValue)} key={sortByOptionValue}> sortByOptionValue </li>`;
		});
	}

	render() {
		return(
			<div className="SearchBar">
			  <div className="SearchBar-sort-options">
			    <ul>
			      {this.renderSortByOptions()}
			    </ul>
			  </div>
			  <div className="SearchBar-fields">
			    <input placeholder="Search Businesses" />
			    <input placeholder="Where?" />
			  </div>
			  <div className="SearchBar-submit">
			    <a>Let's Go</a>
			  </div>
			</div>

			)
	}
}
