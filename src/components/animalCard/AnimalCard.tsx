import style from "./AnimalCard.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  removeAnimal,
  sortAscAnimal,
  sortDescAnimal,
} from "../../features/animalSlice";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

export const AnimalCard = () => {
  const animals = useSelector((state) => state.animals);
  const dispatch = useDispatch();

  return (
    <>
      <div className="button-wrapper">
        <Button
          buttonName="⬆️"
          buttonStyle="sort"
          click={() => {
            dispatch(sortAscAnimal({ sortBy: "name" }));
          }}
        />
        <Button
          buttonName="⬇️"
          buttonStyle="sort"
          click={() => {
            dispatch(sortDescAnimal({ sortBy: "name" }));
          }}
        />
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
                  <img
                    className={style.image}
                    src={animal.image}
                    alt="animal image"
                  />
                </div>
              </div>
              <div className="button-wrapper">
                <Link to={`update/${animal.id}`}>
                  <Button buttonName="Edit" buttonStyle="edit" />
                </Link>

                <Button
                  buttonName="Delete"
                  buttonStyle="delete"
                  click={() => {
                    dispatch(removeAnimal(animal.id));
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
