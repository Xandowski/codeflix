import React, { useState } from 'react';
import { Form, Select, Arrow, Ul, H1} from './styles';

const CategorySelection = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);
  return (
    <>
    <Form>
      <H1>
        {props.name}
      </H1>
      <Select>
        <Ul onClick={toggling}>
          <li>Selecione uma categoria</li>
          { isOpen && (
            props.arr.map(cat =>(
              <li key={cat}>{cat}</li>
            ))
          )}
        </Ul>
      <Arrow onClick={toggling}/>
      </Select>
    </Form>
    </>
  )
}

export default CategorySelection;