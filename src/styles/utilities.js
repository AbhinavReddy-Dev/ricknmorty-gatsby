import React from 'react'
import styled from 'styled-components'

// Toggle Switch
export const ToggleSwitchWrapper = styled.div.attrs(props => ({
  className: props.alive === true ? 'bg-green-400' : 'bg-gray-400',
}))`
    ${tw`relative rounded-full w-12 h-6 transition duration-200 ease-linear`};
`
export const ToggleSwitchLabel = styled.label.attrs(props=>({
    for:"toggle-switch",className: props.alive === true ? 'translate-x-full border-green-400' : 'translate-x-0 border-gray-400'
}))`
  ${tw`absolute left-0 bg-white border-2 mb-2 w-6 h-6 rounded-full transition transform duration-100 ease-linear cursor-pointer`};
`
export const ToggleSwitchInput = styled.input.attrs(props=>({
    type:"checkbox",
    id="toggle-switch",
    name="toggle-switch"
}))`
  ${tw`appearance-none w-full h-full active:outline-none focus:outline-none`};
`

export const ToggleSwitch =({alive, onToggle})=>{
    return(
    <ToggleSwitchWrapper alive = {alive}>
        <ToggleSwitchLabel />
        <ToggleSwitchInput onChange={onToggle}/>
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
// const num = 10;
// const range = [1, ];
// const randomBetween = (a, b) => {
//    return ((Math.random() * (b - a)) + a).toFixed(2);
// };
// export const randomBetweenRange = (num, range) => {
//    const res = [];
//    for(let i = 0; i < num; ){
//       const random = randomBetween(range[0], range[1]);
//       if(!res.includes(random)){
//          res.push(random);
//          i++;
//       };
//    };
//    return res;
// };
// console.log(randomBetweenRange(num, range));