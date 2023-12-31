import { useNavigate, Link } from 'react-router-dom'
import { Container } from './styles'
import { FormActions, useForm } from '../../contexts/FormContext'
import { useEffect } from 'react'
import { SelectOption } from '../../components/SelectOption'

export function FormStep2() {
  const navigate = useNavigate()
  const { state, dispatch } = useForm()

  useEffect(() => {
    if (state.name === '') {
      navigate('/')
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2,
      })
    }
  }, [])

  function handleNextStep() {
    if (state.name !== '') {
      navigate('/step3')
    } else {
      alert('Preencha os dados.')
    }
  }

  function setLevel(level: number) {
    dispatch({
      type: FormActions.setLevel,
      payload: level,
    })
  }

  return (
    <Container>
      <p>Passo 2 de 3</p>
      <h1>{state.name}, o que melhor descreve você?</h1>
      <p>
        Escolha a opção que melhor condiz com seu estado atual,
        profissionalmente.
      </p>

      <hr />

      <SelectOption
        title="Sou iniciante"
        description="Comecei a programar há menos de 2 anos"
        icon="👶"
        selected={state.level === 0}
        onClick={() => setLevel(0)}
      />

      <SelectOption
        title="Sou programador"
        description="Já programo há 2 anos ou mais"
        icon="😎"
        selected={state.level === 1}
        onClick={() => setLevel(1)}
      />

      <div className="space">
        <Link to="/" className="backButton">
          Voltar
        </Link>
        <button onClick={handleNextStep}>Próximo</button>
      </div>
    </Container>
  )
}
