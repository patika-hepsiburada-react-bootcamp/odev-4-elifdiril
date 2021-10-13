import Lottie from 'react-lottie';
import * as animationData from '../../assets/humidly.json';

function Humid(){

    const defaultOptions={
        loop: true,
        autoplay: true,
        animationData: animationData.default,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return(
        <div>
            <Lottie
                options={defaultOptions}
                height={35}
                width={35}
            />
        </div>
    )
}

export default Humid;