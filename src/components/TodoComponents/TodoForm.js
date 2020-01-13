import React from 'react'


class TodoForm extends React.Component {
    // Constructor with state
    constructor() {
      super();
      this.state = {
        itemText: ''
      };
    }

    handleChanges = e => {
        console.log(e.target.value)
        this.setState({
            itemText: e.target.value    
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.itemText)
        console.log('hi')
        this.setState({
            itemText: ''
        })
        
    }

    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <input className='inputField'
              type="text"
              name="item"
              value={this.state.itemText}
              onChange={this.handleChanges}
            />
            <button className='addButton'>Add</button>
          </form>
        );
      }
    }


    export default TodoForm;