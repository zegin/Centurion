import React from 'react'
import cookie from 'react-cookies'
import PropTypes from 'prop-types'

import {withStyles} from 'material-ui/styles'
import {withTheme} from 'material-ui/styles'

import ButtonAppBar from '../test/appBar'
import Login from '../organismes/login'
import Dashboard from '../organismes/dashboard'

const styles = {wrapper: {marginTop: '64px'}}

@withStyles(styles)
class Main extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {connected: false}
  }
  connection(){
    if(!this.state.connected){
      this.setState({connected: true})
    }
  }
  render() {
    return(
      <div>
        <ButtonAppBar/>
        <div className={this.props.classes.wrapper}>
          {!cookie.load('user') && <Login connection={this.connection.bind(this)}/>}
          <Dashboard/>
        </div>
      </div>
    )
  }
}

Main.propTypes = {classes: PropTypes.object}

export default withTheme()(Main)
