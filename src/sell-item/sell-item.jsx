import './sell-item.scss'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import { setBagListData } from '../store-slices/bag-list';
import success from '../utils/utils';

export default function SellItem() {
    const data = useSelector((state) => state);
    const [itemCount, setItemCount] = useState(1);
 
    function handleDecrement() {
        itemCount > 1 ? setItemCount(itemCount - 1) : setItemCount(1);
    }

    function handleIncrement() {
        setItemCount(itemCount + 1);
    }

    const dispatch = useDispatch();
    function handleAddBag() {
        let model = {
            id: data.sellItem.id,
            name: data.sellItem.name,
            url: data.sellItem.url,
            urlString: data.sellItem.urlString,
            price: data.sellItem.price,
            updatePrice: data.sellItem.updatePrice,
            status: data.sellItem.status,
            itemCount: itemCount,
        };

        let arr = [...data.bagList.dataList, model];
        dispatch(setBagListData({ dataList: arr }));
        success();
    }

  

    return <>
        <div className="p-5 ">
            <div className="row">
                <div className="col-md-6 text-end ">
                    <img className='img' src={data.sellItem.url} alt="" />
                </div>
                <div className="col-md-6 d-flex align-items-center px-5">
                    <div className=""> 
                        <h1 className='font-size-3'>{data.sellItem.name}</h1>
                        <p className='font-size-1-3 my-4'>
                            {
                                data.sellItem.status === 2 ? (<span className='price me-2' style={{ textDecoration: 'line-through', color: '#999999' }}>{data.sellItem.price}</span>) : null
                            }
                            {
                                data.sellItem.status === 3 ? (<span style={{ color: '#999999' }}>SOLD OUT</span>) : null
                            }
                            {
                                (data.sellItem.status === 1 || data.sellItem.status === 2) ? (<span className='price'>{data.sellItem.updatePrice}</span>) : null
                            }
                        </p>

                        {
                            data?.sellItem.colors?.length && data?.sellItem.colorVariants ? (
                                <p className='my-4 pt-2' style={{ fontSize: '1.1rem' }}>
                                    <span className='d-block'>Color</span>
                                    <select className='color-list mt-2 col-lg-6'>
                                        {
                                            data?.sellItem.colors?.map((dt, key) => {
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
                            <button onClick={handleAddBag} disabled={data.sellItem.status === 3} className='cursor shop-now bg-purple-btn disabled'>Add to bag</button>
                        </div>

                        <div className='my-5 py-4' style={{ fontSize: '1.1rem' }}>
                            <p> {data?.sellItem.description} </p>
                            <span className='d-block'>Material:  {data?.sellItem.material}</span>
                            <span className='d-block'>Color:  {data?.sellItem.color}</span>
                            <span className='d-block'>Measurements:  {data?.sellItem.measurement}</span>
                        </div>
                    </div>

                </div>
            </div> 
        </div>
    </>
}