import React from 'react';


export function MultiChoice () {

    return (
        <div class="form-container">
            <form id="question-form" name="question-form">
                <div class="response-container">
                    <div class="radio-container">
                        <input type="radio" id="a" name="response" htmlFor="question-form" value="A"></input>
                        <label>A</label>
                    </div>
                    <div class="radio-container">
                        <input type="radio" id="b" name="response" htmlFor="question-form" value="B"></input>
                        <label>B</label>
                    </div>
                    <div class="radio-container">
                        <input type="radio" id="c" name="response" htmlFor="question-form" value="C"></input>
                        <label>C</label>
                    </div>
                    <div class="radio-container">
                        <input type="radio" id="d" name="response" htmlFor="question-form" value="D"></input>
                        <label>D</label>
                    </div>
                </div>
                <input type="submit" value="submit"></input>
            </form>
        </div>
    )
}