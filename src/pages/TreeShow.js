import { NavLink, useParams } from 'react-router-dom'
import { Button } from 'reactstrap'

const TreeShow = ({ trees }) => {
  const { id } = useParams()
  console.log(id)
  let currentTree = trees?.find((tree) => tree.id === +id)
  console.log(currentTree)

  return (
    <div>
      <div className='show-profile'>
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
      </div>
      <Button color='secondary' to='/treeindex' tag={NavLink} outline={true}>
        Back
      </Button>
    </div>
  )
}

export default TreeShow
