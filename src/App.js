import React, { Component } from 'react'
import './App.css';


export default class App extends Component {
  state = {
    userInput: "",
    tasks: [],

  }
  onChangeHandler = (event) => {
    this.setState({
      userInput: event.target.value

    })
  }

  removeToDo = (index) => {
    console.log("delete is working")
    // index - this parameter is the index which start modifying the array (with origin at 0).
    // 1 - The number of elements to be removed from the starting index.
    this.state.tasks.splice(index, 1)
    this.setState({
      tasks: this.state.tasks

    })

  }

  addToDo = () => {
    console.log("Add Button is working")
    this.setState({
      tasks: [...this.state.tasks, this.state.userInput]
    })
  }
  
  clear = () => {
    console.log("Clear button is working")
    this.setState({
      userInput: ""
    })
  }




  render() {

    const allTasks = this.state.tasks.map((task, index) => {
      // return <h1>{task}</h1>
      return <li key={index}>
                  {task}
                  <button className="listButton" onClick={() => this.removeToDo(index)}>x</button>
               </li>
    })

    return (

      <div className="wholeBody" >
      <div className="date">
      <h1>{(new Date().getDate())}.</h1>
      <h1>{(new Date().getMonth() + 1)}.</h1>
      <h1>{(new Date().getFullYear())}</h1>
      </div>
        <input className="input" type="text" name="searchbar" placeholder="ToDo" value={this.state.userInput} onChange={this.onChangeHandler} />

        <div className="twoButtons">
        <button className="buttonAdd" onClick={this.addToDo} >Add Task</button>
        <button className="buttonClear" onClick={this.clear}>Clear</button>
        </div>

        <div className="displayTask">
        {allTasks}
        </div>
      </div>
    )
  }
}

