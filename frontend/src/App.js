import React from "react";
import axios from "axios";
import "./App.scss";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import ProductList from "./components/ProductList";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      products: [],
    };
  }

  componentDidMount() {
    axios
      .get("/api/comments")
      .then((response) => {
        this.setState({
          todos: response.data.data,
        });
      })
      .catch((error) => {
        console.error("Error fetching comments: ", error);
      });
  
    axios
      .get("/api/products")
      .then((response) => {
        this.setState({
          products: response.data.data,
        });
      })
      .catch((error) => {
        console.error("Error fetching products: ", error);
      });
  }

  handleAddTodo = (value) => {
    axios
      .post("/api/comments", { text: value })
      .then(() => {
        this.setState({
          todos: [...this.state.todos, { text: value }],
        });
      })
      .catch((e) => console.log("Error : ", e));
  };

  render() {
    return (
      <div className="App container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-md-8 offset-md-2">
              <h1>Products publications</h1>
              <ProductList products = {this.state.products } />  
              <h1>Comentarios</h1>
              <div className="todo-app">
                <AddTodo handleAddTodo={this.handleAddTodo} />
                <TodoList todos={this.state.todos} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
