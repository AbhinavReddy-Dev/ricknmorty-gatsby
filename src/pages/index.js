import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import axios from 'axios'
import { useSelector, connect, useDispatch } from 'react-redux'
import Layout from '../components/layout'
import { fetchEpisodes } from '../redux'
import { getCharacter, getLocation, getEpisode } from 'rickmortyapi'
import { CharacterCard } from '../styles/character'
import { width } from '../../tailwind'
const IndexPage = ({ fetchEpisodes, episodes }) => {
  const [character, setCharacter] = useState([])
  const [isCharDead, setIsCharDead] = useState({ charName: '', isAlive: '' })
  useEffect(() => {
    async function fetchData() {
      const { results } = await getCharacter({
        id: [1, 4, 23, 65, 32, 64, 234, 121],
        status: 'alive',
        status: 'Dead',
      })
      console.log(results)
      setCharacter(results)
    }
    fetchData()
    // const earth = await getLocation(1)
    // const episodeOne = await getEpisode(1)
    // console.log('UE char', character)

    console.log(isCharDead)
  }, [isCharDead])

  function onClick(charac) {
    console.log('char Name', charac.name)
    setIsCharDead({
      ...isCharDead,
      charName: charac.name,
      isAlive: charac.status,
    })
  }

  return (
    <Layout>
      <h1>Hi dumb people 🤣</h1>
      <p>Welcome to Rick Sanchez and Mundane Morty universe!</p>
      <p>
        Now go ***k yourselves, jk, have some fun and then go do the earlier 😂.
      </p>
      <div
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {character.length > 0 &&
          character.map(charac => {
            return <CharacterCard character={charac} onClickHandle={onClick} />
          })}
      </div>
      <Link to="/killswitch/">Go to Kill Switch</Link>
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
