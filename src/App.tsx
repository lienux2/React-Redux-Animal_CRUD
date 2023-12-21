import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import { RootLayout } from './layout/RootLayout'
import { AnimalForm } from './components/animalForm/AnimalForm'
import { AnimalCard } from './components/animalCard/AnimalCard'
import { EditAnimal } from './components/editAnimal/EditAnimal'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<AnimalCard />} />
      <Route path='add' element={<AnimalForm />} />
      <Route path='update/:id' element={<EditAnimal />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App