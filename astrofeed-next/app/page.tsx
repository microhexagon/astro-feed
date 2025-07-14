import Navbar from './components/Navbar';
import HeroSection from './landing page/HeroSection';
import Featured from './landing page/Featured'
import ExploreMore from'./landing page/ExploreMore';
import Footer from './components/Footer';


export default function Home(){
    return (
        <>
        <Navbar/>
        <div className='pt-10 pr-40 pb-10 pl-40 bg-gray-800 text-white '>
            <HeroSection/>
            <Featured/>
            <ExploreMore/>
            <Footer />
        </div>
        </>
    )
}