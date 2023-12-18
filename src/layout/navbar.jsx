import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Navigate, useNavigate } from 'react-router-dom';

export function Navbar() {
    const navArray = [
        {
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
            name: 'Sustainability',
            url: '/sustainability',
            subUrls: []
        },
        {
            name: 'About',
            url: '/about',
            subUrls: []
        },
        {
            name: 'Contact',
            url: '/contact',
            subUrls: []
        },
    ]

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    function handleNavigate() {
        // navigate('/');
        // <Navigate to="/" replace={true} state={{ from: '' }} />;
        console.log(navArray)
    }
    return <>
        <div className="row col-sm-12 px-2">
            <div className="col-md-2">
                <img onClick={() => handleNavigate()} height={20} width={70} data-v-237d5d94="" className="ms-3 block-header-logo__image cursor" src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=128,fit=crop,q=95/minattnvs/MINA-Yg2GZekJLlIEw2GR.png" data-qa="builder-siteheader-img-logo" />
            </div>

            <div className="col-md-10">
                <ul className="row justify-content-end align-items-center nav-list">
                    {
                        navArray.map((dt, key) => {
                            return <li className="cursor nav-item" key={key}>
                                <label className={"cursor " + (dt.subUrls?.length ? 'subMenu-label' : '')}>
                                    {dt.name}
                                    {dt.subUrls?.length ? <svg data-v-cf3ff533="" className="ms-2 item-content__icon" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-cf3ff533="" d="M5 6.5L0.669873 0.5L9.33013 0.500001L5 6.5Z" fill="currentColor"></path></svg> : ''}

                                    {dt.subUrls?.length ? <div className='nav-menu navMenuAnimation'>
                                        <ul className=''>
                                            {
                                                dt?.subUrls?.map((subDt, subKey) => {
                                                    return <li className='mb-2' key={subKey}>{subDt.name}</li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                        : ''}
                                </label>
                            </li>
                        })
                    }

                    <li style={{ display: 'inline', width: 'auto' }}>
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
                        Cart (0)
                    </li>

                </ul>
            </div>
        </div>
    </>
}