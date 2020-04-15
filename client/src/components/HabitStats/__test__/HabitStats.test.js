import React from "react";
import {createStore} from "redux"
import {Provider} from "react-redux"
import {render, fireEvent, cleanup} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import HabitStats from "../HabitStats"

afterEach(cleanup);

function reducer(state = [], action){
    switch(action.type){
        case "SAVE_SELECTED_HABIT":
            return action.payload;
        default:
            return state
    }
}


function renderWithRedux(
    component, 
    {initialState, store = createStore(reducer, initialState)} = {}
) {
    return {
        ...render(<Provider store={store}>{component}</Provider>)
    }
}


test("Renders with redux", () => {
    const {getByTestId} = renderWithRedux(<HabitStats/>)

    setTimeout(() => {
        expect(getByTestId("current-score").textContent).toBe("0")
    }, 2000)

})

test("Increments currentScore", () => {
    const {getByTestId} = renderWithRedux(<HabitStats/>)

    setTimeout(() => {
        console.log(getByTestId("T-1").textContent)
    }, 3000)
})