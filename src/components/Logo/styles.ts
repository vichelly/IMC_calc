import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
  max-width: 900px;
  margin: 40px auto;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  h1{
    color: ${theme.colors.tone1};
    background-color: ${theme.colors.tone5};
    font-size: ${theme.font.size.title};
    width: fit-content;
    padding: 2px 8px;
    border-radius: 4px;
  }
  p{
    margin-top: 9px;
    padding: 2px 8px;
    color: ${theme.colors.tone5};
    font-size: ${theme.font.size.smallText};
  }
`