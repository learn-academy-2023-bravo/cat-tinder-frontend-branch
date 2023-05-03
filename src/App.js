import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import TreeIndex from './pages/TreeIndex';
import TreeShow from './pages/TreeShow';
import TreeNew from './pages/TreeNew';
import TreeEdit from './pages/TreeEdit';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

import mockTrees from "./mockTrees"
import { useState } from 'react';


function App() {

  const[trees, setTrees] = useState(mockTrees)

  console.log(trees);

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/treeindex" element={<TreeIndex trees={trees}/>} />
      <Route path="/treeshow/:id" element={<TreeShow trees={trees}/>} />
      <Route path="/treenew" element={<TreeNew />} />
      <Route path="/treeedit" element={<TreeEdit />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
