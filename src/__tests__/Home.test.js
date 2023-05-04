import { render, screen } from "@testing-library/react"
import Home from "../pages/Home"

describe('<Home />', () => {
  it('should render', () => {
    render(<Home />)

    const text = screen.getByText(/Find Your Forever Branch/i)

    expect(text).toBeInTheDocument()
  })
})
