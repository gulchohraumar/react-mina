import { useLocation } from 'react-router-dom';
import './sell-item.scss'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';

export default function SellItem() {
    const data = useSelector((state) => state);
    const [itemCount, setItemCount] = useState(1); 

    function handleDecrement() {
        itemCount > 1 ? setItemCount(itemCount - 1) : setItemCount(1);
    }

    function handleIncrement() {
        setItemCount(itemCount + 1);
    }

    function handleAddBag() {
        console.log('add')
    }

    useEffect(() => {
        console.log(data);
    }, [])


    return <>
        <div className="p-5 ">
            <div className="row">
                <div className="col-md-6 text-end ">
                    <img className='img' src={data.url} alt="" />
                </div>
                <div className="col-md-6 d-flex align-items-center px-5">
                    <div className="">
                        <h1 className='font-size-3'>{data.name}</h1>
                        <p className='font-size-1-3 my-4'>
                            {
                                data.status == 2 ? (<span className='price me-2' style={{ textDecoration: 'line-through', color: '#999999' }}>{data.price}</span>) : null
                            }
                            {
                                data.status == 3 ? (<span style={{ color: '#999999' }}>SOLD OUT</span>) : null
                            }
                            {
                                (data.status == 1 || data.status == 2) ? (<span className='price'>{data.updatePrice}</span>) : null
                            }
                        </p>

                        {
                            data?.colors?.length && data?.colorVariants ? (
                                <p className='my-4 pt-2' style={{ fontSize: '1.1rem' }}>
                                    <span className='d-block'>Color</span>
                                    <select className='color-list mt-2 col-lg-6'>
                                        {
                                            data?.colors?.map((dt, key) => {
                                                return <option key={key} value={dt.id}>{dt.value}</option>
                                            })
                                        }
                                    </select>
                                </p>
                            ) : null
                        }

                        <p className='my-4 counter-buttons' style={{ fontSize: '1.1rem' }}>
                            <button onClick={handleDecrement}>-</button>
                            <button>{itemCount}</button>
                            <button onClick={handleIncrement}>+</button>
                        </p>

                        <div className="mt-5">
                            <button onClick={handleAddBag} disabled={data.status == 3} className='cursor shop-now bg-purple-btn disabled'>Add to bag</button>
                        </div>

                        <div className='my-5 py-4' style={{ fontSize: '1.1rem' }}>
                            <p> {data?.description} </p>
                            <span className='d-block'>Material:  {data?.material}</span>
                            <span className='d-block'>Color:  {data?.color}</span>
                            <span className='d-block'>Measurements:  {data?.measurement}</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
}