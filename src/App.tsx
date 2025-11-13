import { FC, useEffect, useMemo } from 'react'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { prefixer } from 'stylis'
import rtlPlugin from 'stylis-plugin-rtl'
import { CssBaseline, GlobalStyles, ThemeProvider, createTheme } from '@mui/material'
import LandingPage from './components/LandingPage'

const App: FC = () => {
  const rtlCache = useMemo(
    () =>
      createCache({
        key: 'mui-rtl',
        stylisPlugins: [prefixer, rtlPlugin],
        prepend: true,
      }),
    [],
  )

  const theme = useMemo(
    () =>
      createTheme({
        direction: 'rtl',
        typography: {
          fontFamily: 'Vazir, "IRANSans", "Segoe UI", sans-serif',
        },
        palette: {
          mode: 'light',
          primary: {
            main: '#006d77',
            contrastText: '#ffffff',
          },
          secondary: {
            main: '#83c5be',
          },
          background: {
            default: '#f5f5f5',
            paper: '#ffffff',
          },
        },
        shape: {
          borderRadius: 16,
        },
      }),
    [],
  )

  useEffect(() => {
    document.documentElement.setAttribute('lang', 'fa')
    document.documentElement.setAttribute('dir', 'rtl')
  }, [])

  return (
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            body: {
              fontFamily: 'Vazir, "IRANSans", "Segoe UI", sans-serif',
              backgroundColor: '#f5f5f5',
              color: '#1f2933',
            },
            a: {
              textDecoration: 'none',
            },
          }}
        />
        <LandingPage />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default App

