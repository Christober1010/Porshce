import React, { useState } from 'react'
import bg from '../Assets/porsche-normal-bg.webp'
import {useNavigate} from 'react-router-dom'



function Model718() {
    let [count,setCount]=useState(0)
    const data = [
        {
            name: "718 Cayman",
            price: "from INR 14,772,000",
            acceleration: "293",
            speed: "4.2",
            power: "283 kW/385 PS",
            img: "https://files.porsche.com/filestore/image/multimedia/none/718-cayman-modelexplorer/normal/21f297c3-2d57-11eb-80d0-005056bbdc38;sP;twebp/porsche-normal.webp"
        },
        {
            name: "718 Boxster",
            price: "from INR 15,213,000",
            acceleration: "256",
            speed: "5.4",
            power: "265 kW/355 PS",
            img: "https://files.porsche.com/filestore/image/multimedia/none/718-boxster-modelexplorer/normal/cc88ba33-fee0-11ed-8103-005056bbdc38;sP;twebp/porsche-normal.webp"
        },
        {
            name: "718 Cayman Style Edition",
            price: "from INR 15,568,000",
            acceleration: "293",
            speed: "4.2",
            power: "283 kW/385 PS",
            img: "https://files.porsche.com/filestore/image/multimedia/none/718-cayman-se-modelexplorer/normal/fd34d6db-4f76-11ed-80f7-005056bbdc38;sP;twebp/porsche-normal.webp"
        },
        {
            name: "718 Boxster Style Edition",
            price: "from INR 16,009,000",
            acceleration: "256",
            speed: "5.4",
            power: "265 kW/355 PS",
            img: "https://files.porsche.com/filestore/image/multimedia/none/718-boxster-se-modelexplorer/normal/da7523bc-4f76-11ed-80f7-005056bbdc38;sP;twebp/porsche-normal.webp"
        },
        {
            name: "718 Cayman GTS 4.0",
            price: "from INR 16,751,000",
            acceleration: "293",
            speed: "4.2",
            power: "283 kW/385 PS",
            img: "https://files.porsche.com/filestore/image/multimedia/none/718-cayman-gts4%C2%B5c2%C2%B5b5z0-modelexplorer/normal/2efc8b8a-2d57-11eb-80d0-005056bbdc38;sP;twebp/porsche-normal.webp"
        },
        {
            name: "718 Boxster GTS 4.0",
            price: "from INR 17,195,000",
            acceleration: "256",
            speed: "5.4",
            power: "265 kW/355 PS",
            img: "https://files.porsche.com/filestore/image/multimedia/none/718-boxster-gts4%C2%B5c2%C2%B5b5z0-modelexplorer/normal/aa360cca-ffb2-11ed-8103-005056bbdc38;sP;twebp/porsche-normal.webp"
        },
        {
            name:"718 Cayman GT4 RS",
            price:"from INR 27,443,000",
            acceleration: "293",
            speed: "4.2",
            power: "283 kW/385 PS",
            img:"https://files.porsche.com/filestore/image/multimedia/none/718-boxster-gts4%C2%B5c2%C2%B5b5z0-modelexplorer/normal/aa360cca-ffb2-11ed-8103-005056bbdc38;sP;twebp/porsche-normal.webp"

        }
        
    ]
    const navigate=useNavigate();

    return (
        <div className=''>
            <img src={bg} height={'100%'} width={'100%'} className='preview-911' />
            <div className='preview-overlay'>
            <button className='btn btn-outline-light back-btn' onClick={()=>navigate('/models')}>All Models</button>
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
                    count === data.length-1 ? "" : <button className='btn btn-outline-warning preview-controls-right' onClick={() => setCount(++count)}><i className='fa fa-angle-right'></i></button>
                }
            </div>
        </div>
    )
}

export default Model718