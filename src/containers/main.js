import React from 'react'

import UserInput from 'src/components/UserInput'
import Scene from 'src/components/Scene'

export class Main extends React.Component {

  render() {
    return (
      <div className="main-container">
        <div className="navbar">
          <a href="#">unitalk</a>
        </div>
        <div className="app">
          <Scene />
          <UserInput />
        </div>
      </div>
    )
  }
}

export default Main