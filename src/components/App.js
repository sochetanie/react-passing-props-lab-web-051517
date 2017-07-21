import React from 'react';

import FruitBasket from './FruitBasket';
// import Filter from './Filter';
// import FilteredFruitList from './FilteredFruitList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      filters: [],
      fruit: [],
      currentFilter: null
    }
  }

  componentWillMount = () => {
    this.fetchFilters();
    this.fetchAllFruits()
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  fetchAllFruits = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  updateFilterCallback = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  render() {
    return (
      <div>
        <FruitBasket fruitList={this.state.fruit} filters={this.state.filters} currentFilter={this.state.currentFilter} handleFilterChange={this.updateFilterCallback}/>
      </div>
      )
    // render <FruitBasket fruitList={this.props.items} />
  }

}
