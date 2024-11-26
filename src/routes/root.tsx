import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Root() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Header />
      <main className='p-6'>
        <Outlet />
      </main>
    </div>
  );
}
