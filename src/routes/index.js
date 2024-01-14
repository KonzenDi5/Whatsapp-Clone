import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'

export const RoutesApp = () => {
  const { signed } = false

  return signed ? <AppRoutes /> : <AuthRoutes />
}
