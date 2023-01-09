import styled from 'styled-components'
import theme from '../../styles/theme'


export const Main = styled.div`
  flex: 1;
  color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`
export const gridIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: rgba(0,0,0,0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h2{
    text-align: center;
  }
`
export const gridTitle = styled.div`
  font-size: 23px;
  font-weight: bold;
  margin-top: 5px;
`
export const gridInfo = styled.div`
  font-size: 10px;
  margin-top: 14px;
`