import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import TreeIndex from './pages/TreeIndex'
import TreeShow from './pages/TreeShow'
import TreeNew from './pages/TreeNew'
import TreeEdit from './pages/TreeEdit'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'

import mockTrees from './mockTrees'
import { useState } from 'react'
import { Container } from 'reactstrap'

function App() {
  const [trees, setTrees] = useState(mockTrees)

  // console.log(trees)

  const createTree = (tree) => {
    // console.log(tree)
    setTrees([tree, ...trees])
  }

  const updateTree = (tree) => {
    console.log(tree)
    const treeToUpdate = trees.findIndex(t => tree.id === t.id)
    const mockArray = [...trees]
    mockArray[treeToUpdate] = tree
    setTrees(mockArray)
    console.log(treeToUpdate)
  }

  return (
    <>
      <Header />
      <Container fluid='sm' tag='main' style={{flexGrow: 1}}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/treeindex' element={<TreeIndex trees={trees} />} />
          <Route path='/treeshow/:id' element={<TreeShow trees={trees} />} />
          <Route path='/treenew' element={<TreeNew createTree={createTree}/>} />
          <Route path='/treeedit/:id' element={<TreeEdit trees={trees} updateTree={updateTree}/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
    </>
  )
}

export default App
