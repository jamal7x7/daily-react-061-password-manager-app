import React, { Component } from 'react'
import '../styles/App.css'

const Header = () => (
  <header className='App-header'>
    <h1 className='App-title'>Password Manager App</h1>
  </header>
)

const Main = (props) => (
  <div className=' main ' >

     
      
  </div>
)

const Menu = (props) => (
  <div className='side-bar'>
    <div className='menu-icones'>
      
    </div>
  </div>
)

class PasswordManagerApp  extends Component {
  
  state = {
    
 
  }
  


  componentDidMount() {


  }

  

  render () {
    return (
      <div 
      className='App-container'>

        <Menu 
          
        />
        <Main 
      
        />

      </div>
    )
  }
}

const App = (props) => (
  <div className='App'>
    <Header />
    <PasswordManagerApp />

  </div>
)

export default App

