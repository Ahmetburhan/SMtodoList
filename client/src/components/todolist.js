import React, { Component } from "react";
import TodoItems from "./toDoItems";


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
    }

    addItem=(e)=> {
        e.preventDefault();
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

            this._inputElement.value = "";
        }

        console.log(this.state.items);
    }
    
    deleteItem=(key)=> {
        var filteredItems = this.state.items.filter((item)=> {
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems
        });
    }


    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input className="inputForm" ref={(a) => this._inputElement = a}
                            placeholder="What needs to be done?">
                        </input>
                        <button type="submit">add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items}
                    delete={this.deleteItem} />
                    <div className="itemsLeft">{this.state.items && this.state.items.length}   items left</div>
            </div>
        );
    }
}

export default TodoList;