import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'
import { useAuth } from './authContext' // Certifique-se de importar useAuth

export const RoutesApp = () => {
  const { user } = useAuth() // Use useAuth para obter o estado do usuário

  return user ? <AppRoutes /> : <AuthRoutes /> // aqui vemos se o usuário está presente
}
