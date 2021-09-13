import ToDos from "./components/ToDos"
import AddToDo from "./components/AddToDo"
import Header from "./components/Header"
import { useState, useEffect } from "react"

const App = () => {
  const [showAddTodo, setShowAddTodo] = useState(false)
  const [todos, setTodos] = useState([])


  useEffect(async () => {
    const getTodos = async () => {
      const todosFromUrl = await fetchToDos()
      setTodos(todosFromUrl)
    }

    await getTodos()
  }, [])

  //fetch the url
  const fetchToDos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    return data
  }
  const fetchToDo = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    const data = await response.json()
    return data
  }
  //Add todo

  const addTodo = async (todo) => {
    todo.userId = 6
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(todo)
    })
    const data = await response.json()
    console.log(response, 'Inside addTodo function')

    setTodos([...todos, data])
  }
  //DELETE TODO FUNCTION

  const deleteTodo = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'DELETE',
    })
    //TO CONTROL THE RESPONSE STATUS TO DECIDE IF WE WOULD LIKE TO CHANGE THE STATE OR NOT 
    response.status === 200
      ? setTodos(todos.filter((todo) => todo.id !== id))
      : alert('Ooops the task has not been deleted')
  }




  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTodo
          (!showAddTodo)}
        showAdd={showAddTodo}
      />

      <>
        {showAddTodo && <AddToDo onAdd={addTodo} />}
        {todos.length > 0 ? (
          <ToDos todos={todos}
            onDelete={deleteTodo} />) : ('NO TO DOS TO SHOW')}
      </>

    </div>
  );
}

export default App;
