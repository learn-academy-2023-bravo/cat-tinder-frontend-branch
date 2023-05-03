import { useParams } from 'react-router-dom'
import { Container } from 'reactstrap'

const TreeShow = ({ trees }) => {
  const { id } = useParams()
  console.log(id)
  let currentTree = trees?.find((tree) => tree.id === +id)
  console.log(currentTree)

  return (
    <main>
      <Container className='show-profile' fluid='sm'>
        <h1>
          {currentTree.name}, Age: {currentTree.age}
        </h1>
        <div className='show-container'>
          <div
            className='show-background'
            style={{ backgroundImage: `url(${currentTree.image})` }}
          />
          <img
            className='show-image'
            src={currentTree.image}
            alt={`${currentTree.name}'s profile picture`}
          />
        </div>
        <p>{currentTree.enjoys}</p>
      </Container>
    </main>
  )
}

export default TreeShow
