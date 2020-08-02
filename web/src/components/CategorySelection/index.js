import React, { useState } from 'react';
import { Form, Select, Arrow, Ul, H1} from './styles';

import Carousel from '../../components/Carousel';
import dadosLinguagens from '../../data/dados-linguagens.json';

const CategorySelection = ({name ,arr, data}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('Selecione uma categoria');
  const [dataLanguages, setDataLanguages] = useState(data)
  console.log(data)

  const toggling = () => setIsOpen(!isOpen);
  const handleSelectLanguage = (e) => {
    const liValue = e.target.innerHTML;
    setSelectedLanguage(liValue);
    if(liValue === 'javascript') {
      setDataLanguages([dadosLinguagens.categorias[2]])
      console.log(dataLanguages)
    }
    else if(liValue === 'python') {
      setDataLanguages([dadosLinguagens.categorias[3]])
    }
    else if(liValue === 'java') {
      setDataLanguages([dadosLinguagens.categorias[4]])
    }
    else if(liValue === 'c#') {
      setDataLanguages([dadosLinguagens.categorias[5]])
    }
  };

  return (
    <>
    <Form>
      <H1>
        {name}
      </H1>
      <Select>
        <Ul onClick={toggling}>
          <li value="0">{selectedLanguage}</li>
          { isOpen && (
            arr.map(cat =>(
              <li 
                onClick={handleSelectLanguage} 
                key={cat} 
                value={cat}
              >{cat}
              </li>
            ))
          )}
        </Ul>
      <Arrow onClick={toggling}/>
      </Select>
    </Form>
    {
      dataLanguages.map((category) => { 
        if(category.titulo === 'Linguagens Mais Populares'){
          return <Carousel
                  key={category.titulo}
                  ignoreFirstVideo
                  category={category}
                />
        }else {
          return <Carousel
                    key={category.titulo}
                    category={category}
                  />
        }
      })
    }
    </>
  )
}

export default CategorySelection;