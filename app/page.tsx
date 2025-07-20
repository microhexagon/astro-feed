import HeroSection from '../components/landing page/HeroSection';
import Featured from '../components/landing page/Featured'
import ExploreMore from'../components/landing page/ExploreMore';


export default function Home(){
    return (
        <>
        
        <div className='pt-10 pr-40 pb-10 pl-40 bg-gray-800 text-white '>
            <HeroSection/>
            <Featured/>
            <ExploreMore/>
        </div>
        </>
    )
}