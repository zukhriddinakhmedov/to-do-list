import ToDos from "./components/ToDos"
import { useState, useEffect } from "react"

const App = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const getTodos = async () => {
      const todosFromUrl = await fetchToDos()

    }

    getTodos()
  }, [])

  const fetchToDos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    console.log(data)
  }


  return (
    <div className="container">
      <ToDos todos={todos} />
    </div>
  );
}

export default App;
