import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import bg from '../Assets/porsche-normal-bg.webp'

function Panamera() {
    const data = [
        {
            name: "Panamera",
            price: "from INR 16,756,000",
            acceleration: "293",
            speed: "4.2",
            power: "283 kW/385 PS",
            img: "https://files.porsche.com/filestore/image/multimedia/none/972-g3-v6-modelexplorer/normal/9537b7ad-c9c5-11ee-8116-005056bbdc38;sP;twebp/porsche-normal.webp"
        }
    ]
    let [count, setCount] = useState(0)
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

export default Panamera