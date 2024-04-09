import React from 'react'

function Panamera() {
    const Data = [
        {
            name: "Panamera",
            price: "from INR 16,756,000",
            img: 'https://files.porsche.com/filestore/image/multimedia/none/972-g3-v6-modelimage-sideshot/thumbwhite/bb3a2184-b137-11ee-8112-005056bbdc38;sK;twebp/porsche-thumbwhite.webp'
        }
    ]
    return (
        <div>
            <div className='bg-dark text-light'>
                <div className='container'>
                    <div className='text-center p-5'>
                        <div className='fw-bold fs-3 text-primary'>Porsche Car Configurator</div>
                        <div className='fw-bold fs-4'>Panamera Models</div>
                    </div>

                    <div className='row mt-5'>
                        {
                            Data.map((item) => {
                                return <div className='col-4 mb-4'>
                                    <div className='model911'>
                                        <img src={item.img} className='rounded' />
                                        <div className='fw-bold mt-3 fs-5 text-warning'>{item.name}</div>
                                        <div className='text-info'>{item.price}</div>
                                    </div>
                                </div>
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Panamera