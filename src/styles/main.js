import { Link } from 'gatsby'
import styled from 'styled-components'

export const Container = styled.div`
  ${tw` px-5 py-8 `};
  background-color: #0f3057;
  display: flex;
  justify-content: center;
`
export const Title = styled.h1`
  ${tw`text-white m-0`};
  font-weight: lighter;
`
export const StyledLink = styled(Link)`
  ${tw`no-underline text-inherit`};
`
