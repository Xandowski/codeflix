import React from 'react';
import { Form, Label, Select} from './styles';

const CategorySelection = (props) => {
  return (
    <>
    <Form>
      <Label>
        {props.name}
      </Label>
      <Select>
        <option value="0">Selecione uma categoria</option>
        {props.arr.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </Select>
    </Form>
    </>
  )
}

export default CategorySelection;