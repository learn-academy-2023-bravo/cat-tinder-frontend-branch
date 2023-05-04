import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
} from 'reactstrap'
import { NavLink } from 'react-router-dom'

const TreeIndex = ({ trees }) => {
  return (
    <Row>
      {trees.map((tree, index) => {
        return (
          <Col xs={12} sm={6} md={4} lg={3}>
            <NavLink
              to={`/treeshow/${tree.id}`}
              style={{ textDecoration: 'none' }}
            >
              <Card key={index} className='tree-card'>
                <img
                  alt={`profile of a tree named ${tree.name}`}
                  src={tree.image}
                />
                <CardBody>
                  <CardTitle tag='h5'>{tree.name}</CardTitle>
                  <CardSubtitle className='mb-2 text-muted' tag='h6'>
                    Age: {tree.age}
                  </CardSubtitle>
                </CardBody>
              </Card>
            </NavLink>
          </Col>
        )
      })}
    </Row>
  )
}

export default TreeIndex
