import React from 'react'
import cookie from 'react-cookies'
import PropTypes from 'prop-types'

import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog'

const User = {
  username: 'Gilgon',
  password: 'Gongil49',
  name: 'Briaud',
  antenne: 'Ouest',
  dossiers: {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [
        {
          name: 'ANGE Christelle',
          dossier: '020444',
          jourAbsAcc: '2.5',
          jourHosp: '2.5',
          date1: '2017-12-23',
          date2: '2017-12-31',
          accueillantFamilial: {
            cr: 'CR038622',
            nom: 'HUU',
            prenom: 'Thierry',
            adresse: '13 RUE YOLANDE GRIGNON 49124 ST BARTHELEMY D\'ANJOU',
            jourAccComplet: '23.5',
            jourAccPartiel: '',
            jourConges: '7',
            jourMaladie: '',
            date1: '23/12',
            date2: '31/12',
            kms: '94.4',
            cv: '7'
          },
          accueilRelais: {
            cr: '',
            nom: '',
            prenom: '',
            adresse: '',
            jourAccComplet: '',
            jourAccPartiel: '',
            dates1: '',
            dates2: '',
            kms: '116',
            cv: '7'
          },
          status: '1'
        }, {
          name: 'BENOIST Denis',
          dossier: '020394',
          accueillantFamilial: {
            cr: 'CR20394',
            nom: 'LE GOAZIOU',
            prenom: 'Jacqueline',
            adresse: '10 BIS RUE DUCHESSE 49320 BRISSAC-QUINCE',
            jourAccComplet: '2.5',
            jourAccPartiel: '1',
            jourConges: '',
            jourMaladie: '',
            dates1: '27/12',
            dates2: '29/12',
            kms: '',
            cv: ''
          },
          status: '0'
        }, {
          name: 'BENOIST Denis',
          dossier: '020394',
          accueillantFamilial: {
            cr: 'CR20394',
            nom: 'LE GOAZIOU',
            prenom: 'Jacqueline',
            adresse: '10 BIS RUE DUCHESSE 49320 BRISSAC-QUINCE',
            jourAccComplet: '2.5',
            jourAccPartiel: '1',
            jourConges: '',
            jourMaladie: '',
            dates1: '27/12',
            dates2: '29/12',
            kms: '',
            cv: ''
          },
          status: '0'
        }
    ],
    11: [
        {
          name: 'ANGE Christelle',
          dossier: '020444',
          jourAbsAcc: '2.5',
          jourHosp: '2.5',
          accueillantFamilial: {
            cr: 'CR038622',
            nom: 'HUU',
            prenom: 'Thierry',
            adresse: '13 RUE YOLANDE GRIGNON 49124 ST BARTHELEMY D\'ANJOU',
            jourAccComplet: '23.5',
            jourAccPartiel: '',
            jourConges: '7',
            jourMaladie: '',
            dates1: '23/12',
            dates2: '31/12',
            kms: '94.4',
            cv: '7'
          },
          accueilRelais: {
            cr: '',
            nom: '',
            prenom: '',
            adresse: '',
            jourAccComplet: '',
            jourAccPartiel: '',
            dates1: '',
            dates2: '',
            kms: '116',
            cv: '7'
          },
          status: '1'
        }, {
          name: 'FUSIO Fabio',
          dossier: '100171',
          jourAbsAcc: '',
          jourHosp: '',
          accueillantFamilial: {
            cr: 'CR34725',
            nom: 'LECLERC',
            prenom: 'Françoise',
            adresse: 'L\'ETAIREAU  49330 CHATEAUNEUF SUR SARTHE',
            jourAccComplet: '',
            jourAccPartiel: '',
            jourConges: '',
            jourMaladie: '',
            dates1: '',
            dates2: '',
            kms: '',
            cv: ''
          },
          accueilRelais: {
            cr: '',
            nom: '',
            prenom: '',
            adresse: '',
            jourAccComplet: '',
            jourAccPartiel: '',
            dates1: '',
            dates2: '',
            kms: '',
            cv: ''
          },
          status: '0'
        }
    ]
  }
}

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      login: '',
      password: '',
      errorLogin: false,
      errorPassword: false,
      labelLogin: 'Nom de compte',
      labelPassword: 'Mot de passe'
    }
  }

  componentWillMount() {
    this.handleOpen()
  }

  handleConnection = () => {
    this.setState({
      errorLogin: this.state.login ? this.state.login == User.username? false : true: true,
      labelLogin: this.state.login ? this.state.login == User.username? '' : 'Nom de compte incorrect': 'Veuillez rentrer votre nom de compte',
      errorPassword: this.state.password ? this.state.password == User.password ? false : true: true,
      labelPassword: this.state.password ? this.state.password == User.password ? '' : 'Mot de passe incorrect' : 'Veuillez remplir votre mot de passe'
    })
    if(this.state.login && this.state.password){
      if(this.state.login == User.username&& this.state.password == User.password){
        cookie.save('user', User)
        this.handleClose()
        this.props.connection()
      }
    }
  }

  handleLogin = (e) => {
    this.setState({login: e.target.value})
  }

  handlePassword = (e) => {
    this.setState({password: e.target.value})
  }


  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  render() {
    return(

      <div>
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>Connection</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Vous devez vous identifier pour rentrer dans l'application
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="login"
              label={this.state.labelLogin}
              type="text"
              value={this.state.login}
              onChange={this.handleLogin}
              error={this.state.errorLogin}
              fullWidth
            />
            <TextField
              margin="dense"
              id="password"
              label={this.state.labelPassword}
              type="text"
              value={this.state.password}
              onChange={this.handlePassword}
              error={this.state.errorPassword}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleConnection} color="primary">
              Valider
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

Login.propTypes = {connection: PropTypes.boolean}

export default Login
