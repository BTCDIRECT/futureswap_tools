import React from "react"
import { Link } from "gatsby"

import { makeStyles } from '@material-ui/core/styles'
import { 
  AppBar,
  Toolbar,
  Typography,
  Button
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuLink: {
    textDecoration: 'none'
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = ({ siteTitle }) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Futureswap.tools
        </Typography>

        <Button edge="end" className={classes.menuButton} aria-label="menu">
          <a className={classes.menuLink} href="https://exchange.futureswap.com/?src=TODO-PUT-IN-REF-CODE" target="_blank" >
            Go trade on Futureswap
          </a>
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
