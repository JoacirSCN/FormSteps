import { Container, Description, Icon, Info, Title } from './styles'

interface Props {
  title: string
  description: string
  icon: string
  selected: boolean
  onClick: () => void
}

export function SelectOption({
  title,
  description,
  icon,
  selected,
  onClick,
}: Props) {
  return (
    <Container onClick={onClick} selected={selected}>
      <Info>
        <Icon>{icon}</Icon>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Info>
    </Container>
  )
}
