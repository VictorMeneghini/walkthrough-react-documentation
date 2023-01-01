import {render, screen, fireEvent} from "@testing-library/react"
import ComponentUnderTest from "./ComponentUnderTest"

import '@testing-library/jest-dom'

const setup = () => render(<ComponentUnderTest></ComponentUnderTest>)

describe("App component", () => {
  it("Should render list item", () => {
    setup()
    expect(screen.getByText("Victor")).toBeInTheDocument()
  })

  it("should be able to add new item to the list", async () => {
    setup()
    const addButton = screen.getByRole("button", {
      name: /Add/i
    })

    fireEvent.click(addButton)

    expect(await screen.findByText("novo item")).toBeInTheDocument()
  })
})