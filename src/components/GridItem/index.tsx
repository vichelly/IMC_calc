import { level } from 'helpers/bmi';
import * as S from './styles';
import React from 'react';
import upImage from './assets/up.png'
import downImage from './assets/down.png'

type Props = {
    item: level
};

export default function GridItem({item}:Props) {
  return (
    <S.Main style={{backgroundColor: item.color }} >
        <S.gridIcon>
            <h2>
                {item.icon === 'up' ? 'GREAT' : 'BAD'}
            </h2>
        </S.gridIcon>
        <S.gridTitle>{item.title}</S.gridTitle>
        {item.yourBmi && 
            <S.yourBMI> your BMI is {item.yourBmi} kg/m² </S.yourBMI>
        }
        <S.gridInfo>
            <>
                BMI is between <strong>{item.bmi[0]}</strong> and <strong>{item.bmi[1]}</strong>
            </>
        </S.gridInfo>
    </S.Main>
  )
}
