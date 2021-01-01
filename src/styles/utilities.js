import React, { useState } from 'react'
import styled from 'styled-components'

// Toggle Switch
export const ToggleSwitchWrapper = styled.div.attrs(props => ({
  className: props.alive === true ? 'bg-green-400' : 'bg-gray-400',
}))`
  ${tw`relative rounded-full w-12 h-6 transition duration-200 ease-linear`};
`
export const ToggleSwitchLabel = styled.label.attrs(props => ({
  for: 'toggle-switch',
  className:
    props.alive === true
      ? 'translate-x-full border-green-400'
      : 'translate-x-0 border-gray-400',
}))`
  ${tw`absolute left-0 bg-white border-2 mb-2 w-6 h-6 rounded-full transition transform duration-100 ease-linear cursor-pointer`};
`
export const ToggleSwitchInput = styled.input.attrs(props => ({
  type: 'checkbox',
  id: 'toggle-switch',
  name: 'toggle-switch',
}))`
  ${tw`appearance-none w-full h-full active:outline-none focus:outline-none`};
`

export const ToggleSwitch = ({ character, onChangeHandle }) => {
  const [alive, setAlive] = useState(false)

  return (
    <ToggleSwitchWrapper alive={alive}>
      <ToggleSwitchLabel />
      <ToggleSwitchInput
        onChange={() => {
          setAlive(!alive)
          onChangeHandle(character)
        }}
      />
    </ToggleSwitchWrapper>
  )
}

// export const  = styled.`
//   ${tw``};
// `

// export const  = styled.`
//   ${tw``};
// `

// Random characters
const num = 20
const range = [1, 671]
const randomBetween = (a, b) => {
  return (Math.random() * (b - a) + a).toFixed(0)
}
export const randomBetweenRange = (num = 20, range = [1, 671]) => {
  const res = []
  for (let i = 0; i < num; ) {
    const random = randomBetween(range[0], range[1])
    if (!res.includes(random)) {
      res.push(Number(random))
      i++
    }
  }
  return res
}

// console.log(randomBetweenRange());

// Voices

export const voices = [
  'http://peal.io/p/lick-lick-lick-my-balls-hahaha-yeah',
  'https://peal.io/p/i-don-t-give-a-f-k-what-you-think',
  'https://peal.io/p/this-is-how-you-dream-bitch',
  'https://peal.io/p/whatever',
  'https://peal.io/p/who-the-fuck-are-you-78f1b0b0-4e04-4a97-b5cb-832d070fe0fe',
  'https://peal.io/p/and-that-s-why-i-always-say-shum-shum-shlippity-dub',
  'https://peal.io/p/rick-on-love',
  'https://peal.io/p/i-m-gonna-need-you-to-put-it-way-up-inside-your-butthole',
  'https://peal.io/p/wubba-lubba-dub-dub',
  'https://peal.io/p/yes-fuck-you-god-not-today-bitch',
]
// const [voice, setVoice] = useState('https://peal.io/p/whatever')
// setVoice(voices[Math.floor(Math.random() * voices.length)])
