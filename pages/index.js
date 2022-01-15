import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
const axios = require('axios').default;
import Link from 'next/link';

const index = ({heros}) => {
  return (
    <div className="container">
      <h1 className="display-2">
        Superhero Identity Manager
      </h1>
      <div>
        {heros.map(hero => {
          return (
            <MDBCard key={hero._id} className='border border-2 my-2' style={{ maxWidth: '22rem' }}>
              <MDBCardBody>
                <MDBCardTitle>{hero.superHero}</MDBCardTitle>
                <MDBCardText>
                  Reveal Identity
                </MDBCardText>
                <Link href={`/${hero._id}`}><MDBBtn className='mx-2'>View Hero</MDBBtn></Link>
                <Link href={`/${hero._id}/edit`}><MDBBtn>Edit Hero</MDBBtn></Link>
              </MDBCardBody>
          </MDBCard>
          )
        })}

      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await axios('http://localhost:3000/api/hero');
  const {hero} = res.data
  console.log(hero)
  return {
    props:{heros: hero}
  };
}

export default index
