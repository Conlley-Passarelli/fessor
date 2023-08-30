import { createBrowserRouter } from "react-router-dom";
import { Landing } from './../pages/Landing'
import { TeacherList } from './../pages/TeacherList'
import { TeacherForm } from './../pages/TeacherForm'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />
  },
  {
    path: '/study',
    element: <TeacherList />
  },
  {
    path: '/give-classes',
    element: <TeacherForm />
  }
])