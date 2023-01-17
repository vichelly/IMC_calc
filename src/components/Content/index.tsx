import { useState } from 'react'
import * as S from './styles'
import { levels, calculateBmi, level } from 'helpers/bmi';
import GridItem from 'components/GridItem';

const Content = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<level | null>(null);

  const handleCalculateButton = () => {
    if(heightField && weightField){
      setToShow(calculateBmi(heightField,weightField));
    }else{
      alert("Digite todos os campos.")
    }
  }

  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }

  return(

  <>
    <S.Container>
        <S.DivContent>
            <S.LeftDiv>
              <br /> 
                <h1>Calculate your BMI</h1>
                <br /> <br /> <br /> <br />
                <input 
                  type="number" 
                  value={heightField > 0 ? heightField : ''} 
                  onChange={e => setHeightField(parseFloat(e.target.value))}
                  placeholder="Enter your height (in meters)"
                  disabled={toShow ? true : false}
                />
                <br /> <br /> <br />
                <input 
                  type="number" 
                  value={weightField > 0 ? weightField : ''} 
                  onChange={e => setWeightField(parseFloat(e.target.value))}
                  placeholder="Enter your weight (in kilograms)"
                  disabled={toShow ? true : false}
                />
                <br /> <br /> <br />
                <button onClick={handleCalculateButton} disabled={toShow ? true : false} >Calculate</button>
            </S.LeftDiv>
            <S.RightDiv>
              {! toShow && 
                <S.Grid>
                  {levels.map((item,key)=>(
                  <GridItem key={key} item={item} />
                  )
                  )}
                </S.Grid>
              }
              {toShow &&
                <S.rightBig>
                  <S.rightArrow onClick={handleBackButton} >
                     back
                  </S.rightArrow>
                  <GridItem item={toShow} />
                </S.rightBig>
              }
            </S.RightDiv>
        </S.DivContent>
    </S.Container>
  </>
)}

export default Content
