import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  animals: JSON.parse(localStorage.getItem("animals") || "null") || [
    {
      id: "1",
      name: "Lion",
      image: "https://koala.sh/api/image/v2-2i1jj-e8uqo.jpg",
    },
    {
      id: "2",
      name: "Tiger",
      image:
        "https://www.pwpark.com/wp-content/uploads/2021/02/Aleena-Amur-Tiger-1024x1024.jpg",
    },
    {
      id: "3",
      name: "Lynx",
      image:
        "https://cdn.pixabay.com/photo/2023/10/29/10/41/ai-generated-8349557_1280.jpg",
    },
    {
      id: "4",
      name: "Jaguar",
      image:
        "https://optimise2.assets-servd.host/maniacal-finch/production/animals/Jaguar-01-01.jpg?w=1200&auto=compress%2Cformat&fit=crop&dm=1658947196&s=9ddfba0ea33c8a096637c8133840a0ef",
    },
    {
      id: "5",
      name: "Serval",
      image:
        "https://www.wildmindscience.org/templates/yootheme/cache/48/profile_nenkani_main-487f0369.jpeg",
    },
    {
      id: "6",
      name: "Puma",
      image:
        "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
    },
    {
      id: "7",
      name: "Dog",
      image:
        "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg",
    },
  ],
};

export const animalSlice = createSlice({
  name: "animal",
  initialState,
  reducers: {
    addAnimal: (state, action) => {
      const { name, image } = action.payload;
      const animal = {
        id: nanoid(),
        name,
        image,
      };
      state.animals.push(animal);
      saveToLocalStorage("animals", state.animals);
    },
    removeAnimal: (state, action) => {
      state.animals = state.animals.filter(
        (animal) => animal.id !== action.payload
      );
      saveToLocalStorage("animals", state.animals);
    },
    editAnimal: (state, action) => {
      const { id, name, image } = action.payload;

      const currentAnimal = state.animals.find((animal) => animal.id === id);
      if (currentAnimal) {
        currentAnimal.name = name;
        currentAnimal.image = image;
      }
    },
    sortAscAnimal: (state, action) => {
      const { sortBy } = action.payload;
      const sortedAnimals = [...state.animals].sort((a, b) =>
        a[sortBy].localeCompare(b[sortBy])
      );
      state.animals = sortedAnimals;
    },
    sortDescAnimal: (state, action) => {
      const { sortBy } = action.payload;
      const sortedAnimals = [...state.animals].sort((a, b) =>
        b[sortBy].localeCompare(a[sortBy])
      );
      state.animals = sortedAnimals;
    },
  },
});

const saveToLocalStorage = (
  key: string,
  data: { id: string; name: string; image: string }[]
) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const {
  addAnimal,
  removeAnimal,
  sortAscAnimal,
  sortDescAnimal,
  editAnimal,
} = animalSlice.actions;

export default animalSlice.reducer;
