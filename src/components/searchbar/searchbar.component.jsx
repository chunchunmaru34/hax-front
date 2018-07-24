import React from 'react';

import './searchbar.styles.css';


class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = { searchString: '' };
    }

    onChange = (e) => {
        const { value } = e.target;
        this.setState({ searchString: value });
    }

    render() {
        return (
            <div className='search-bar-container'>
                <input
                    className='search-bar' 
                    type='text' 
                    placeholder='Search (not working :))'
                    onChange={this.onChange}
                    value={this.state.searchString}
                />
            </div>
        )    
    }
}

export default SearchBar;