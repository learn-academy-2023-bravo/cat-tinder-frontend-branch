import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import TreeShow from '../pages/TreeShow'
import mockTrees from '../mockTrees'

describe('<TreeShow />', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter initialEntries={['/treeshow/1']}>
        <Routes>
          <Route
            path='/treeshow/:id'
            element={<TreeShow trees={mockTrees} />}
          />
        </Routes>
      </MemoryRouter>
    )
    const treeName = screen.getByText(mockTrees[0].name, { exact: false })
    expect(treeName).toBeInTheDocument()
  })
})
