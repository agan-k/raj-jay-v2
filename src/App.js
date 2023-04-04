import { Outlet } from "react-router-dom";
import {Footer, Header} from './layout';

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}