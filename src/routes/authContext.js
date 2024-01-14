import React, { createContext, useState, useContext, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// contexto de autenticação
const AuthContext = createContext();

// Criando um provedor de autenticação
export const AuthProvider = ({ children }) => {
  // Inicializando o estado do usuário como null
  const [user, setUser] = useState(null);

  // Usando o hook useEffect para lidar com a mudança de estado de autenticação
  useEffect(() => {
    // Inscrevendo-se para atualizações de estado de autenticação
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      // Se o usuário estiver autenticado, definimos o estado do usuário
      // para um objeto contendo uid e email
      // Caso contrário, definimos o estado do usuário como null
      setUser(authUser ? { uid: authUser.uid, email: authUser.email } : null);
    });

    // Retornando uma função de limpeza que cancela a inscrição para atualizações de estado de autenticação
    return unsubscribe;
  }, []);

  // Retornando o provedor de contexto que fornece o estado do usuário para seus componentes filhos
  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};

// Criando um hook personalizado para usar o contexto de autenticação
export const useAuth = () => {
  // Usando o hook useContext para acessar o contexto de autenticação
  const context = useContext(AuthContext);

  // Se o contexto não estiver disponível (ou seja, useAuth não está sendo usado dentro de um AuthProvider),
  // lançamos um erro
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }

  // Retornando o contexto de autenticação
  return context;
};
