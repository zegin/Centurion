import React from 'react'
import PropTypes from 'prop-types'

import {withStyles} from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'

const styles = {
  root: {width: '100%'},
  flex: {flex: 1},
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}

function ButtonAppBar(props) {
  const {classes} = props
  return (
    <div className={classes.root}>
      <AppBar position="fixed" elevation={4}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" className={classes.flex}>
            Centurion
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

ButtonAppBar.propTypes = {classes: PropTypes.object.isRequired}

export default withStyles(styles)(ButtonAppBar)
