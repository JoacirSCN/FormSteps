import { Outlet } from 'react-router-dom'
import * as C from './styles'
import { Header } from '../../components/Header'
import { SidebarItem } from '../../components/SidebarItem'
import { useForm } from '../../contexts/FormContext'

export function DefaultLayout() {
  const { state } = useForm()
  return (
    <C.Container>
      <C.Area>
        <Header />
        <C.Steps>
          <C.Sidebar>
            <SidebarItem
              title="Pessoal"
              description="Se identifique"
              icon="profile"
              path="/"
              active={state.currentStep === 1}
            />
            <SidebarItem
              title="Profissional"
              description="Seu nível"
              icon="book"
              path="/step2"
              active={state.currentStep === 2}
            />
            <SidebarItem
              title="Contatos"
              description="Como te achar"
              icon="mail"
              path="/step3"
              active={state.currentStep === 3}
            />
          </C.Sidebar>
          <C.Page>
            <Outlet /> {/* step1, 2 and 3 */}
          </C.Page>
        </C.Steps>
      </C.Area>
    </C.Container>
  )
}
