import Header from '../Components/Header';
import Marquee from 'react-fast-marquee';
import Navbar from '../Components/Navbar';
import LeftNavbar from './LeftNavbar';
import RightNavbar from './RightNavbar';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <div className='font-poppins'>
            <header>
                <Header></Header>
                <section className='bg-gray-200 p-2 rounded w-11/12 mx-auto flex items-center gap-2'>
                    <p className='bg-red-700 rounded text-white p-2'>Latest</p>
                    <Marquee  speed={80} pauseOnHover={true}> 
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quibusdam fugit tempore dignissimos aspernatur rem corporis atque perspiciatis asperiores, reiciendis cumque at aut dolore velit, temporibus id. Repellendus, exercitationem qui.</p>
                    </Marquee>
                </section>
            </header>  
            <section className='w-11/12 mx-auto py-4'>
            <Navbar></Navbar>
            </section> 
            <main className='w-11/12 mx-auto grid md:grid-cols-12 pt-5 gap-6'>
            <aside className='left col-span-3'>
                <LeftNavbar></LeftNavbar>
            </aside>
            <section className='col-span-6'><Outlet></Outlet></section>
            <aside className='col-span-3'><RightNavbar></RightNavbar></aside>

            </main>
        </div>
    );
};

export default HomeLayout;