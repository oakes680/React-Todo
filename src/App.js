import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'

const list = [
 
]



class App extends React.Component {

  constructor() {
    super();
    this.state= {
      newList: list
    }
  };


  toggleItem = id => {
    // find the item we clicked on
    // toggle the purchased field
    // update state with the new grocery data
    const newListt = this.state.newList.map(item => {
      if (item.id === id) {
        return {
          ...item,
          done: !item.done
        };
      } else {
        return item;
      }
    });
    // update groceryList
    this.setState({
      newList: newListt
    });
  };




  addItem = itemName => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      done: false
    };
    this.setState({
      newList: [...this.state.newList, newItem]
    });
  };

  clearItems = () => {
    const freshList = this.state.newList.filter(item => item.done !== true)
    console.log(freshList)
    console.log('dog', this.newList)
    this.setState ({
      newList: freshList
    })
  }


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='App'>
        <div className='header'>
        <h2 >Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem}/>
          <TodoList
            items={this.state.newList}
            toggleItem={this.toggleItem}
            clearItems={this.clearItems}
          />
          </div>
      </div>
    );
  }
}

export default App;

//asdasd
