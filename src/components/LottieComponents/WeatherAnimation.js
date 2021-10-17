import Lottie from 'react-lottie';
import { useState, useEffect } from 'react/cjs/react.development';

function WeatherAnimation({ icon }) {

    const [animationD, setAnimationD] = useState();

    //get icon dynamically
    useEffect(() => {
        async function loadData() {
            const data = await import(`../../assets/${icon}.json`);
            setAnimationD(data);
        }

        loadData();
        console.log(animationD)
    }, [animationD, icon]);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationD && animationD.default,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <div>
            <Lottie
                options={defaultOptions}
                height={100}
                width={100}
            />
        </div>
    )
}

export default WeatherAnimation;