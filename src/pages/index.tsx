import { Inter } from 'next/font/google'
import { hasCookie } from 'cookies-next';
import Login from "./login";
import Homes from './home';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const token = hasCookie('token');
  return token ? <Homes /> : <Login />;
}
