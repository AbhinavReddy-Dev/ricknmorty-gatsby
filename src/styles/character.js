import React from 'react'
import styled from 'styled-components'

export const CharCard = styled.div`
  /* ${tw`flex items-center`}; */
  width: fit-content;
  margin: 0;
  padding: 0;
`
export const CharCardBPrint = styled.div`
  ${tw`max-w-xs`};
`
export const CharCardBase = styled.div`
  ${tw`bg-white shadow-default rounded-lg p-3`};
`
export const CharImageWrapper = styled.div`
  ${tw`photo-wrapper p-2 my-3`};
  padding: 0 3rem;
`
export const CharImageEle = styled.img.attrs(props => ({
  alt: props.alt || 'characer name',
  src: props.src,
}))`
  ${tw`w-32 h-32 rounded-full shadow-outline  mx-auto`};
  margin-bottom: 0;
`
export const CharInfoWrapper = styled.div`
  ${tw`p-2`};
`
export const CharName = styled.h3`
  ${tw`text-center text-l text-gray-900 font-medium leading-8`};
  margin-bottom: 0.5rem;
  max-width: 13rem;
`
export const CharCurrLocation = styled.div`
  ${tw`text-center text-gray-400 text-xs font-semibold`};
`
export const CharInfoTable = styled.table`
  ${tw`text-xs my-3 mt-0`};
`
export const CharInfoLabelTd = styled.td`
  ${tw`px-2 py-2 text-gray-500 font-semibold`};
  border: none;
`
export const CharInfoDataTd = styled.td`
  ${tw`px-2 py-2`};
  border: none;
  max-width: 5rem;
`

export const CharacterCard = ({ character, onClickHandle }) => {
  return (
    <CharCard onClick={() => onClickHandle(character)}>
      <CharCardBPrint>
        <CharCardBase>
          <CharImageWrapper>
            <CharImageEle alt={character.name} src={character.image} />
          </CharImageWrapper>
          <CharInfoWrapper>
            <CharName>
              {character.name} ({character.status})
            </CharName>
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
                <tr>
                  <CharInfoLabelTd>Gender</CharInfoLabelTd>
                  <CharInfoDataTd>{character.gender}</CharInfoDataTd>
                </tr>
                <tr>
                  <CharInfoLabelTd>Species</CharInfoLabelTd>
                  <CharInfoDataTd>{character.species}</CharInfoDataTd>
                </tr>
                <tr>
                  <CharInfoLabelTd>Appeared in</CharInfoLabelTd>
                  <CharInfoDataTd>
                    {character.episode && character.episode.length} episodes
                  </CharInfoDataTd>
                </tr>
                {/* <tr>
                  <CharInfoLabelTd>Status</CharInfoLabelTd>
                  <CharInfoDataTd>{character.status}</CharInfoDataTd>
                </tr> */}
              </tbody>
            </CharInfoTable>
          </CharInfoWrapper>
        </CharCardBase>
      </CharCardBPrint>
    </CharCard>
  )
}

// export const  = styled.`
//   ${tw``};
// `
