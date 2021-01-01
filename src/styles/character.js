import React, { useState } from 'react'
import styled from 'styled-components'
import { ToggleSwitch } from './utilities'

export const CharCard = styled.div`
  ${tw`flex items-center`};
  width: fit-content;
  height: 555px;
  margin: 1rem;
  padding: 0;
  cursor: pointer;
`
export const CharCardBPrint = styled.div`
  ${tw`max-w-xs`};
`
export const CharCardBase = styled.div`
  ${tw`bg-white shadow-default rounded-lg p-3 pt-6`};
  /* background-color: #00587a; */
  color: #fff;
  background-color: ${props => (props.alive === true ? '#16c79a' : '#ff4646')};
`
export const CharImageWrapper = styled.div`
  ${tw`photo-wrapper p-2 py-3`};
  padding: 0 3rem;
`
export const CharImageEle = styled.img.attrs(props => ({
  alt: props.alt || 'characer name',
  src: props.src,
}))`
  ${tw`w-32 h-32 rounded-full  mx-auto`};
  border: 1rem solid black;
  /* border-color: ${props => (props.alive === true ? 'green' : 'tomato')}; */
  margin-bottom: 0;
`
export const CharInfoWrapper = styled.div`
  ${tw`p-2`};
`
export const CharName = styled.h3`
  ${tw`text-center text-lg text-gray-900 font-medium leading-8`};
  margin-bottom: 0.5rem;
  max-width: 13rem;
`
export const CharCurrLocation = styled.div`
  ${tw`text-center text-gray-400 text-xs font-semibold`};
`
export const CharInfoTable = styled.table`
  ${tw`text-xs my-3 mt-0`};
  align-items: center;
`
export const CharInfoLabelTd = styled.td`
  ${tw` text-gray-500 font-semibold`};
  border: none;
  padding-right: 0;
`
export const CharInfoDataTd = styled.td`
  ${tw`px-2 py-2`};
  border: none;
  /* max-width: 5rem; */
  /* padding-left: 0; */
`
export const RevealStatus = styled.div`
  ${tw`px-2`};
  display: ${props => (props.display === true ? 'block' : 'none')};
  margin: auto;
  width: fit-content;
  background-color: white;
  color: #000;
  text-align: center;
  border-radius: 2rem;
  h3 {
    padding: 0.5rem 1rem;
    font-weight: lighter;
    margin-bottom: none;
  }
  /* max-width: 5rem; */
  /* padding-left: 0; */
`

export const CharacterCard = ({ character, onClickHandle, display }) => {
  const [alive, setAlive] = useState(false)

  return (
    <CharCard
      alive={alive}
      onClick={() => {
        setAlive(!alive)
        onClickHandle(character.id)
      }}
    >
      <CharCardBPrint>
        <CharCardBase alive={alive}>
          <CharImageWrapper>
            <CharImageEle alt={character.name} src={character.image} />
          </CharImageWrapper>
          <CharInfoWrapper>
            <CharName>{character.name}</CharName>
            <CharCurrLocation>
              <p>{character.location && character.location.name}</p>
            </CharCurrLocation>
            <CharInfoTable>
              <tbody>
                <tr>
                  <CharInfoLabelTd>Origin</CharInfoLabelTd>
                  <CharInfoDataTd>
                    {character.origin && character.origin.name}
                  </CharInfoDataTd>
                </tr>
                {/* <tr>
                  <CharInfoLabelTd>Gender</CharInfoLabelTd>
                  <CharInfoDataTd>{character.gender}</CharInfoDataTd>
                </tr> */}
                <tr>
                  <CharInfoLabelTd>Species</CharInfoLabelTd>
                  <CharInfoDataTd>
                    {character.species} ({character.gender})
                  </CharInfoDataTd>
                </tr>
                {/* <tr>
                  <CharInfoLabelTd>Status</CharInfoLabelTd>
                  <CharInfoDataTd>
                  </CharInfoDataTd>
                </tr> */}
                {/* <tr>
                  <CharInfoLabelTd>Status</CharInfoLabelTd>
                  <CharInfoDataTd>{character.status}</CharInfoDataTd>
                </tr> */}
              </tbody>
            </CharInfoTable>
          </CharInfoWrapper>
          <RevealStatus display={display}>
            <h3>{character.status}</h3>
          </RevealStatus>
        </CharCardBase>
      </CharCardBPrint>
    </CharCard>
  )
}

// export const  = styled.`
//   ${tw``};
// `
