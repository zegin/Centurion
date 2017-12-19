import React from 'react'
import cookie from 'react-cookies'
import glamorous from 'glamorous'
import PropTypes from 'prop-types'

import {withTheme} from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Table, {TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table'

import DossierDrawer from './dossierDrawer'

const TableRowHover = glamorous(TableRow)(
  {cursor: 'pointer'},
  ({theme}) => ({':hover': {
      backgroundColor: theme.palette.primary['500'],
      color: 'white'
    }})
)

const CustomPaper = glamorous(Paper)(
  ({
    theme, padding
  }) => ({
    marginTop: theme.spacing.unit * 3,
    padding: padding ? theme.spacing.unit * 3 : ''
  })
)

class CaseTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {drawer: false}
  }
  handleDossierOpen(dossier){
    console.log(dossier)
    this.setState({
      drawer: true,
      dossier: dossier,
    })
  }
  handleDossierClose = () => {
    this.setState({drawer: false})
  }
  render() {
      if(cookie.load('user')){
        var monthArr = cookie.load('user').dossiers[this.props.month]
        if(monthArr.length){
          return(
            <div>
              <CustomPaper theme={this.props.theme} elevation={2}>
                <Table>
                  { !this.state.dossier &&
                    <TableHead>
                      <TableRow>
                        <TableCell>Dossier</TableCell>
                        <TableCell>Nom</TableCell>
                        <TableCell>Traité</TableCell>
                      </TableRow>
                    </TableHead>
                  }
                  <TableBody>
                    {monthArr
                      .filter(n=>{
                        if(this.state.dossier){
                          return n.dossier == this.state.dossier.dossier
                        }
                        else{return true}
                      }).sort(n=>n.status === '1').map((n, i) => {
                      return (
                        <TableRowHover theme={this.props.theme} key={i} onClick={()=>this.handleDossierOpen(n)}>
                          <TableCell>{n.dossier}</TableCell>
                          <TableCell>{n.name}</TableCell>
                          <TableCell>{n.status === '1' ? 'Oui' : 'Non'}</TableCell>
                        </TableRowHover>
                      )
                    })}
                  </TableBody>
                </Table>
              </CustomPaper>
              {this.state.drawer && <DossierDrawer dossier={this.state.dossier} close={this.handleDossierClose.bind(this)}/>}
            </div>
          )
        }
        else{
          return(
            <CustomPaper theme={this.props.theme} padding={1} elevation={2}> Rien ce mois ci !</CustomPaper>
          )
        }
      }
      else{
        return(
          <div></div>
        )
      }
  }
}

CaseTable.propTypes = {
  month: PropTypes.number,
  theme: PropTypes.object
}

export default withTheme()(CaseTable)
