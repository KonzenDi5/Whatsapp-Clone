import { Route, Routes } from 'react-router-dom'

import { NotFound, Home, Initial } from '../pages'

export const AppRoutes = () => {
  return (
    <>

      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Initial />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </>
  )
}
