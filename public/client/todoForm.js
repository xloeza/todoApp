"use strict";

var TodoForm = function TodoForm(_ref) {
  var addTodo = _ref.addTodo;

  var input = void 0;

  return React.createElement(
    "form",
    { onSubmit: function onSubmit(e) {
        e.preventDefault();
        addTodo(input.value);
        input.value = '';
      } },
    React.createElement("input", { className: "form-control col-md-12", ref: function ref(node) {
        input = node;
      } }),
    React.createElement("br", null)
  );
};
