import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"
import { NavLink } from "react-router-dom"

const TreeIndex = ({ trees }) => {
    return (
        <main className="tree-index-cards">
            {trees.map((tree, index) => {
                return (
                    <Card
                        style={{
                            width: "14rem"
                        }}
                        key={index}
                    >
                        <img alt={`profile of a tree named ${tree.name}`} src={tree.image} />
                        <CardBody>
                            <CardTitle tag="h5">{tree.name}</CardTitle>
                            <CardSubtitle className="mb-2 text-muted" tag="h6">
                                Age: {tree.age}
                            </CardSubtitle>
                            <NavLink to={`/treeshow/${tree.id}`}>See More Details</NavLink>
                        </CardBody>
                    </Card>
                )
            })}
        </main>
    )
}

export default TreeIndex