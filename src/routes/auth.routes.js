import { Route, Routes } from 'react-router-dom'

import { NotFound, Initial, Register, Login  } from '../pages'


export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Initial />} />
      <Route path="*" element={<NotFound />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}
