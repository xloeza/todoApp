"use strict";

var Todo = function Todo(_ref) {
    var todo = _ref.todo,
        remove = _ref.remove;

    // Each Todo
    return React.createElement(
        "a",
        { href: "#", className: "list-group-item", onClick: function onClick() {
                remove(todo.key);
            } },
        todo.text
    );
};

var TodoList = function TodoList(_ref2) {
    var todos = _ref2.todos,
        remove = _ref2.remove;

    var todoNode = todos.map(function (todo) {
        return React.createElement(Todo, { todo: todo, key: todo.key, remove: remove });
    });
    return React.createElement(
        "div",
        { className: "list-group", style: { marginTop: '30px' } },
        todoNode
    );
};
