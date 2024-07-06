import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';
import AuthenticationService from '../services/AuthenticationService';
import dayjs from 'dayjs';

export const Callback = () => {
  
  const { dispatch } = useContext(AuthContext)

  const navigate = useNavigate()

  const accessToken = new URLSearchParams(window.location.hash).get('access_token')
  
  const expiresIn = new URLSearchParams(window.location.hash).get('expires_in')

  if(accessToken){
      window.localStorage.setItem('access_token', accessToken);
      window.localStorage.setItem('expires_in', dayjs().add(expiresIn, 'second').toDate());
  }

  const existentToken = window.localStorage.getItem('access_token');

  if(!existentToken) window.location = process.env.REACT_APP_LOGIN_URL
  
  AuthenticationService.getUser(existentToken).then(res => {
    dispatch(res)
    navigate('/', {
        replace: true
    })
  })
  
}
