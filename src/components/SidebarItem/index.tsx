import { Link } from 'react-router-dom'
import { Container, Description, IconArea, Info, Point, Title } from './styles'
import { ReactComponent as ProfileIcon } from '../../assets/profile.svg'
import { ReactComponent as BookIcon } from '../../assets/book.svg'
import { ReactComponent as MailIcon } from '../../assets/mail.svg'

interface Props {
  title: string
  description: string
  icon: string
  path: string
  active: boolean
}

export function SidebarItem({ title, description, icon, path, active }: Props) {
  return (
    <Container>
      <Link to={path}>
        <Info>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Info>
        <IconArea active={active}>
          {icon === 'profile' && (
            <ProfileIcon fill="white" width={24} height={24} />
          )}
          {icon === 'book' && <BookIcon fill="white" width={24} height={24} />}
          {icon === 'mail' && <MailIcon fill="white" width={24} height={24} />}
        </IconArea>
        <Point active={active}></Point>
      </Link>
    </Container>
  )
}
