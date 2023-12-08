import { useLocation } from 'react-router-dom';
import './sell-item.scss'
import { useEffect, useState } from 'react';

export default function SellItem() {
    const { state } = useLocation();
    const [urlString, setUrlString] = useState();

    useEffect(() => {
        console.log(state); 
        console.log(state.urlString);
    }, [])

    return <>
        <div className="p-5 bg-danger">
            <div className="row">
                <div className="col-md-6">
                    <img className='im' src={require(`${state?.urlString}`)} alt="" />
                </div>
            </div>
        </div>
    </>
}