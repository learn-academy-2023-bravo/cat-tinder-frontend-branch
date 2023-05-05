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
import { useNavigate } from 'react-router-dom'
import Preview from '../components/Preview'

const TreeNew = ({ createTree }) => {
  const navigate = useNavigate()

  const [newTree, setNewTree] = useState({
    name: '',
    age: '',
    enjoys: '',
    image: '',
  })

  const handleChange = (e) => {
    setNewTree({ ...newTree, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createTree(newTree)
    navigate('/treeindex')
  }

  return (
    <>
      <Card style={{maxWidth: '36rem', margin: 'auto'}}>
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for='tree-name'>Name</Label>
              <Input
                type='text'
                name='name'
                id='tree-name'
                onChange={handleChange}
                value={newTree.name}
              />
            </FormGroup>
            <FormGroup>
              <Label for='tree-age'>Age</Label>
              <Input
                type='number'
                name='age'
                id='tree-age'
                onChange={handleChange}
                value={newTree.age}
              />
            </FormGroup>
            <FormGroup>
              <Label for='tree-enjoys'>Enjoys</Label>
              <Input
                type='text'
                name='enjoys'
                id='tree-enjoys'
                onChange={handleChange}
                value={newTree.enjoys}
              />
            </FormGroup>
            <FormGroup>
              <Label for='tree-image'>Image URL</Label>
              <Input
                type='text'
                name='image'
                id='tree-image'
                onChange={handleChange}
                value={newTree.image}
              />
            </FormGroup>
            <Button type='submit' color='primary'>
              Submit
            </Button>
          </Form>
          < Preview source={newTree.image}/>
        </CardBody>
      </Card>
    </>
  )
}

export default TreeNew
