import { Inter } from 'next/font/google'
import { hasCookie } from 'cookies-next';
import Login from './login'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const token = hasCookie('token');
  if(token){
    return <Home/>;
  } else {
    return <Login/>;
  }
}
