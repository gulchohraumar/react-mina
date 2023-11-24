import './bestseller.scss'

export function BestSeller() {

    let itemArray = [
        {
            name: "'Candy' Flowerpot",
            url: require('../assets/img1.avif'),
            price: '59.90$',
            updatePrice: '50.30$',
            status: 2
        },
        {
            name: "'Drop' Vase",
            url: require('../assets/img2.avif'),
            price: '59.90$',
            updatePrice: '55.57$',
            status: 1,
        },
        {
            name: "'Wave' Vase",
            url: require('../assets/img3.avif'),
            price: '49.80$',
            updatePrice: '45.00$',
            status: 2,
        },
        {
            name: "'Sun' Vase",
            url: require('../assets/img4.avif'),
            price: '49.80$',
            updatePrice: '45.00$',
            status: 3,
        },
    ]
    return <>
        <div className='bestSellers'>
            <h1 className='p-5 text-center'>
                Our bestsellers
            </h1>

            <div className="row py-4 px-5 main-bestseller">
                {
                    itemArray.map((dt, key) => {
                        return (
                            <a key={key} className="col-md-3 cursor-pointer" href='https://zyro.com/preview/mina?returnPath=%2Ftemplates'>
                                <div  >
                                <div className="" style={{ position: 'relative' }}>
                                    <div className="product-image">
                                        <img className='col-sm-12' src={dt.url} alt="" />
                                    </div>

                                    {
                                        dt.status == 2 ? (<div className='product-sale'> Sale </div>) : null
                                    }
                                </div>

                                <div className='bestseller-content'>
                                    <h3 className='text-center mt-3'>{dt.name}</h3>

                                    <p className='text-center'>
                                        {
                                            dt.status == 2 ? (<span className='price me-2' style={{ textDecoration: 'line-through', color: '#999999' }}>{dt.price}</span>) : null
                                        }
                                        {
                                            dt.status == 3 ? (<span style={{ color: '#999999' }}>SOLD OUT</span>) : null
                                        }
                                        {
                                            (dt.status == 1 || dt.status == 2 ) ? (<span className='price'>{dt.updatePrice}</span>) : null
                                        }
                                    </p>
                                </div>
                            </div>
                            </a>
                        )
                    })
                }



                {/* <div className="col-md-3">
                    <div className="bg-danger">
                        <img className='col-sm-12' src={img1} alt="" />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="bg-danger">
                        <img className='col-sm-12' src={img1} alt="" />
                    </div>
                </div> */}
            </div>

        </div>
    </>
}