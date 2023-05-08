import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import TreeIndex from './pages/TreeIndex'
import TreeShow from './pages/TreeShow'
import TreeNew from './pages/TreeNew'
import TreeEdit from './pages/TreeEdit'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'

import { useEffect, useState } from 'react'
import { Container, Spinner } from 'reactstrap'

const App = () => {
  const [trees, setTrees] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    readTree()
  }, [])

  const readTree = () => {
    fetch('http://localhost:3000/trees')
      .then(response => response.json())
      .then(payload => {
        setTrees(payload)
        setLoading(false)
      })
      .catch(error => console.log("Tree read errors", error))
  }

  const createTree = (createdTree) => {
    fetch('http://localhost:3000/trees', {
      body: JSON.stringify(createdTree),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then(response => response.json())
      .then(() => readTree())
      .catch(error => console.log("Tree read errors", error))
  }

  const updateTree = (selectedTree) => {
    fetch(`http://localhost:3000/trees/${selectedTree.id}`, {
      body: JSON.stringify(selectedTree),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
      .then(response => response.json())
      .then(() => readTree())
      .catch(error => console.log("Tree read errors", error))
  }

  const deleteTree = (id) => {
    fetch(`http://localhost:3000/trees/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then(response => response.json())
      .then(() => readTree())
      .catch(error => console.log("Tree read errors", error))
  }

  if (loading || trees.length === 0) {
    return (
      <Spinner>
        Loading...
      </Spinner>
    )
  }
  return (
    <>
      <Header />
      <Container fluid='sm' tag='main' style={{ flexGrow: 1 }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/treeindex' element={<TreeIndex trees={trees} />} />
          <Route path='/treeshow/:id' element={<TreeShow trees={trees} />} />
          <Route
            path='/treenew'
            element={<TreeNew createTree={createTree} />}
          />
          <Route
            path='/treeedit/:id'
            element={<TreeEdit trees={trees} updateTree={updateTree} deleteTree={deleteTree} />}
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
    </>
  )
}

export default App
