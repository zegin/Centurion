import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import 'moment/locale/fr'

import TextField from 'material-ui/TextField'
import {withTheme} from 'material-ui/styles'
import {FormControl, FormControlLabel, FormGroup} from 'material-ui/Form'
import Checkbox from 'material-ui/Checkbox'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'

import {CustomPaper} from '../atoms/customPaper'
import {FormLine} from '../atoms/formLine'

import 'react-dates/initialize'
import {DateRangePicker} from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
moment.locale('fr')



class DossierDrawer extends React.Component {
  constructor(props) {
    super(props)

    let focusedInput = null
    if (this.props.autoFocus) {
      focusedInput = new moment()
    } else if (this.props.autoFocusEndDate) {
      focusedInput = new moment()
    }
    console.log(this.props.dossier)
    console.log(this.props.dossier.date1)
    var date1 = new moment(this.props.dossier.date1)

    console.log(date1.format())

    this.state = {
      focusedInput,
      startDate: new moment(),
      endDate: new moment(),
      absAcc: this.props.dossier.jourAbsAcc ? true : false,
      hosp: this.props.dossier.jourHosp ? true : false,
      jourAbsAcc: this.props.dossier.jourAbsAcc,
      jourHosp: this.props.dossier.jourHosp,
      NbJoursAccComplet: 30.5,
      NbJoursAccPartiel: 0,
      NbJoursMaladie: 0,
      NbJoursConges: 0
    }

    this.onDatesChange = this.onDatesChange.bind(this)
    this.onFocusChange = this.onFocusChange.bind(this)
  }

  componentDidUpdate() {
    let {
      NbJoursAccComplet, NbJoursAccPartiel, NbJoursMaladie, NbJoursConges
    } = this.state
    if(NbJoursAccComplet !== 30.5 - parseInt(NbJoursAccPartiel) - parseInt(NbJoursMaladie) - parseInt(NbJoursConges)){
      this.setState((prevState)=>{
        return {NbJoursAccComplet: 30.5 - parseInt(NbJoursAccPartiel) - parseInt(NbJoursMaladie) - parseInt(NbJoursConges)}
      })
    }
  }

  onDatesChange({
    startDate, endDate
  }) {
    this.setState({
      startDate, endDate
    })
  }

  onFocusChange(focusedInput) {
    this.setState({focusedInput})
  }

  handleCheckBox = name => (event, checked) => {
    this.setState({[name]: checked})
  }

  handleTextField = name => event => {
    this.setState({[name]: event.target.value})
  }

  validation = () => {console.log(this.state)}

  render() {

    const style = {
      margin: {
        marginTop: this.props.theme.spacing.unit*2,
        marginBottom: this.props.theme.spacing.unit*2,
      },
      checkBox: {minWidth: '150px'},
      radioTextField: {
        marginTop: "-10px",
        marginLeft: this.props.theme.spacing.unit*2
      },
    }

    const {
     focusedInput, startDate, endDate
    } = this.state

    return(
      <CustomPaper theme={this.props.theme} elevation={2} padding={1}>
        <FormControl component="fieldset" fullWidth margin="normal">
          <Typography type="title">
            Formulaire
          </Typography>
          <FormGroup>
            <Typography type="Subheading" gutterBottom  style={style.margin}>
              Il y a t'il eu :
            </Typography>
            <FormLine theme={this.props.theme}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.absAcc}
                    onChange={this.handleCheckBox('absAcc')}
                    value="absAcc"
                  />
                }
                label="Absence"
                style={style.checkBox}
              />
              { this.state.absAcc &&
                <TextField
                  value={this.state.jourAbsAcc}
                  onChange={this.handleTextField('jourAbsAcc')}
                  label="Nombre de jours d'absence"
                  type="number"
                  style={style.radioTextField}
                />
              }
            </FormLine>
            <FormLine theme={this.props.theme}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.hosp}
                    onChange={this.handleCheckBox('hosp')}
                    value="hosp"
                  />
                }
                label="Hospitalisation"
                style={style.checkBox}
              />
              { this.state.hosp &&
                <TextField
                  label="Nombre de jours hospitalisé"
                  type="number"
                  style={style.radioTextField}
                  value={this.state.jourHosp}
                  onChange={this.handleTextField('jourHosp')}
                />
              }
            </FormLine>
            <Typography type="Subheading" gutterBottom  style={style.margin}>
              De quand à quand
            </Typography>
            <DateRangePicker
              onDatesChange={this.onDatesChange}
              onFocusChange={this.onFocusChange}
              focusedInput={focusedInput}
              startDate={startDate}
              endDate={endDate}
              startDateId={'startDateId'}
              endDateId={'endDateId'}
            />
          </FormGroup>

          <Button raised color="primary" onClick={()=>this.validation()}
            style={style.margin}>
            Valider
          </Button>

        </FormControl>
      </CustomPaper>
    )
  }
}

DossierDrawer.propTypes = {
  autoFocus: PropTypes.object,
  autoFocusEndDate: PropTypes.object,
  month: PropTypes.number,
  theme: PropTypes.object,
  dossier: PropTypes.object,
}

export default withTheme()(DossierDrawer)
