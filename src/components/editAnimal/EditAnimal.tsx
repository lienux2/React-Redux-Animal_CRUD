import { useDispatch, useSelector } from 'react-redux';
import style from './EditAnimal.module.css'
import { editAnimal } from '../../features/animalSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

export const EditAnimal = () => {

  const { id } = useParams<{ id: string }>();
  const animals = useSelector(state => state.animals);
  const existingAnimal = animals.filter((f: { id: string | undefined; }) => f.id == id);
  const { name, image } = existingAnimal[0];
  const [updatedName, setName] = useState(name);
  const [updatedImage, setImage] = useState(image);

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleSave = (e) => {
    console.log('clicked')
    e.preventDefault();

    dispatch(editAnimal({ id: id, name: updatedName, image: updatedImage }));
    navigate('/')
  };

  return (
    <>
      <div className={style.formContainer}>
        <div className={style.form}>
          <h1>Edit Animal</h1>
          <form className={style.input} onSubmit={handleSave}>
            <div className={style.centerInputs}>
              <label htmlFor="name">Name:</label>
              <input type="text" value={updatedName} id='name' onChange={(e) => setName(e.target.value)} />
            </div>
            <div className={style.centerInputs}>
              <label htmlFor="image">Image URL:</label>
              <input type="text" value={updatedImage} id='image' onChange={(e) => setImage(e.target.value)} />
            </div>
            <div className='button-wrapper'>
              <button type='submit' className='button button__add' >Save</button>
            </div>
          </form>
        </div>
      </div >
    </>
  )
}