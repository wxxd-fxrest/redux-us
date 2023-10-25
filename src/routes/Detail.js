import React from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { remove } from "../store";

const Detail = ({toDo, onBtnClick}) => {
    const navigate = useNavigate(); 
    const id = useParams().id;
    const todoID = parseInt(id)

    const onClick = () => {
        onBtnClick(todoID);
        navigate('/'); 
    }; 

    return (
        <>
            <p> {toDo.text} </p>
            <p> created at: {toDo?.id} </p>
            <button onClick={onClick}> X </button> 
        </>
    )
};

function mapStateToProps(state) {
    return {toDo: state.find(toDo => toDo.id === parseInt(state[0].id))};
};

function mapDispatchToProps(dispatch, ownProps) {
    console.log(ownProps)
    return {
        onBtnClick: (todoID) => dispatch(remove(todoID))
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (Detail); 