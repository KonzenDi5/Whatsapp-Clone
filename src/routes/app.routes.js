import { Route, Routes } from 'react-router-dom'

import { NotFound, Home } from '../pages'

export const AppRoutes = () => {
  return (
    <>
      {/* <Sidebar /> */}

      <Routes>
         
        <Route path="*" element={<NotFound />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </>
  )
}
