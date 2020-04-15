import React from "react"
import {render, cleanup, fireEvent} from "@testing-library/react"
 
import WeekBox from "../WeekBox"



afterEach(cleanup)


test("Tests if div contains correct week abbreviation", () => {  

    const wrapper = render(
        <WeekBox
            weekAbbreviation = "M"
            weekId = {0}
            weekStatus = {[false, false, false, false, false, false, false]}
            testId={'M-0'}
        />
    )

    let weekBox = wrapper.getByTestId("M-0")

    setTimeout(() => {
        expect(weekBox.textContent).toBe("M")
    }, 2000)
})

test("Renders", () => {
    const {asFragment} = render(
        <WeekBox
            weekAbbreviation = "M"
            weekId = {0}
            weekStatus = {[false, false, false, false, false, false, false]}
            testId={'M-0'}
        />
    )

    expect(asFragment()).toMatchSnapshot()
})

/*
test("Added active class", () => {

    const {getByTestId} = render(
        <WeekBox
            weekAbbreviation = "M"
            weekId = {0}
            weekStatus = {[false, false, false, false, false, false, false]}
        />
    )

    fireEvent.click(getByTestId("week-box"))
})
*/
