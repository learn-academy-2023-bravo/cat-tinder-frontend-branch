import { NavLink, useParams } from 'react-router-dom'
import { Button } from 'reactstrap'

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

const TreeShow = ({ trees }) => {
    const { id } = useParams()
    console.log(id)
    let currentTree = trees?.find((tree) => tree.id === +id)
    console.log(currentTree)

    const index = trees.findIndex(tree => tree.id === +id)
    const next = trees[index + 1 > trees.length - 1 ? 0 : index + 1].id
    const previous = trees[index === 0 ? trees.length - 1 : index - 1].id

    return (
        <div>
            <div className='show-profile'>
                <div className='show-top'>
                    <Button color='secondary' to={`/treeshow/${previous}`} tag={NavLink} outline={true}>
                        Previous
                    </Button>
                    <h1>
                        {currentTree.name}, Age: {currentTree.age}
                    </h1>
                    <Button color='secondary' to={`/treeshow/${next}`} tag={NavLink} outline={true}>
                        Next
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
