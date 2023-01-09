import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
  max-width: 900px;
  margin: 40px auto;
`
export const DivContent = styled.div`
  display: flex;
  color: ${theme.colors.tone4};
`
export const LeftDiv = styled.div`
  flex: 1;
  margin-right: 40px;
  input{
    width: 100%;
    border: 0;
    border-bottom: 2px solid rgba(150,163,171,0.5);
    padding: 8px 2px;
    margin-bottom: 20px;
    font-size: 14px;
    outline: 0;
  }
  button{
    background-color: ${theme.colors.tone4};
    color: white;
    font-size: 15px;
    border: 0;
    border-radius: 10px;
    padding: 15px 0;
    width: 100%;
    cursor: pointer;
    margin-top: 40px;
    transition: 0.3s;
  }
  button:hover{
    opacity: 0.8;
  }
`
export const RightDiv = styled.div` 
  flex: 1;
  margin-left: 40px;
`