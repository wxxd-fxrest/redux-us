import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../store";

const ToDo = ({ data, onBtnClick, id }) => {
    console.log(id)
    return (
        <li> 
            <Link to={`/${id}`}>
                {data.text} 
            </Link>
            <button onClick={onBtnClick}> X </button> 
        </li>
    )
};

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onBtnClick: () => dispatch(remove(ownProps.data.id))
    }
};

export default connect(null, mapDispatchToProps) (ToDo); 