import { WRapper, Container, Logo, Input, Button, Title } from "./styles"
import logo from "../../assets/whatlogo.png";
import { useNavigate } from "react-router-dom";
import firebase from 'firebase/compat/app';
import { auth, db } from '../../server/firebaseConfig';
import { Link } from "react-router-dom";




export const Login = () =>{

    const navigate = useNavigate()


    const googleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
            .then((result) => {
                db.collection('usuarios').doc(result.user.uid).set({
                    email: result.user.email,
                });
                console.log('User registra no firebase pelo google com sucesso rapaiz')
                navigate('/home');
            })
            .catch((error) => alert(error.message));
    };



    return(<>
    <WRapper>
        <Container>
        <Link to='/'>
        <Logo src={logo} alt='logo' />
        </Link>
        <Title>LOGIN</Title>
        <Input type="email" placeholder="Email"  />
        <Input type="password" placeholder="Senha"  />
        <Button primary>LOGIN</Button>
        <Button primary onClick={googleLogin}>ENTRE COM O GOOGLE</Button>
        </Container>
    </WRapper>
    
    </>)
}