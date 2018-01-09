const Title = ({todoCount}) => {
    return (
      <div>
         <div>
            <h1>to-do ({todoCount})</h1>
         </div>
      </div>
    );
}
let todo = (key, text) => ({key, text});

class ToDoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], lastId: 0 }; 
        this.addTodo = this.addTodo.bind(this);  
        this.handleRemove = this.handleRemove.bind(this);     
    }    

    addTodo(val){
        this.setState({lastId : ++this.state.lastId});
        this.state.items.push(todo(this.state.lastId, val));        
        this.setState({items: this.state.items});
    }

    handleRemove(key){
        const remainder = this.state.items.filter((todo) => {
            if(todo.key !== key) return todo;
          });
          this.setState({items: remainder});  
    }

    render() {
        return (
            <div>             
                <Title todoCount = {this.state.items.length}/>
                <TodoForm addTodo={this.addTodo}/>
                <TodoList todos={this.state.items} remove={this.handleRemove.bind(this)} />
            </div>
        );
    }
}