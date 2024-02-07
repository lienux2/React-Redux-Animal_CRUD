import { useDispatch, useSelector } from "react-redux";
import style from "../AnimalForm.module.css";
import { editAnimal } from "../../../features/animalSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { Button } from "../../Button/Button";
import { Input } from "../../Input/Input";
import { Label } from "../../Label/Label";

export const EditAnimal = () => {
  const { id } = useParams<{ id: string }>();
  const animals = useSelector((state) => state.animals);
  const existingAnimal = animals.filter(
    (f: { id: string | undefined }) => f.id == id
  );
  const { name, image } = existingAnimal[0];
  const [updatedName, setName] = useState(name);
  const [updatedImage, setImage] = useState(image);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("clicked");
    e.preventDefault();

    dispatch(editAnimal({ id: id, name: updatedName, image: updatedImage }));
    navigate("/");
  };

  return (
    <>
      <div className={style.formContainer}>
        <div className={style.form}>
          <div>
            <form className={style.inputs} onSubmit={handleSave}>
              <div className={style.heading}>
                <h1>Edit Animal</h1>
              </div>
              <div className={style.inputs}>
                <Label labelFor="name" labelName="Name:" />
                <Input
                  inputName="Enter animal name.."
                  inputId="name"
                  inputValue={updatedName}
                  change={(e) => setName(e.target.value)}
                />
              </div>
              <div className={style.inputs}>
                <Label labelFor="image" labelName="Image URL:" />
                <Input
                  inputName="Enter image URL..."
                  inputId="image"
                  inputValue={updatedImage}
                  change={(e) => setImage(e.target.value)}
                />
              </div>
              <div className="button-wrapper">
                <Button
                  buttonName="Cancel"
                  buttonStyle="cancel"
                  click={() => navigate("/")}
                />
                <Button buttonName="Save" buttonStyle="save" />
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
