import style from './AnimalForm.module.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addAnimal } from '../../features/animalSlice'
import { useNavigate } from 'react-router-dom'

export const AnimalForm = () => {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const addAnimalHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    dispatch(addAnimal({ name, image }));
    setName('')
    setImage('')
    navigate('/')
  }

  return (
    <>
      <div className={style.formContainer}>
        <div className={style.form}>
          <h1>Add animal</h1>
          <form className={style.input} onSubmit={addAnimalHandler}>
            <div className={style.centerInputs}>
              <label htmlFor="name">Name:</label>
              <input type="text" placeholder='Enter animal name...' required id='name' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className={style.centerInputs}>
              <label htmlFor="image">Image URL:</label>
              <input type="text" placeholder='Link for image...' required id='image' value={image} onChange={(e) => setImage(e.target.value)} />
            </div>
            <div className='button-wrapper'>
              <button type='submit' className='button button__add'>Add</button>
            </div>
          </form>
        </div>
      </div >
    </>
  )
}