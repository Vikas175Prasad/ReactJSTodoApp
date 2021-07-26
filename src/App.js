import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import { Addtodo } from './MyComponents/Addtodo';
import { About } from './MyComponents/About';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo
  if (localStorage.getItem("todos") === null) {
    initTodo = []
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  const [todos, setTodos] = useState(initTodo)

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo
    }))
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const addTodo = (title, description) => {
    let idnew = 0;
    if (todos.length === 0) {
      idnew = 1;
    } else {
      idnew = todos[todos.length - 1].id + 1;
    }

    const myTodo = {
      id: idnew,
      title: title,
      desc: description
    }
    setTodos([...todos, myTodo])
  }

  const searchTodo = (searchString) => {
    setTodos(todos.filter((e) => {
      return e.title.toLowerCase().includes(searchString)
    }))

  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (
    <div className="App">
      <Router>
        <Header title="My Todos" searchTodo={searchTodo} />
        <Switch>
          <Route exact path="/">
            <Addtodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} style={contentStyle} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

const contentStyle = {
  bottom:"30px"
}

export default App;
