import glamorous from 'glamorous'
import Paper from 'material-ui/Paper'

export const CustomPaper = glamorous(Paper)(
  ({
    theme, padding
  }) => ({
    marginTop: theme.spacing.unit * 3,
    padding: padding ? theme.spacing.unit * 3 : ''
  })
)
