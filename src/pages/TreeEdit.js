import { useState } from 'react'
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Card,
  CardBody,
} from 'reactstrap'
import { useNavigate, useParams } from 'react-router-dom'
import Preview from '../components/Preview'

const TreeEdit = ({ updateTree, deleteTree, trees }) => {
  const navigate = useNavigate()
  const { id } = useParams()
  let currentTree = trees?.find((tree) => tree.id === +id)

  const [updatedTree, setUpdatedTree] = useState({
    id: currentTree.id,
    name: currentTree.name,
    age: currentTree.age,
    enjoys: currentTree.enjoys,
    image: currentTree.image,
  })

  const handleChange = (e) => {
    setUpdatedTree({ ...updatedTree, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateTree(updatedTree)
    navigate(`/treeshow/${id}`)
  }

  const handleDelete = () => {
    deleteTree(id)
    navigate('/treeindex/')
  }

  return (
    <>
      <Card style={{ maxWidth: '36rem', margin: 'auto' }}>
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for='tree-name'>Name</Label>
              <Input
                type='text'
                name='name'
                id='tree-name'
                onChange={handleChange}
                value={updatedTree.name}
              />
            </FormGroup>
            <FormGroup>
              <Label for='tree-age'>Age</Label>
              <Input
                type='number'
                name='age'
                id='tree-age'
                onChange={handleChange}
                value={updatedTree.age}
              />
            </FormGroup>
            <FormGroup>
              <Label for='tree-enjoys'>Enjoys</Label>
              <Input
                type='text'
                name='enjoys'
                id='tree-enjoys'
                onChange={handleChange}
                value={updatedTree.enjoys}
              />
            </FormGroup>
            <FormGroup>
              <Label for='tree-image'>Image URL</Label>
              <Input
                type='text'
                name='image'
                id='tree-image'
                onChange={handleChange}
                value={updatedTree.image}
              />
            </FormGroup>
            <Button type='submit' color='primary'>
              Submit
            </Button>
            <Button onClick={handleDelete} color='danger'>
              Delete
            </Button>
          </Form>
          <Preview source={updatedTree.image} />
        </CardBody>
      </Card>
    </>
  )
}

export default TreeEdit
