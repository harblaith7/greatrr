import SubmitModalContent from "../SubmitModalContent"
import {render} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import React from 'react';




test("Testing modal after completion of form", () => {
    expect(true).toBeTruthy()

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

    expect(wrapper.getByTestId("long-term-goal").textContent).toBe("Build a multi million dollar business")
    expect(wrapper.getByTestId("three-month-goal").textContent).toBe("Create website for my business idea that sells used notebooks to customers")
    expect(wrapper.getByTestId("daily-habit").textContent).toBe("Code for one hour for a given day")
    expect(wrapper.getByTestId("habit-name").textContent).toBe("Create Business")
    expect(wrapper.getByTestId("habit-priority").textContent).toBe("3")
    expect(wrapper.getByTestId("habit-duration").textContent).toBe("4")
})

//longTermGoal, threeMonthGoal, dailyHabit, habitName, habitDuration, habitPriority


/*

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
    expect(getByTestId("long-term-goal")).textContent.toBe("Build a multi million dollar business")

    */