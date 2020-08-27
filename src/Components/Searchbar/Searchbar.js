import React from 'react';
import './Searchbar.css';

class Searchbar extends React.Component {
    constructor(props){
        super(props); //initial state
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match', //sortby should always be best_match
            price: ''
        };
        this.handleTermChange = this.handleTermChange.bind(this); //bind methods to be able to use this.
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleTermChange(event){ //term change handler
        let newTerm = event.target.value;
        this.setState({term: newTerm});
    }

    handlePriceChange(event){ //price change handler
        let newPrice = event.target.value;
        this.setState({price: newPrice});
    }

    handleLocationChange(event){ //location change handler
        let newLocation = event.target.value;
        this.setState({location: newLocation});

    }

    handleSearch(event){ //new Search event handler
        this.props.searchYelp(this.state.term, this.state.location, this.state.price, this.state.sortBy); //calls prop
        event.preventDefault();
    }
    getSortByClass(sortByOption){ //unused method 
        if(this.state.sortBy === sortByOption){
            return 'active';
        } else {
            return '';
        }
    }

    render(){
        return(
            <div className="Searchbar">
                <div className="Logo">
                    <img className="logo-image" src="https://vignette.wikia.nocookie.net/southpark/images/1/16/City_wok_1.png/revision/latest/top-crop/width/360/height/360?cb=20181104211121" />
                    </div>
                <div className="Searchbar-fields">
                    <select name="cars" id="cars" placeholder="Enter number of $ signs" onChange={this.handlePriceChange}>
                        <option value="1">$</option>
                        <option value="2">$$</option>
                        <option value="3">$$$</option>
                        <option value="4">$$$$</option>
                        </select>
                     <input placeholder="Where?" onChange={this.handleLocationChange} />
                     <input placeholder="Specifics? (Optional)" onChange={this.handleTermChange} />
                </div>
                <div className="Searchbar-submit">
                    <a onClick={this.handleSearch}>Random Search!</a>
                </div>
            </div>
        );
    }
}

export default Searchbar;