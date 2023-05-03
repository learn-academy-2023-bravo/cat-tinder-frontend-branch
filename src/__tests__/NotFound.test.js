import { render, screen } from '@testing-library/react'
import NotFound from '../pages/NotFound'

describe('<NotFound />', () => {
  it('should render error message', () => {
    render(<NotFound />)
    const notFound = screen.getByText(/Page not found, you might be lost/i)
    expect(notFound).toBeInTheDocument()
  })

  it('should contain image', () => {
    render(<NotFound />)
    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('alt', 'lonely tree')
  })
})
