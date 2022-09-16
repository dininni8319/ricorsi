import Loader3 from '../UI/Loaders/Loader3/index';
import Aside from '../UI/Aside/index';

const Homepage = () => {
    return (
        <div className="height-custom">
            <div className='w-30'>
                <Aside></Aside>
            </div>
            <div className="flex justify-center align-middle homepage-body-style">
             <Loader3 />
            </div>
        </div>
    )
}

export default Homepage;
