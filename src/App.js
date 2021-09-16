import React from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/searchbox/search-box.component';
import Scroll from './components/scroll/scroll.component';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      search: ""
    }
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState({ monsters: users });
      })
      .catch(error => console.log('error fetching monsters: ', error));
  };

  onInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  render() {
    const { monsters, search } = this.state;
    const filteredMonsters = monsters.filter(monsters => {
      return monsters.name.toLowerCase().includes(search.toLowerCase());
    });
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox onInputChange={this.onInputChange}/>
        <Scroll>
          <CardList monsters={filteredMonsters}/>
        </Scroll>
        
      </div>
    );
  }
  
};

export default App;
