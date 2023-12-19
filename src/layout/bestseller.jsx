import { useNavigate } from 'react-router-dom';
import './bestseller.scss'
import { useSelector, useDispatch } from 'react-redux'
import { setDataSellItem } from '../store-slices/sell-item';
import { useEffect } from 'react';
import { setBagListData } from '../store-slices/bag-list';

export function BestSeller() {
    const navigate = useNavigate(); 
    const dispatch = useDispatch();

    let itemArray = [
        {
            id: 1,
            name: "'Candy' Flowerpot",
            url: require('../assets/img1.avif'),
            urlString: '../assets/img1.avif',
            price: '59.90$',
            updatePrice: '50.30$',
            status: 2,
            description: 'Beautiful hand-made flowerpot with the most gorgeous thick yellow matte glaze. The flowerpot has a hole for drainage. This piece is handmade in stoneware clay and one of a kind.',
            material: 'Stoneware clay; matte glaze.',
            colorVariants: true,
            colors: [
                {
                    id: 1,
                    value: 'Yellow'
                },
                {
                    id: 2,
                    value: 'Blue'
                },
                {
                    id: 3,
                    value: 'White'
                },
            ],
            color: 'Yellow, Blue or White',
            measurement: '10x10 cm',
        },
        {
            id: 2,
            name: "'Drop' Vase",
            url: require('../assets/img2.avif'),
            urlString: '../assets/img2.avif',
            price: '59.90$',
            updatePrice: '55.57$',
            status: 1,
            description: 'Gorgeous textured bud vase with a matte ivory glaze. Try using a few as a dining table centerpiece.',
            material: 'Stoneware clay; matte glaze.',
            colorVariants: true,
            colors: [
                {
                    id: 4,
                    value: 'Ivory'
                },
                {
                    id: 5,
                    value: 'Red'
                },
                {
                    id: 6,
                    value: 'Purple'
                },
            ],
            color: 'Ivory, Red and Purple',
            measurement: '18x12 cm',
        },
        {
            id: 3,
            name: "'Wave' Vase",
            url: require('../assets/img3.avif'),
            urlString: '../assets/img3.avif',
            price: '49.80$',
            updatePrice: '45.00$',
            status: 2,
            description: 'Inspired by the female figure, a beautiful vase for one or two stems. Finished in a soft purple-grey glaze.',
            material: 'Stoneware clay; matte glaze.',
            colorVariants: false,
            colors: [
                {
                    id: 7,
                    value: 'Lavender'
                }
            ],
            color: 'Lavender',
            measurement: '30x18 cm',
        },
        {
            id: 4,
            name: "'Sun' Vase",
            url: require('../assets/img4.avif'),
            urlString: '../assets/img4.avif',
            price: '49.80$',
            updatePrice: '45.00$',
            status: 3,
            description: 'Organic textured finish on a striking shape, this vase is one of a kind. Handmade and hand-textured in stoneware clay.',
            material: 'Stoneware clay; matte glaze.',
            colorVariants: false,
            colors: [
                {
                    id: 1,
                    value: 'Yellow'
                },
            ],
            color: 'Yellow',
            measurement: '15x10 cm',
        },
    ]
 
    function handleOpenItem(dt){
        console.log(dt);
        dispatch(setDataSellItem(dt))
        navigate(`/item/${dt.id}`, { state: dt});
    }

    // useEffect(() => {
    //     dispatch(setBagListData({ dataList: [] }))
    // }, [])

    

    return <> 
        <div className='bestSellers'>
            <h1 className='p-5 text-center font-size-3'>
                Our bestsellers
            </h1>

            <div className="row py-4 px-5 main-bestseller">
                {
                    itemArray.map((dt, key) => {
                        return (
                            <span onClick={() => handleOpenItem(dt)}  key={key} className="col-md-3 " >
                                <div className='cursor'>
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
                                                dt.status == 3 ? (<span style={{ color: '#999999' }}>OUT OF STOCK</span>) : null
                                            }
                                            {
                                                (dt.status == 1 || dt.status == 2) ? (<span className='price'>{dt.updatePrice}</span>) : null
                                            }
                                        </p>
                                    </div>
                                </div>
                            </span>
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