import React from 'react'

function Taycan() {
    const Data=[
        {
            name:"Taycan",
            price:"TBA*",
            img:"https://files.porsche.com/filestore/image/multimedia/none/j1-2nd-taycan-modelimage-sideshot/thumbwhite/aed841db-c117-11ee-8116-005056bbdc38;sK;twebp/porsche-thumbwhite.webp"
        },
        {
            name:"Taycan 4S",
            price:"TBA*",
            img:"https://files.porsche.com/filestore/image/multimedia/none/j1-2nd-taycan-4s-modelimage-sideshot/thumbwhite/de04427b-c117-11ee-8116-005056bbdc38;sK;twebp/porsche-thumbwhite.webp"
        },
        {
            name:"Taycan turbo",
            price:"TBA*",
            img:"https://files.porsche.com/filestore/image/multimedia/none/j1-2nd-taycan-tu-modelimage-sideshot/thumbwhite/2570bbe8-c118-11ee-8116-005056bbdc38;sK;twebp/porsche-thumbwhite.webp"
        },
        
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
                                        <span className='badge bg-success'>NEW</span>
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

export default Taycan