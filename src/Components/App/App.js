import React from 'react';
import BusinessList from '../BusinessList/BusinessList';
import Searchbar from '../Searchbar/Searchbar';
import './App.css';
import Yelp from '../../util/Yelp';
import Randomizer from '../../util/Randomizer';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      businesses: []
    }
    this.searchYelp = this.searchYelp.bind(this);

  }
  searchYelp(term, location, price, sortBy) {
    Yelp.search(term, location, price, sortBy).then(businesses => { //api fetch method from yelp
      let tempBusinesses = Randomizer.randomize(businesses); //helper method imported from util
      this.setState({businesses: tempBusinesses});
    });
  }
    render(){
      return(
        <div className="App">
          <h1>Indecisive Eater</h1>
          <Searchbar searchYelp={this.searchYelp} />
          <BusinessList businesses={this.state.businesses} />
        </div>
      )
    }
}

export default App;