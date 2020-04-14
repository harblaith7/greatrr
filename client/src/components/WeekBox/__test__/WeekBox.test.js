import React from "react"
import {render, cleanup, fireEvent} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import WeekBox from "../WeekBox"



afterEach(cleanup)


test("Tests if div contains correct week abbreviation", () => {  

    const wrapper = render(
        <WeekBox
            weekAbbreviation = "M"
            weekId = {0}
            weekStatus = {[false, false, false, false, false, false, false]}
        />
    )

    let weekBox = wrapper.getByTestId("week-box")

    expect(weekBox.textContent).toBe("M")
})


test("Tests if week contains active className", () => {

    const wrapper = render(
        <WeekBox
            weekAbbreviation = "M"
            weekId = {0}
            weekStatus = {[false, false, false, false, false, false, false]}
        />
    )

    let weekBox = wrapper.getByTestId("week-box")

    expect(weekBox.className).toBe("WeekBox ")
})

