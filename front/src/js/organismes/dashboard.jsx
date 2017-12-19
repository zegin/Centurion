import React from 'react'
import cookie from 'react-cookies'
import PropTypes from 'prop-types'

import {withStyles} from 'material-ui/styles'
import Tabs, {Tab} from 'material-ui/Tabs'
import AppBar from 'material-ui/AppBar'

import CaseTable from './caseTable'

const styles = theme => ({root: {
    flexGrow: 1,
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.paper,
  }})

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {month: new Date().getMonth()}
  }

  handleMonth = (event, month) => {
    this.setState({month: month})
  }

  handleChangeIndex = index => {
    this.setState({month: index})
  }

  render() {
    const {
      classes, theme
    } = this.props
    return(
      <div className={classes.root}>
        <AppBar position="static" color="default" elevation={3}>
          <Tabs
            value={this.state.month}
            onChange={this.handleMonth}
            indicatorColor="primary"
            textColor="primary"
            // centered
            scrollable
            elevation={24}
          >
            <Tab label="Janvier" />
            <Tab label="Fevrier" />
            <Tab label="Mars" />
            <Tab label="Avril" />
            <Tab label="Mai" />
            <Tab label="Juin" />
            <Tab label="Juillet" />
            <Tab label="Août" />
            <Tab label="Septembre" />
            <Tab label="Octobre" />
            <Tab label="Novembre" />
            <Tab label="Décembre" />
          </Tabs>
        </AppBar>
        {
          cookie.load('user') &&
          <CaseTable month={this.state.month} theme={theme}/>
        }

      </div>
    )
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default withStyles(styles, {withTheme: true})(Dashboard)
