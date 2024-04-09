import React from 'react'

function Model718() {
    const Data = [
        {
            name: "718 Cayman",
            price: "from INR 14,772,000",
            img: "https://files.porsche.com/filestore/image/multimedia/none/982-718-c7-modelimage-sideshot/thumbwhite/230138a1-e874-11ea-80cd-005056bbdc38;sK;twebp/porsche-thumbwhite.webp"
        },
        {
            name: "718 Boxster",
            price: "from INR 15,213,000",
            img: "https://files.porsche.com/filestore/image/multimedia/none/982-718-bo-modelimage-sideshot/thumbwhite/93fa2a92-fee1-11ed-8103-005056bbdc38;sK;twebp/porsche-thumbwhite.webp"
        },
        {
            name: "718 Cayman Style Edition",
            price: "from INR 15,568,000",
            img: "https://files.porsche.com/filestore/image/multimedia/none/982-718-c7-se-modelimage-sideshot/thumbwhite/7bdc3629-4ea4-11ed-80f7-005056bbdc38;sK;twebp/porsche-thumbwhite.webp"
        },
        {
            name: "718 Boxster Style Edition",
            price: "from INR 16,009,000",
            img: "https://files.porsche.com/filestore/image/multimedia/none/982-718-bo-se-modelimage-sideshot/thumbwhite/a43e6499-4ea4-11ed-80f7-005056bbdc38;sK;twebp/porsche-thumbwhite.webp"
        },
        {
            name: "718 Cayman GTS 4.0",
            price: "from INR 16,751,000",
            img: "https://files.porsche.com/filestore/image/multimedia/none/982-718-c7-gts-4-modelimage-sideshot/thumbwhite/780ea921-a8d0-11eb-80d5-005056bbdc38;sQ;twebp/porsche-thumbwhite.webp"
        },
        {
            name: "718 Boxster GTS 4.0",
            price: "from INR 17,195,000",
            img: "https://files.porsche.com/filestore/image/multimedia/none/982-718-bo-gts-4-modelimage-sideshot/thumbwhite/f233375d-ffb1-11ed-8103-005056bbdc38;sK;twebp/porsche-thumbwhite.webp"
        },
        {
            name:"718 Cayman GT4 RS",
            price:"from INR 27,443,000",
            img:"https://files.porsche.com/filestore/image/multimedia/none/982-718-cayman-gt4rs-modelimage-sideshot/thumbwhite/0700b82a-f3b8-11ed-8103-005056bbdc38;sK;twebp/porsche-thumbwhite.webp"

        }
        
    ]
    return (
        <div>
            <div className='bg-dark text-light'>
            <div className='container'>
                <div className='text-center p-5'>
                    <div className='fw-bold fs-3 text-primary'>Porsche Car Configurator</div>
                    <div className='fw-bold fs-4'> All 718 Models</div>
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

export default Model718