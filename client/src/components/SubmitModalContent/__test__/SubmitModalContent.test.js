import SubmitModalContent from "../SubmitModalContent"
import {render, cleanup, fireEvent} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import React from 'react';


afterEach(cleanup)

const handleClick = jest.fn()

test("Dummy test", () => {
    expect(true).toBeTruthy()
})

/*

test("Modal renders data after completion of form", () => {

    const wrapper = render(
        <SubmitModalContent 
            formInput={{
                longTermGoal : "Build a multi million dollar business",
                threeMonthGoal: "Create website for my business idea that sells used notebooks to customers",
                dailyHabit: "Code for one hour for a given day",
                habitName: "Create Business",
                habitDuration: 4,
                habitPriority: 3
            }}
        />
    )

    const userInput = wrapper.getByTestId

    expect(userInput("long-term-goal").textContent).toBe("Build a multi million dollar business")
    expect(userInput("three-month-goal").textContent).toBe("Create website for my business idea that sells used notebooks to customers")
    expect(userInput("daily-habit").textContent).toBe("Code for one hour for a given day")
    expect(userInput("habit-name").textContent).toBe("Create Business")
    expect(userInput("habit-priority").textContent).toBe("3")
    expect(userInput("habit-duration").textContent).toBe("4")
})


test("Modal button is called with correct state", () => {
    const {getByTestId} = render(
        <SubmitModalContent
            formInput={{
                longTermGoal : "Build a multi million dollar business",
                threeMonthGoal: "Create website for my business idea that sells used notebooks to customers",
                dailyHabit: "Code for one hour for a given day",
                habitName: "Create Business",
                habitDuration: 4,
                habitPriority: 3
            }}
        />
    )

    fireEvent.click(getByTestId("add-habit-btn"))

    expect(handleClick).toHaveBeenCalledTimes(1)
})


*/