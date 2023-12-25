import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import logo from '../assets/img1.avif'
import { width } from '@mui/system';
import { useSelector, useDispatch } from 'react-redux'
import { setBagListData } from '../store-slices/bag-list';
import { store } from '..';
import watch from 'redux-watch'
import { setNavigation } from '../store-slices/navigation';
import { setSustainabilityAbout } from '../store-slices/sustainability-about-slice';
import { useContext } from 'react'
import { TestContext } from '../App';
import success from '../utils/utils';

export function Navbar() {

    const navArray = [
        {
            id: 1,
            name: 'Shop',
            url: '',
            subUrls: [
                {
                    name: 'All products',
                    url: '/all',
                },
                {
                    name: 'New collection',
                    url: '/new-collection',
                },
            ]
        },
        {
            id: 2,
            name: 'Sustainability',
            url: '/sustainability',
            subUrls: []
        },
        {
            id: 3,
            name: 'About',
            url: '/about',
            subUrls: []
        },
        {
            id: 4,
            name: 'Contact',
            url: '/contact',
            subUrls: []
        },
    ]

    const [sideNavState, setSideNavState] = useState(null);
    const [sideNavList, setSideNavList] = useState([]);
    const [bagListCount, setBagListCount] = useState(0);
    const dispatch = useDispatch();
    const data = useSelector((state) => state.bagList.dataList);

    let w = watch(store.getState, 'bagList.dataList')
    store.subscribe(w((newval, oldval, objectpath) => {
        setSideNavList(newval);
        setBagListCount(newval?.length);
    }))

    useEffect(() => {
        setSideNavList(data);
        setBagListCount(data?.length);
    }, []);

    const handleOpenBag = () => {
        setSideNavState(true);
    };

    const handleCloseBag = () => {
        setSideNavState(false);
    };

    const handleDeleteItem = (index) => {
        let arr = [...data]
        arr.splice(index, 1);
        dispatch(setBagListData({ dataList: arr }));
        success();
    };


    const sustanability = {
        name: 'Sustainability',
        urlString: require('../assets/page-header-content/sustainabilty.avif'),
        description: 'We care about our planet. For this reason, Mina aims to be operating sustainably and ethically at every level.',
        firstRowImgUrl: require('../assets/sustan-about/sustan-ethnos.avif'),
        firstRowTitle: 'Working Ethos',
        firstRowDesc: 'For Alex and Laura, planning ahead is a central component of sustainable design. Work begins with sketches of ideas before any clay is modeled. Fully conceptualizing and refining each design beforehand helps us to reduce material waste.',
        firstRowSemiDesc: 'We strive to work collaboratively at every stage. Our team efforts minimize energy usage in the studio.',

        secondRowImgUrl: require('../assets/sustan-about/sustan-material.avif'),
        secondRowTitle: 'Materials',
        secondRowDesc: "Surrounded by beautiful landscapes, it is only right that our studio is stocked with only the finest local materials that haven't had to travel far to get to us. Our clay is as locally sourced as possible for every product.",
        secondRowSemiDesc: 'We ensure that the paint we use on our products is low-VOC and never washed into local waterways during production.',
    }

    const about = {
        name: 'About Mina',
        urlString: require('../assets/page-header-content/about.avif'),
        description: 'Mina is a brand born out of love for ceramics, vivid colours and passion for life.',
        firstRowImgUrl: require('../assets/sustan-about/about-girls.avif'),
        firstRowTitle: 'Alex & Laura',
        firstRowDesc: 'For Alex and Laura, planning ahead is a central component of sustainable design. Work begins with sketches of ideas before any clay is modeled. Fully conceptualizing and refining each design beforehand helps us to reduce material waste.',
        firstRowSemiDesc: 'We strive to work collaboratively at every stage. Our team efforts minimize energy usage in the studio.',

        secondRowImgUrl: require('../assets/sustan-about/about-sustanability.avif'),
        secondRowTitle: 'Materials',
        secondRowDesc: "Two creative minds that came together at art school, Alex and Laura founded Mina with a shared passion for design and sustainability. For them, success is more than just about having a bestselling product.",
        secondRowSemiDesc: 'Every piece in our store has been created with love by Alex and Laura. They take inspiration from the world around them when it comes to shapes, colors, and the clay that they work with.',
    }

    const navigate = useNavigate();
    function handleNavigate(url, id) {
        navigate(url);
        dispatch(setNavigation({ id: id }));
        id == 2 ? dispatch(setSustainabilityAbout(sustanability)) : (id == 3 ? dispatch(setSustainabilityAbout(about)) : dispatch(setSustainabilityAbout({})));
    }

    return <>
        <div className="row col-sm-12 px-2">
            <div className="col-md-2">
                <img onClick={() => handleNavigate('/', 0)} height={20} width={70} data-v-237d5d94="" className="ms-3 block-header-logo__image cursor" src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=128,fit=crop,q=95/minattnvs/MINA-Yg2GZekJLlIEw2GR.png" data-qa="builder-siteheader-img-logo" />
            </div>
            <div className="col-md-10">
                <ul className="row justify-content-end align-items-center nav-list">
                    {
                        navArray.map((dt, key) => {
                            return <li className="cursor nav-item" key={key}>
                                <label className={"cursor " + (dt.subUrls?.length ? 'subMenu-label' : '')}>
                                    <span onClick={() => handleNavigate(dt.url, dt.id)} >{dt.name}</span>
                                    {dt.subUrls?.length ? <svg data-v-cf3ff533="" className="ms-2 item-content__icon" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-cf3ff533="" d="M5 6.5L0.669873 0.5L9.33013 0.500001L5 6.5Z" fill="currentColor"></path></svg> : ''}

                                    {dt.subUrls?.length ? <div className='nav-menu navMenuAnimation'>
                                        <ul className=''>
                                            {
                                                dt?.subUrls?.map((subDt, subKey) => {
                                                    return <li className='mb-2 ' key={subKey}><label className='cursor'>{subDt.name}</label></li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                        : ''}
                                </label>
                            </li>
                        })
                    }

                    <li onClick={handleOpenBag} className='cursor' style={{ display: 'inline', width: 'auto' }}>
                        <svg data-v-da7f12ed="" width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-1 me-2 block-header-cart__icon"><path data-v-da7f12ed="" fillRule="evenodd" clipRule="evenodd" d="M5.94636 5.35922C6.29451 3.00506 7.9363 1.39824 9.67973
						1.39824C11.4232 1.39824 13.0649 3.00506
						13.4131 5.35922H5.94636ZM4.53847 5.35922C4.90317 2.43147
						6.95866 0.000183105 9.67973 0.000183105C12.4008
						0.000183105 14.4563 2.43147 14.821 5.35922H17.2816H18.6797V6.75728V21.2039C18.6797
						22.7481 17.4278 24 15.8836
						24H3.4758C1.93155 24 0.679688 22.7481 0.679688
						21.2039V6.75728V5.35922H2.07775H4.53847ZM2.07775 6.75728H4.52596V9.08752C4.52596
						9.47359 4.83893 9.78655 5.22499 9.78655C5.61105 9.78655 5.92402 9.47359
						5.92402 9.08752V6.75728H13.5259V9.08752C13.5259 9.47359
						13.8389 9.78655 14.2249 9.78655C14.611 9.78655 14.9239
						9.47359 14.9239 9.08752V6.75728H17.2816V21.2039C17.2816 21.976 16.6557 22.6019
						15.8836 22.6019H3.4758C2.70368 22.6019 2.07775 21.976 2.07775 21.2039V6.75728Z" fill="currentColor"></path>
                        </svg>
                        Cart ({bagListCount})
                    </li>

                </ul>
            </div>
        </div>

        <div className={'side-nav' + (sideNavState === true ? ' open-sidenav' : '') + (sideNavState === false ? ' close-sidenav' : '')}>
            <div className="p-3 d-flex justify-content-end">
                <svg onClick={handleCloseBag} className='cursor' data-v-2f9813ef="" width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-2f9813ef="" d="M12 4L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path data-v-2f9813ef="" d="M4 4L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </div>

            <div className={'side-list-content' + (sideNavList.length ? '' : ' d-flex align-items-center justify-content-center')}>
                {
                    sideNavList.length ? <ul className="card-list">
                        {
                            sideNavList.map((dt, key) => {
                                return <li key={key} className='d-flex py-2'>
                                    <div className="col-sm-3 mx-2 text-center">
                                        <img src={dt.url} alt="" />
                                    </div>
                                    <div className="col-sm-7 d-flex flex-column">
                                        <div className='me-3 item-header' >
                                            {dt.name}
                                        </div>
                                        <div className='mt-2'>
                                            <span className='text-danger'> Quantity:</span>  {dt.itemCount}
                                            <span className='ms-2 text-danger'> Price:</span>  {dt.status == 2 ? (<span><span style={{ textDecoration: 'line-through', color: '#999999' }}>{dt.price}</span> {dt.updatePrice}</span>) : dt.updatePrice}
                                        </div>
                                    </div>

                                    <div className="text-end text-danger col-sm-1 ">
                                        <svg onClick={() => handleDeleteItem(key)} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="mt-2 cursor bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                        </svg>
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                        :
                        <p className='empty-list' >
                            Shopping bag is empty
                        </p>
                }

            </div>
        </div>
    </>
}