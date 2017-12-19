import React, {Component} from 'react'
import {render} from 'react-dom'

import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'
import pink from 'material-ui/colors/pink'

import Main from './templates/main'

const theme = createMuiTheme({palette: {primary: pink}})

export default class Hello extends Component {
  render() {
    return (
    <MuiThemeProvider theme={theme}>
      <Main />
    </MuiThemeProvider>
    )
  }
}

render(<Hello />, document.getElementById('app'));  // eslint-disable-line
