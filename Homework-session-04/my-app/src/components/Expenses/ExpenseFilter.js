import React from 'react';
import "./ExpenseFilter.css";

const ExpenseFilter = props => {

    const dropdownChangeHandler = event => {
        // console.log(event.target.value);
        props.onChangeHandler(event.target.value);
    }

    return (
        <div className="expense-filter">
            <div className="expense-filter__controll">
                <label>Filter by year</label>
                <select onChange={dropdownChangeHandler} value={props.selected}>
                    <option value='all'>All</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter;