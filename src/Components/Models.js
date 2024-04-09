import React from 'react'
import './models.css'
import {useNavigate} from 'react-router-dom'

import pic1 from '../Assets/porsche911.jpg'
import pic2 from '../Assets/porscheCayenne.jpg'
import pic3 from '../Assets/porscheMacan.jpg'
import pic4 from '../Assets/porschePanamera.jpg'
import pic5 from '../Assets/porshce718.jpg'
import pic6 from '../Assets/porshceTaycan.jpg'


function Models() { 
    const navigate=useNavigate()
    return (
        <div className='bg-dark text-light models'>
            <div className='container'>
                <div className='models-heading'>Choose Your Model</div>
                <div className='mt-5 '>
                    <div className='models-wrapper'>
                        <div className='row'>
                            <div className='col-4'>
                                <div className='sub' onClick={()=>navigate('/911')}>
                                    <img src={pic1} />
                                    <div>
                                        <p className='fw-bold'>PORSCHE 911</p>
                                        <button className='btn btn-outline-light'>Show </button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className='sub' onClick={()=>navigate('/cayenne')}>
                                    <img src={pic2} />
                                    <div>
                                        <p className='fw-bold'>PORSCHE CAYENNE</p>
                                        <button className='btn btn-outline-light'>Show </button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className='sub' onClick={()=>navigate('/718')}>
                                    <img src={pic5} />
                                    <div>
                                        <p className='fw-bold'>PORSCHE 718</p>
                                        <button className='btn btn-outline-light'>Show </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-4'>
                                <div className='sub' onClick={()=>navigate('/macan')}>
                                    <img src={pic3} />
                                    <div>
                                        <p className='fw-bold'>PORSCHE MACAN</p>
                                        <button className='btn btn-outline-light'>Show </button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className='sub' onClick={()=>navigate('/panamera')}>
                                    <img src={pic4} />
                                    <div>
                                        <p className='fw-bold'>PORSCHE PANAMERA</p>
                                        <button className='btn btn-outline-light'>Show </button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className='sub' onClick={()=>navigate('/taycan')}>
                                    <img src={pic6} />
                                    <div>
                                        <p className='fw-bold'>PORSCHE TAYCAN</p>
                                        <button className='btn btn-outline-light'>Show </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Models