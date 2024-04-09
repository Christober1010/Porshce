import React from 'react'

function ModelCayenne() {
    const Data=[
        {
            name: "Cayenne",
            price: "from INR 13,561,000",
            img: "https://files.porsche.com/filestore/image/multimedia/none/e3-2nd-cayenne-modelimage-sideshot/thumbwhite/183a2390-8859-11ee-810c-005056bbdc38;sK;twebp/porsche-thumbwhite.webp"
        },
        {
            name: "Cayenne coupe",
            price: "from INR 14,185,000",
           img:" https://files.porsche.com/filestore/image/multimedia/none/e3-2nd-cayenne-coupe-modelimage-sideshot/thumbwhite/a0528981-8859-11ee-810c-005056bbdc38;sK;twebp/porsche-thumbwhite.webp"
        },
    ]
  return (
    <div>
        <div className='bg-dark text-light'>
            <div className='container'>
                <div className='text-center p-5'>
                    <div className='fw-bold fs-3 text-primary'>Porsche Car Configurator</div>
                    <div className='fw-bold fs-4'>Cayenne Models</div>
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

export default ModelCayenne