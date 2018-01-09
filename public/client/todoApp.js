"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Title = function Title(_ref) {
    var todoCount = _ref.todoCount;

    return React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                "to-do (",
                todoCount,
                ")"
            )
        )
    );
};
var todo = function todo(key, text) {
    return { key: key, text: text };
};

var ToDoApp = function (_React$Component) {
    _inherits(ToDoApp, _React$Component);

    function ToDoApp(props) {
        _classCallCheck(this, ToDoApp);

        var _this = _possibleConstructorReturn(this, (ToDoApp.__proto__ || Object.getPrototypeOf(ToDoApp)).call(this, props));

        _this.state = { items: [], lastId: 0 };
        _this.addTodo = _this.addTodo.bind(_this);
        _this.handleRemove = _this.handleRemove.bind(_this);
        return _this;
    }

    _createClass(ToDoApp, [{
        key: "addTodo",
        value: function addTodo(val) {
            this.setState({ lastId: ++this.state.lastId });
            this.state.items.push(todo(this.state.lastId, val));
            this.setState({ items: this.state.items });
        }
    }, {
        key: "handleRemove",
        value: function handleRemove(key) {
            var remainder = this.state.items.filter(function (todo) {
                if (todo.key !== key) return todo;
            });
            this.setState({ items: remainder });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Title, { todoCount: this.state.items.length }),
                React.createElement(TodoForm, { addTodo: this.addTodo }),
                React.createElement(TodoList, { todos: this.state.items, remove: this.handleRemove.bind(this) })
            );
        }
    }]);

    return ToDoApp;
}(React.Component);
