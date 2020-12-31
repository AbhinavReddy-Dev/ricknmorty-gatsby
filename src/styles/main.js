import { Link } from 'gatsby'
import styled from 'styled-components'

export const Container = styled.div`
  ${tw`bg-green-dark px-32 py-8`};
`
export const Title = styled.h1`
  ${tw`text-white m-0`};
`
export const StyledLink = styled(Link)`
  ${tw`no-underline text-inherit`};
`
