import React, { Component } from "react";
import FlipMove from "react-flip-move";


class TodoItems extends Component {
    constructor(props) {
            super(props);

            this.createTasks = this.createTasks.bind(this);
      }
    createTasks=(item)=> {
        return <li key={item.key}> <i onClick={() => this.delete(item.key)} className="far fa-circle"></i> <span className="liText">{item.text}</span> <i onClick={() => this.edit(item.key)} className="fas fa-edit"></i></li>
    }
    delete=(key)=> {
        this.props.delete(key);
    }

    edit = (key) => {
        this.props.edit(key);
    }
    

    render() {
        let todoEntries = this.props.entries;
        let listItems = todoEntries.map(this.createTasks);

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