import { createSignal, onMount  } from "solid-js";

function App() {

  const [todos, setTodos] = createSignal([]);
  let todoText;

  onMount(() => {
    const existingTodos = localStorage.getItem('todos');
    setTodos(existingTodos ? JSON.parse(existingTodos) : []);
  });

  function addTodo(event) {
    event.preventDefault();
    const next = [...todos(), todoText.value];
    setTodos(next);
    localStorage.setItem('todos', JSON.stringify(next));
  }

  return (
    <div>
      <ul>
        {todos().map(todo => (<li key={todo}>{todo}</li>))}  
      </ul>

      <form onSubmit={addTodo}>
        <input type="text" ref={todoText} />
        <input type="submit" value="Add Todo" />
      </form>
    </div>
  );
}

export default App;
