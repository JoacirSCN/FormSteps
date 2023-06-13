// Context -> Caixa que guarda os dados
// Reducer -> Executa funções especificas
// Provider -> Ambiente de acesso aos dados que estão no Context
// Hook -> Para simplificar todo processo
import { ReactNode, createContext, useContext, useReducer } from 'react'

export enum FormActions {
  setCurrentStep,
  setName,
  setLevel,
  setEmail,
  setGithub,
}

interface State {
  currentStep: number
  name: string
  level: 0 | 1
  email: string
  github: string
}

interface Action {
  type: FormActions
  payload: any // Pode vir qualquer coisa
}

interface ContextType {
  state: State
  dispatch: (action: Action) => void
}

interface FormProviderProps {
  children: ReactNode
}

const initialData: State = {
  currentStep: 0,
  name: '',
  level: 0,
  email: '',
  github: '',
}

// Context -> Caixa que guarda os dados
const FormContext = createContext<ContextType | undefined>(undefined)

// Reducer -> Executa funções especificas
function formReducer(state: State, action: Action) {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return {
        ...state,
        currentStep: action.payload,
      }

    case FormActions.setName:
      return {
        ...state,
        name: action.payload,
      }

    case FormActions.setLevel:
      return {
        ...state,
        level: action.payload,
      }

    case FormActions.setEmail:
      return {
        ...state,
        email: action.payload,
      }

    case FormActions.setGithub:
      return {
        ...state,
        github: action.payload,
      }

    default:
      return state
  }
}

// Provider -> Ambiente de acesso aos dados que estão no Context
export function FormProvider({ children }: FormProviderProps) {
  const [state, dispatch] = useReducer(formReducer, initialData)
  const value = { state, dispatch }

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}

// Hook -> Para simplificar todo processo
export function useForm() {
  const context = useContext(FormContext)

  if (context === undefined) {
    throw new Error('UseForm precisa ser usado dentro do FormProvider')
  }

  return context
}
