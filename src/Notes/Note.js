import React from "react"
import Header from "./Components/Header"
import Content from "./Components/Content"
import './NoteStyle.css'

function UI() {
  return (
    <div className='container-fluid'>
        <Header />
        <Content />

    </div>
  )
}

export default UI