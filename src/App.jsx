import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { Dashboard } from './components/dashboard/Dashboard'
import { Pagenotfound } from './components/pagenotfound/Pagenotfound'
import { Contact } from './components/contact/Contact'
import { About } from './components/about/About'
import { Addbook } from './components/addbook/Addbook'
import { Booklist } from './components/booklist/Booklist'
import { Edit } from './components/edit/Edit'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
          <Header/>
              <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="about-us" element={<About/>}/>
                <Route path="contact-us" element={<Contact/>}/>
                 <Route path="add-book" element={<Addbook/>}/>
                 <Route path="book-list" element={<Booklist/>}/>
                  <Route path="edit/:id" element={<Edit/>}/>
                <Route path="*" element={<Pagenotfound/>}/>
              </Routes>
          <Footer/>
      </BrowserRouter>
     
    </>
  )
}

export default App
