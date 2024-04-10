import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import bg from '../Assets/porsche-normal-bg.webp'

function Machan() {
    let [count, setCount] = useState(0)
    const navigate=useNavigate();
    const data=[
        
        {
            name:'Macan',
            price:'from INR 8,806,000',
            acceleration: "256",
            speed: "5.4",
            power: "265 kW/355 PS",
            img:"https://files.porsche.com/filestore/image/multimedia/none/pa3-r4-modelexplorer/normal/237e6fa9-7dec-11ec-80e9-005056bbdc38;sP;twebp/porsche-normal.webp"
        },
        {
            name:'Macan S',
            price:'from INR 14,352,000',
            acceleration: "293",
            speed: "4.2",
            power: "283 kW/385 PS",
            img:"https://files.porsche.com/filestore/image/multimedia/none/pa3-gts-modelexplorer/normal/19df7d06-7dec-11ec-80e9-005056bbdc38;sP;twebp/porsche-normal.webp"
        },
        {
            name:'Macan GTS',
            price:'from INR 15,347,000',
            acceleration: "256",
            speed: "5.4",
            power: "265 kW/355 PS",
            img:"https://files.porsche.com/filestore/image/multimedia/none/pa3-gts-modelexplorer/normal/19df7d06-7dec-11ec-80e9-005056bbdc38;sP;twebp/porsche-normal.webp"
        },
    ]
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

export default Machan