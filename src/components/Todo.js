import React from "react";
import "./Todo.css";
import {useState} from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faDeleteLeft} from "@fortawesome/free-solid-svg-icons"

const Todo = () => {
  const storageApps = JSON.parse(localStorage.getItem('apps'))
  
  const [app, setApp] = useState('')
  const [apps, setApps] = useState(storageApps ?? [])

  const addTask = () => {
    if (app) {
    setApps(prev => {

      const jsonApp = JSON.stringify([...prev, app])
      localStorage.setItem('apps', jsonApp)

      return [...prev, app]
    })
    setApp('')}
  }
  const clearApp = (deleteApp) => {
    const newApps = apps.filter((app) => app !== deleteApp)
    
    const jsonNewApps = JSON.stringify(newApps)
    localStorage.setItem('apps', jsonNewApps)

    setApps(newApps)
  }
  return (
    <div className="app" >
      <h1>Todo App</h1>
      <div className="add-app">
        <input
          placeholder="Add app"
          value={app} 
          onChange={e => setApp(e.target.value)}
        /><br/>
        <button onClick={addTask}>Add New Task</button>
      </div>
      <div className="todo-list">
        <h1>Todo List</h1>
        <ul>
          {apps.map((app, index) => (
            <div className="list">
              <li key={index}><p>{app}</p>
              <div className="icon-clear"><FontAwesomeIcon className="icon-clear" icon={faDeleteLeft} onClick={() => {clearApp(app)}}/></div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;