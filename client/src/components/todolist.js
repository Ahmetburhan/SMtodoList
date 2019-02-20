import React, { Component } from "react";
import TodoItems from "./todoitems";


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
        let filteredItems = this.state.items.filter((item)=> {
            return (item.key !== key);
        });


        this.setState({
            items: filteredItems
        });
        this._inputElement.value = "";
    }

    editItem = (key) => {
        var filteredItems = this.state.items.filter((item) => {
            return (item.key !== key);
        });
        let editedItems = this.state.items.filter((item) => {
            return (item.key === key);
        });
        console.log(editedItems[0]);
        this.setState({
            items: filteredItems
        });
        this._inputElement.value = editedItems[0].text;

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
                    delete={this.deleteItem} edit={this.editItem}/>
                    <div className="itemsLeft">{this.state.items && this.state.items.length}   items left</div>
            </div>
        );
    }
}

export default TodoList;