import React from 'react';
import { CardList } from './components/card-list/card-list.components';
import { SearchBox } from './components/search-box/search.components';
import './App.css';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };

    this.handlerChange = this.handlerChange.bind(this)
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  handlerChange  =
    e => {this.setState({
      searchField: e.target.value
    })
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          handlerChange={this.handlerChange}
        />
        <CardList monsters={filteredMonsters}>

        </CardList>
      </div>
    );
  }
}

export default App;
