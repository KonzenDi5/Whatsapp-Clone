//index.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import { auth, db } from '../../server/firebaseConfig';
import { WRapper, Container, Logo, Button, FormStyles, Input, Title } from './styles';
import logo from "../../assets/whatlogo.png";
import { Link } from 'react-router-dom';


export const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                db.collection('usuarios').doc(authUser.user.uid).set({
                    email: email,
                });
                console.log('User registra no firebase pelo email/password com sucesso')
                navigate('/home');
            })
            .catch((error) => alert(error.message));
    };

    const googleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
            .then((result) => {
                db.collection('usuarios').doc(result.user.uid).set({
                    id: result.user.uid,
                    email: result.user.email,
                    name: result.user.displayName, 
                    photoURL: result.user.photoURL, 
                    contatos: ""
                });
                console.log('User registrado no firebase pelo google com sucesso rapaiz')
                navigate('/home');
            })
            .catch((error) => alert(error.message));
    };

    return (
        <WRapper>
            <Container>
                <Link to='/'>
                <Logo src={logo} alt='logo' />
                </Link>
                <Title>REGISTRO</Title>
                <FormStyles onSubmit={register}>
                    <Input type="text" placeholder="Nome" required />
                    <Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                    <Input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} required />
                </FormStyles>
                <Button primary type="submit" onClick={register}>REGISTRE-SE</Button>
                <Button primary onClick={googleLogin}>ENTRE COM O GOOGLE</Button>
            </Container>
        </WRapper>
    );
};
