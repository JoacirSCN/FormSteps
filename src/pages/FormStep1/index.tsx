import { useNavigate } from 'react-router-dom'
import { Container } from './styles'
import { FormActions, useForm } from '../../contexts/FormContext'
import { ChangeEvent, useEffect } from 'react'

export function FormStep1() {
  const navigate = useNavigate()
  const { state, dispatch } = useForm()

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1,
    })
  }, [])

  function handleNextStep() {
    if (state.name !== '') {
      navigate('/step2')
    } else {
      alert('Preencha os dados.')
    }
  }

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value,
    })
  }

  return (
    <Container>
      <p>Passo 1 de 3</p>
      <h1>Vamos começar com seu nome</h1>
      <p>Preencha o campo abaixo com seu nome completo</p>

      <hr />

      <label>
        Seu nome completo
        <input
          type="text"
          autoFocus
          value={state.name}
          onChange={handleNameChange}
        />
      </label>

      <button onClick={handleNextStep}>Próximo</button>
    </Container>
  )
}
