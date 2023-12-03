import './follow-path.scss'

export default function FollowPath() {
    let itemArray = [
        {
            name: "'Candy' Flowerpot",
            url: require('../../assets/flw1.avif'),
            price: '59.90$',
            updatePrice: '50.30$',
            status: 2
        },
        {
            name: "'Drop' Vase",
            url: require('../../assets/flw2.avif'),
            price: '59.90$',
            updatePrice: '55.57$',
            status: 1,
        },
        {
            name: "'Wave' Vase",
            url: require('../../assets/flw3.avif'),
            price: '49.80$',
            updatePrice: '45.00$',
            status: 2,
        },
    ]
    return <>
        <div className='bestSellers mt-5 '>
            <h1 className='p-4 text-center'>
                Follow us on Instagram
            </h1>

            <div className="row  px-5 main-bestseller">
                {
                    itemArray.map((dt, key) => {
                        return (
                            <div key={key} className="col-md-4">
                                <div  >
                                    <div className="" style={{ position: 'relative' }}>
                                        <div className="product-image">
                                            <img className='col-sm-12' src={dt.url} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
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

            <div className="text-center py-5">
                <span className='cursor shop-now learn-more'>@mina_studio</span>
            </div>

        </div>
    </>
}