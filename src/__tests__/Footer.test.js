import { render, screen } from '@testing-library/react'
import Footer from '../components/Footer'

describe('<Footer />', () => {
  it('should display created by', () => {
    render(<Footer />)
    const footer = screen.getByText(/Created by Raymond Kneipp and Sam Saenz/i)
    expect(footer).toBeInTheDocument()
  })
})
