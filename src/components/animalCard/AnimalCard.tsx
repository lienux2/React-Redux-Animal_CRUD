import style from './AnimalCard.module.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeAnimal, sortAscAnimal, sortDescAnimal } from '../../features/animalSlice'
import { Link } from 'react-router-dom'

export const AnimalCard = () => {

    const animals = useSelector(state => state.animals);

    const dispatch = useDispatch();

    return (
        <>
            <div>
                <div className="button-wrapper">
                    <div>
                        <Link to='add'>
                            <button className="button button__add">Add Animal</button>
                        </Link>
                    </div>

                    <div className='button-wrapper-sort'>
                        <button className='button button__sort' onClick={() => {
                            dispatch(sortAscAnimal({ sortBy: 'name' }));
                        }}>⬆️</button>
                        <button className='button button__sort' onClick={() => {
                            dispatch(sortDescAnimal({ sortBy: 'name' }));
                        }}>⬇️</button>
                    </div>
                </div>
            </div>

            <div>
                <div className={style.cardsContainer}>
                    {animals.map((animal) => (
                        <div className={style.cardWrapper} key={animal.id}>
                            <div className={style.cards}>
                                <div>
                                    <h1>{animal.name}</h1>
                                </div>
                                <div>
                                    <img className={style.image} src={animal.image} alt='animal image' />
                                </div>
                            </div>
                            <div className="button-wrapper">
                                <Link to={`update/${animal.id}`}>
                                    <button className='button button__edit'>Edit</button>
                                </Link>
                                <button className='button button__delete' onClick={() => {
                                    dispatch(removeAnimal(animal.id))
                                }}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}