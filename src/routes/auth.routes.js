import { Route, Routes } from 'react-router-dom'

import { NotFound, Initial  } from '../pages'


export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Initial />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
