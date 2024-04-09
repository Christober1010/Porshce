import React, { useState } from 'react'
import bg from '../Assets/porsche-normal-bg.webp'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { isDisabled } from '@testing-library/user-event/dist/utils';
function Model911() {
    let [count, setCount] = useState(0)

    const data = [
        {
            name: "911 Carrera",
            price: "from INR 18,646,000",
            acceleration: "293",
            speed: "4.2",
            power: "283 kW/385 PS",
            img: "	https://files.porsche.com/filestore/image/multimedia/none/992-c2-modelexplorer-04/normal/6a6ac64c-cf38-11eb-80d9-005056bbdc38;sP;twebp/porsche-normal.webp"

        },
        {

            name: "911 Carrera T",
            price: "from INR 19,430,000",
            acceleration: "256",
            speed: "5.4",
            power: "265 kW/355 PS",
            img: "https://files.porsche.com/filestore/image/multimedia/none/992-carrera-t-modelexplorer/normal/b34fb743-4ede-11ed-80f7-005056bbdc38;sP;twebp/porsche-normal.webp"
        },
        {
            name: "911 Carrera Cabriolet",
            price: "from INR 19,732,000",
            acceleration: "293",
            speed: "4.2",
            power: "283 kW/385 PS",
            img: "https://files.porsche.com/filestore/image/multimedia/none/992-c2cab-modelexplorer-04/normal/81ea4749-cf38-11eb-80d9-005056bbdc38;sP;twebp/porsche-normal.webp"
        },
        {
            name: "911 Carrera S",
            price: "from INR 20,117,000",
            acceleration: "256",
            speed: "5.4",
            power: "265 kW/355 PS",
            img: "https://files.porsche.com/filestore/image/multimedia/none/992-c2s-modelexplorer-04/normal/e6983412-cf38-11eb-80d9-005056bbdc38;sP;twebp/porsche-normal.webp"
        },
        {
            name: "911 Carrera S Cabriolet",
            price: "from INR 21,792,000",
            acceleration: "293",
            speed: "4.2",
            power: "283 kW/385 PS",
            img: "https://files.porsche.com/filestore/image/multimedia/none/992-c2scab-modelexplorer-04/normal/f3321db9-cf38-11eb-80d9-005056bbdc38;sP;twebp/porsche-normal.webp"
        },
        {

            name: "911 Turbo S",
            price: "from INR 33,536,000",
            acceleration: "256",
            speed: "5.4",
            power: "265 kW/355 PS",
            img: "https://files.porsche.com/filestore/image/multimedia/none/992-tus-modelexplorer-01/normal/308346f4-b15c-11ea-80ca-005056bbdc38;sP;twebp/porsche-normal.webp"
        },
        {
            name: "911 GT3",
            price: "from INR 27,496,000",
            acceleration: "293",
            speed: "4.2",
            power: "283 kW/385 PS",
            img: "https://files.porsche.com/filestore/image/multimedia/none/992-gt3-modelexplorer/normal/6bcbc899-51bd-11eb-80d1-005056bbdc38;sP;twebp/porsche-normal.webp"
        },
        {
            name: "911 GT3 with Touring Package",
            price: "from INR 27,496,000",
            acceleration: "256",
            speed: "5.4",
            power: "265 kW/355 PS",
            img: "https://files.porsche.com/filestore/image/multimedia/none/992-gt3-touring-modelexplorer/normal/c31ca7e1-9ba3-11eb-80d4-005056bbdc38;sP;twebp/porsche-normal.webp"
        },
        {
            name: "911 GT3 RS",
            price: "from INR 35,056,000",
            acceleration: "293",
            speed: "4.2",
            power: "283 kW/385 PS",
            img: "https://files.porsche.com/filestore/image/multimedia/none/992-gt3-rs-modelexplorer/normal/c310eed8-1a15-11ed-80f5-005056bbdc38;sP;twebp/porsche-normal.webp"
        },
        {
            name: "911 S/T",
            price: "from INR 42,620,000",
            acceleration: "256",
            speed: "5.4",
            power: "265 kW/355 PS",
            img: "https://files.porsche.com/filestore/image/multimedia/none/992-s-t-modelexplorer/normal/3b95cec4-217d-11ee-8103-005056bbdc38;sP;twebp/porsche-normal.webp"
        },
    ]

    
    return (
        <div className=''>
            <img src={bg} height={'100%'} width={'100%'} className='preview-911' />
            <div className='preview-overlay'>
                <div className='text-center'>
                    <div className='fw-bolder fs-1 text-warning'>{data[count].name}</div>
                    <div className='fw-bolder  text-light'>{data[count].price}</div>
                    <img src={data[count].img} />
                </div>

                <div>
                    <div className='row text-light text-center'>
                        <div className='col border p-3 mx-3'>
                            <div className='fw-bold fs-3  text-warning'>{data[count].power}</div>
                            <div className='fw-bold'>Power (kW)/Power (PS)</div>
                        </div>
                        <div className='col border p-3 mx-3'>
                            <div className='fw-bold fs-3  text-warning'>{data[count].speed}s</div>
                            <div className='fw-bold'>Acceleration 0 - 100 km/h</div>
                        </div>
                        <div className='col border p-3 mx-3'>
                            <div className='fw-bold fs-3 text-warning'>{data[count].acceleration}Km/hr</div>
                            <div className='fw-bold'>Top Speed</div>
                        </div>
                    </div>
                </div>

                

            </div>

            <div className=''>
                {
                    count === 0 ? "" : <button className='btn btn-outline-warning preview-controls-left' onClick={() => setCount(--count)}><i className='fa fa-angle-left'></i></button>
                }
                {
                    count === 9 ? "" : <button className='btn btn-outline-warning preview-controls-right' onClick={() => setCount(++count)}><i className='fa fa-angle-right'></i></button>
                }
            </div>
        </div>
    )


}

export default Model911