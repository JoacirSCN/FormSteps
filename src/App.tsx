import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { Router } from './Routes'
import { FormProvider } from './contexts/FormContext'

export function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <FormProvider>
          <Router />
        </FormProvider>
      </BrowserRouter>
    </>
  )
}
