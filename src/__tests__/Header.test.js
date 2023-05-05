import { render, screen } from '@testing-library/react'
import Header from '../components/Header'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'

describe('<Header />', () => {
  it('should render brand name', () => {

    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

    const brand = screen.getByText(/branch/i)
    expect(brand).toBeInTheDocument()
  })

  it('should contain clickable links', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

    userEvent.click(screen.getByText('All Trees'))
    expect(screen.getByText('All Trees')).toBeInTheDocument()
  })
})
