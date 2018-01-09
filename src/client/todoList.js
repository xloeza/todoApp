const Todo = ({todo, remove}) => {
    // Each Todo
    return (<a href="#" className="list-group-item" onClick={() => {remove(todo.key)}}>{todo.text}</a>);
}

const TodoList = ({todos, remove}) => {
    const todoNode = todos.map((todo) => {
      return (<Todo todo={todo} key={todo.key} remove={remove}/>)
    });
    return (<div className="list-group" style={{marginTop:'30px'}}>{todoNode}</div>);
  }
  