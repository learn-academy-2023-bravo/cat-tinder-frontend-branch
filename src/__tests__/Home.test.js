import { render, screen } from "@testing-library/react"
import Home from "../pages/Home"

describe('<Home />', () => {
  it('should render', () => {
    render(<Home />)

    const text = screen.getByText(/homepage/i)

    expect(text).toBeInTheDocument()
  })
})
