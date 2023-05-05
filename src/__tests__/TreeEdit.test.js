import { render, screen } from '@testing-library/react'
import TreeEdit from '../pages/TreeEdit'
import mockTrees from '../mockTrees'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

describe('<TreeEdit />', () => {
  it('renders tree edit inputs', () => {
    render(
      <MemoryRouter initialEntries={['/treeedit/1']}>
        <Routes>
          <Route
            path='/treeedit/:id'
            element={<TreeEdit trees={mockTrees} />}
          />
        </Routes>
      </MemoryRouter>
    )

    const nameInput = screen.getByRole('textbox', {
      name: /name/i,
    })
    expect(nameInput).toBeInTheDocument()

    const ageInput = screen.getByRole('textbox', {
      name: /age/i,
    })
    expect(ageInput).toBeInTheDocument()

    const enjoysInput = screen.getByRole('textbox', {
      name: /enjoys/i,
    })
    expect(enjoysInput).toBeInTheDocument()

    const imageInput = screen.getByRole('textbox', {
      name: /image/i,
    })
    expect(imageInput).toBeInTheDocument()
  })
})
