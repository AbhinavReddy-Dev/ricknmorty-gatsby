import React from 'react'
import { Container, StyledLink, Title } from '../styles/main'

const Header = ({ siteTitle }) => (
  <Container>
    <StyledLink to="/">
      <Title>{siteTitle}</Title>
    </StyledLink>
  </Container>
)

export default Header
