import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import axios from 'axios'
import { useSelector, connect, useDispatch } from 'react-redux'
import Layout from '../components/layout'
import { fetchEpisodes } from '../redux'
import { getCharacter, getLocation, getEpisode } from 'rickmortyapi'
import { CharacterCard } from '../styles/character'
import { width } from '../../tailwind'
import { randomBetweenRange } from '../styles/utilities'
const IndexPage = ({ fetchEpisodes, episodes }) => {
  const [characters, setCharacters] = useState([])
  const [display, setDisplay] = useState(false)
  var [statusCheck, setStatusCheck] = useState([])

  const playAudio = () => {
    const audioEl = document.getElementsByClassName('audio-element')[0]
    audioEl.play()
  }

  useEffect(() => {
    console.log(typeof characters)
    async function fetchData() {
      var results = await getCharacter(randomBetweenRange())
      results = results.filter(charac => charac.status !== 'unknown')
      results.length = 4
      setTimeout(() => {
        setCharacters(results)
        setStatusCheck(
          results.map(charac => {
            return {
              id: charac.id,
              actualStatus: charac.status === 'Alive' ? true : false,
              userStatus: false,
            }
          })
        )
      }, 1500)
    }
    characters.length === 0 && fetchData()
    // const earth = await getLocation(1)
    // const episodeOne = await getEpisode(1)
    // console.log('UE char', character)
    // console.log(isCharDead)
  }, [characters])
  console.log(characters, statusCheck)

  function onClick(id) {
    console.log('char ID', id)
    var updatedStatusCheck = statusCheck.map(status =>
      status.id === id
        ? {
            ...status,
            userStatus: !status.userStatus,
          }
        : status
    )

    setStatusCheck(updatedStatusCheck)
  }

  return (
    <Layout>
      <h1>Hi dumb people 🤣</h1>
      <p>Welcome to Rick Sanchez and Sober Morty's universe!</p>
      <p>
        Rick welcomes you! - Now go ***k yourselves, just kidding, have some fun
        and then go do the earlier 😂
      </p>
      <h3>Let's check how crazy you are about rick, take the quiz to know! </h3>
      <h4>
        Click on the cards to mark them alive and then check who's dead 💀 and
        who's alive 😇
      </h4>
      <audio className="audio-element">
        <source src="http://peal.io/p/lick-lick-lick-my-balls-hahaha-yeah"></source>
      </audio>
      <div
        style={{
          marginTop: '3rem',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <button
          style={{
            backgroundColor: 'rebeccapurple',
            color: 'white',
            padding: '.2rem 1rem',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 2px 4px 0 whitesmoke',
          }}
          onClick={() => {
            playAudio()
            setDisplay(!display)
          }}
        >
          Check 💀
        </button>
        <button
          style={{
            marginLeft: '2rem',
            backgroundColor: 'teal',
            color: 'white',
            padding: '.2rem 1rem',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 2px 4px 0 whitesmoke',
          }}
          onClick={() => setCharacters([])}
        >
          Re-Fetch 🤟🏻
        </button>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {characters.length !== 0 &&
          characters.map(charac => {
            // console.log(charac)
            return (
              <CharacterCard
                display={display}
                key={charac.id}
                character={charac}
                onClickHandle={onClick}
              />
            )
          })}
      </div>
      <h2
        style={{
          margin: '5rem 0rem',
          fontWeight: 'lighter',
          display: characters.length === 0 ? 'block' : 'none',
        }}
      >
        Fetching Characters, until then please warm the seats! 🔥
      </h2>

      <p
        style={{
          fontWeight: 'lighter',
        }}
      >
        Rick and Morty Content from 'rickandmortyapi.com', built with GatsbyJs
        and made for GatsbyJs Silly Site Challenge 2020
      </p>
      <p
        style={{
          fontSize: '.8rem',
          fontWeight: 'lighter',
        }}
      >
        This must be considered silly, no hard feelings for rick words!
      </p>
      <a
        style={{
          color: 'papayawhip',
        }}
        href="https://github.com/AbhinavReddy-Dev/ricknmorty-gatsby"
      >
        Contribute here on GitHub!
      </a>
    </Layout>
  )
}

const mapStateToProps = state => {
  return {
    episodes: state.rickshit.episodes,
    episodesLoading: state.rickshit.episodesLoading,
    episodesMessage: state.rickshit.episodesMessage,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchEpisodes: () => dispatch(fetchEpisodes()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)
