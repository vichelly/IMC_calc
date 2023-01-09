import { useState } from 'react'
import * as S from './styles'

const Content = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);

  const handleCalculateButton = () => {
    if(heightField && weightField){

    }else{
      alert("Digite todos os campos.")
    }
  }

  return(

  <>
    <S.Container>
        <S.DivContent>
            <S.LeftDiv>
                <h1>Calculate your BMI</h1>
                <br /> <br />
                <input 
                  type="number" 
                  value={heightField > 0 ? heightField : ''} 
                  onChange={e => setHeightField(parseFloat(e.target.value))}
                  placeholder="Enter your height (in meters)"
                />
                <input 
                  type="number" 
                  value={weightField > 0 ? weightField : ''} 
                  onChange={e => setWeightField(parseFloat(e.target.value))}
                  placeholder="Enter your weight (in kilograms)"
                />
                <button onClick={handleCalculateButton} >Calculate</button>
            </S.LeftDiv>
            <S.RightDiv>
                adfasdf
            </S.RightDiv>
        </S.DivContent>
    </S.Container>
  </>
)}

export default Content
