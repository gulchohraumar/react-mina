import PageHeaderContent from "../pages-header-content/page-header-content";
import { useEffect, useState } from "react";
import { store } from "..";
import watch from 'redux-watch';
import { useSelector, useDispatch } from 'react-redux';

export default function SustainabilityAbout() {
    const [aboutSustainability, setAboutSustainability] = useState({});
    const data = useSelector((state) => state.sustainabilityAbout);

    let w = watch(store.getState, 'sustainabilityAbout')
    store.subscribe(w((newval, oldval, objectpath) => {
        setAboutSustainability(newval);
    }));

    return <>
        <PageHeaderContent data={{ name: aboutSustainability?.name, urlString: aboutSustainability?.urlString }} />
        <div className="my-5 py-5 row justify-content-center text-center semi-header">
            <div className="col-sm-4">
                {aboutSustainability?.description}
            </div>
        </div>

        <div className="px-5">
            <div className="row">
                <div className="col-sm-6 ">
                    <img className="col-lg-12" src={aboutSustainability?.firstRowImgUrl} alt="" />
                </div>
                <div className="col-sm-6 row align-items-center justify-content-center">
                    <div className="col-lg-9 ">
                        <h1 className='text-start mb-4 font-size-3'>
                            {aboutSustainability?.firstRowTitle}
                        </h1>
                        <p className="semi-color-content sustan-content" >
                            {aboutSustainability?.firstRowDesc}
                        </p>
                        <p className="semi-color-content sustan-content" >
                            {aboutSustainability?.firstRowSemiDesc}
                        </p>
                    </div>
                </div>

            </div>

            <div className="row mt-5 py-5">
                <div className="col-sm-6 row align-items-center ">
                    <div className="col-lg-10 ">
                        <h1 className='text-start mb-4 font-size-3'>
                            {aboutSustainability?.secondRowTitle}
                        </h1>
                        <p className="semi-color-content sustan-content" >
                            {aboutSustainability?.secondRowDesc}
                        </p>
                        <p className="semi-color-content sustan-content" >
                            {aboutSustainability?.secondRowSemiDesc}
                        </p>
                    </div>
                </div>
                <div className="col-sm-6 ">
                    <img className="col-lg-12" src={aboutSustainability?.secondRowImgUrl} alt="" />
                </div>

            </div>
        </div>
    </>
}