import React, { Component } from "react";
import FlipMove from "react-flip-move";


class TodoItems extends Component {
    constructor(props) {
            super(props);

            this.createTasks = this.createTasks.bind(this);
      }
    createTasks=(item)=> {
        return <li onClick={() => this.delete(item.key)}
            key={item.key}> {item.text} <i class="fas fa-minus-circle"></i></li>
    }
    delete=(key)=> {
        this.props.delete(key);
    }

    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        return (
            <FlipMove duration={250} easing="ease-out">

            <ul className="theList">
                {listItems}
            </ul>
            </FlipMove>
        );
    }
};

export default TodoItems;