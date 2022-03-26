import type { NextPage } from 'next'
import { IoMdPlay } from 'react-icons/io'
import { trailers } from '@utils/trailer'
import { Container, Navigation, Menu, Content, Resume, Trailers, CardTrailer } from '@styles/styles'

const Home: NextPage = () => {
  return (
    <Container>
      <Navigation>
        <img src='/disney-brand.png' alt='Disney' />

        <Menu>
          <span></span>
          <span></span>
          <span></span>
        </Menu>
      </Navigation>
      <Content>
        <Resume>
          <img src='/imdb-icon.png' alt='imdb' />
          <span>2021 - Kids - Movie</span>
          <img src='/luca.png' className='luca' alt='Luca' />
          <p>Luca and Alberto dream of a life of freedom, a life of adventure — and, most of all, a life with a Vespa to ride.</p>
          <button><IoMdPlay /> Watch Now</button>
        </Resume>
        <Trailers>
          <h1>Movies</h1>

          {trailers.map((item, index) => (
            <CardTrailer key={index}>
              <img src={item.image} />
              <span>{item.genre}</span>
              <strong>{item.name}</strong>
            </CardTrailer>
          ))}
        </Trailers>
      </Content>
    </Container>
  )
}

export default Home
