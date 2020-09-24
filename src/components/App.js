import React from 'react'
import {responsiveFontSizes, createMuiTheme, CssBaseline, ThemeProvider} from "@material-ui/core"
import SchedulePage from "./SchedulePage"
import '../css/main.css'

function App() {
  const theme = responsiveFontSizes(createMuiTheme({
    typography: {
      fontFamily: 'Montserrat, Roboto, sans-serif'
    },
  }))

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <SchedulePage />
        </CssBaseline>
      </ThemeProvider>
    </>
  )
}

export default App
