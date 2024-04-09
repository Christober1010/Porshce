import React from 'react'

function Machan() {
    const Data=[
        {
            name:'Macan Turbo Electric',
            price:'from INR 16,505,000',
            img:'https://files.porsche.com/filestore/image/multimedia/none/macan-bev-turbo-modelimage/thumbwhite/51395e05-aacb-11ee-8112-005056bbdc38;sK;twebp/porsche-thumbwhite.webp'
        },
        {
            name:'Macan',
            price:'from INR 8,806,000',
            img:'https://files.porsche.com/filestore/image/multimedia/none/pa3-r4-modelimage-sideshot/thumbwhite/4833315f-de41-11eb-80d9-005056bbdc38;sK;twebp/porsche-thumbwhite.webp'
        },
        {
            name:'Macan S',
            price:'from INR 14,352,000',
            img:'https://files.porsche.com/filestore/image/multimedia/none/pa3-s-modelimage-sideshot/thumbwhite/c44c3e83-c173-11ec-80ef-005056bbdc38;sK;twebp/porsche-thumbwhite.webp'
        },
        {
            name:'Macan GTS',
            price:'from INR 15,347,000',
            img:'https://files.porsche.com/filestore/image/multimedia/none/pa3-gts-modelimage-sideshot/thumbwhite/53c319ab-de44-11eb-80d9-005056bbdc38;sK;twebp/porsche-thumbwhite.webp'
        },
    ]
  return (
    <div>
        <div className='bg-dark text-light'>
            <div className='container'>
                <div className='text-center p-5'>
                    <div className='fw-bold fs-3 text-primary'>Porsche Car Configurator</div>
                    <div className='fw-bold fs-4'>Macan Models</div>
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

export default Machan