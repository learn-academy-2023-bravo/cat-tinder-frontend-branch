import { NavLink, useParams } from 'react-router-dom'
import { Button } from 'reactstrap'

const RightArrow = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      height={24}
      width={24}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
      />
    </svg>
  )
}

const LeftArrow = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      height={24}
      width={24}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
      />
    </svg>
  )
}

const TreeShow = ({ trees }) => {
  const { id } = useParams()
  console.log(id)
  let currentTree = trees?.find((tree) => tree.id === +id)
  console.log(currentTree)

  const index = trees.findIndex((tree) => tree.id === +id)
  const next = trees[index + 1 > trees.length - 1 ? 0 : index + 1].id
  const previous = trees[index === 0 ? trees.length - 1 : index - 1].id

  return (
    <div>
      <div className='show-profile'>
        <div className='show-top'>
          <Button
            color='secondary'
            to={`/treeshow/${previous}`}
            tag={NavLink}
            outline={true}
          >
            <LeftArrow />
          </Button>
          <h1>
            {currentTree.name}, Age: {currentTree.age}
          </h1>
          <Button
            color='secondary'
            to={`/treeshow/${next}`}
            tag={NavLink}
            outline={true}
          >
            <RightArrow />
          </Button>
        </div>
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
