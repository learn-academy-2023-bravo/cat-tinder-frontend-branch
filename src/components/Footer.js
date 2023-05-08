import { Container } from 'reactstrap'

const Footer = () => {
  return (
    <Container tag='footer' fluid='sm'>
      <p className='footer'>
        Created by{' '}
        <a href='https://raymondkneipp.com' target='_blank'>
          Raymond Kneipp
        </a>{' '}
        and{' '}
        <a href='https://sam-saenz.github.io/' target='_blank'>
          Sam Saenz
        </a>
      </p>
    </Container>
  )
}

export default Footer
