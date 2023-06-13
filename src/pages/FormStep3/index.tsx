import { useNavigate, Link } from 'react-router-dom'
import { Container } from './styles'
import { FormActions, useForm } from '../../contexts/FormContext'
import { ChangeEvent, useEffect } from 'react'

export function FormStep3() {
  const navigate = useNavigate()
  const { state, dispatch } = useForm()

  useEffect(() => {
    if (state.name === '') {
      navigate('/')
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3,
      })
    }
  }, [])

  function handleNextStep() {
    if (state.email !== '' && state.github !== '') {
      console.log(state)
    } else {
      alert('Preencha os dados')
    }
  }

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value,
    })
  }

  function handleGitHubChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value,
    })
  }

  return (
    <Container>
      <p>Passo 3 de 3</p>
      <h1>Legal {state.name}, onde te achar?</h1>
      <p>Preencha os campos para entrarmos em contato.</p>

      <hr />

      <label>
        Qual o seu email?
        <input type="email" value={state.email} onChange={handleEmailChange} />
      </label>

      <label>
        Qual o seu GitHub?
        <input type="url" value={state.github} onChange={handleGitHubChange} />
      </label>

      <div className="space">
        <Link to="/step2" className="backButton">
          Voltar
        </Link>
        <button onClick={handleNextStep}>Finalizar Cadastro</button>
      </div>
    </Container>
  )
}
