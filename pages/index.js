import React, { Component } from 'react'
import Head from 'next/head'

class App extends Component {

  constructor () {
    super()
    this.state = {
      showDiv: false
    }
  }

  onLinkClick () {
    this.setState({
      showDiv: !this.state.showDiv
    })
  }

  render () {
    return (
      <div>
        <Head>
          <title>Next.js with styled-jsx and IE10</title>
          <script src='https://cdn.polyfill.io/v2/polyfill.min.js' />
        </Head>
        <a href='#' onClick={(e) => { this.onLinkClick() }}>Click me!</a>
        { this.state.showDiv &&
          <SubComponent />
        }
      </div>
    )
  }
}

class SubComponent extends Component {
  render () {
    return (
      <div>
        <div className='subcomponent'>
          This and that
        </div>
        <style jsx>{`
          .subcomponent {
            background-color: black;
            color: white;
          }  
        `}</style>
      </div>
    )
  }
}

export default App
