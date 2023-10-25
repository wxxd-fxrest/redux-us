import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { add } from "../store";

const Home = ({ toDos, addTodo }) => {
    const [text, setText] = useState('');

    return (
        <>
            <p> To Do </p>
            <form onSubmit={(e) => {
                e.preventDefault();
                addTodo(text);
                setText('');
            }}>
                <input type="text"
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value); 
                    }}
                />
                <button> Add </button>
            </form>
            <ul>
                {toDos.map((t, id) => (
                    <ToDo key={id} data={t} id={t.id}/>
                ))}
                {/* {toDos.map(toDo => <ToDo {...toDo} />)} */}
            </ul>
        </>
    )
};

function mapStateToProps(state) {
    return {toDos: state}
};

function mapDispatchToProps(dispatch) {
    return {
        addTodo: text => dispatch(add(text))
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (Home); 