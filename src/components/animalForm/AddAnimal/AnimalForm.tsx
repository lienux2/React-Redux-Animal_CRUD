import style from "../AnimalForm.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAnimal } from "../../../features/animalSlice";
import { useNavigate } from "react-router-dom";
import { Button } from "../../Button/Button";
import { Input } from "../../Input/Input";
import { Label } from "../../Label/Label";

export const AnimalForm = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addAnimalHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(addAnimal({ name, image }));
    setName("");
    setImage("");
    navigate("/");
  };

  return (
    <>
      <div className={style.formContainer}>
        <div className={style.form}>
          <div>
            <form className={style.inputs} onSubmit={addAnimalHandler}>
              <div className={style.heading}>
                <h1>Add Animal</h1>
              </div>
              <div className={style.inputs}>
                <Label labelFor="name" labelName="Name:" />
                <Input
                  inputName="Enter animal name.."
                  inputId="name"
                  inputValue={name}
                  change={(e) => setName(e.target.value)}
                />
              </div>
              <div className={style.inputs}>
                <Label labelFor="image" labelName="Image URL:" />
                <Input
                  inputName="Enter image URL..."
                  inputId="image"
                  inputValue={image}
                  change={(e) => setImage(e.target.value)}
                />
              </div>
              <div className="button-wrapper">
                <Button buttonName="Add" buttonStyle="add" />
              </div>
            </form>
          </div>
          <div className={style.imagePreview}>
            {!image ? (
              <h1>Image Preview:</h1>
            ) : (
              <img className={style.image} src={image} alt="" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
