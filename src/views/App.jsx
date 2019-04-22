import React, { Component } from 'react'
import Loadable from 'react-loadable'
import { Spin } from 'antd'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import logo from '@/assets/logo.svg'
import './App.styl'

const lazyLoad = loader =>
  Loadable({
    loader,
    loading: () => <Spin size='large' delay={200} />
  })

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <div className='App-links'>
              <Link className='App-link' to='/'>
                Home
              </Link>
              <Link className='App-link' to='/about'>
                About
              </Link>
            </div>
            <Switch>
              <Route
                path='/'
                exact
                component={lazyLoad(() => import('@/views/Home'))}
              />
              <Route
                path='/about'
                component={lazyLoad(() => import('@/views/About'))}
              />
            </Switch>
          </header>
        </div>
      </Router>
    )
  }
}

export default App
