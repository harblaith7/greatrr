import React from "react"
import SideNav from "../SideNav"
import {render, cleanup} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"


afterEach(cleanup)

test("name abbreviation test", () => {
    setTimeout(() => {
        const {getByTestId} = render(<SideNav/>)
        expect(getByTestId("name-abbreviation").textContent).toBe("LH")
    }, 100)
})
