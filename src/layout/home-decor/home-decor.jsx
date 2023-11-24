import './home-decor.scss'

export default function HomeDecor() {
    return <>
        <div className='mt-5 bg-danger home-decor-container'>
            <div className="background-image brightness">
                <img className='col-sm-12' src={require('../../assets/home-decor-bg.avif')} alt="" />
            </div>
            <div className="content d-flex align-items-center justify-content-center">
                <div className="col-sm-12 text-center">
                    <h1 className='m-0'>
                        Home decor items
                    </h1>
                    <p className='semi-header'>Find your new favorite pieces.</p>

                    <div className="mt-5">
                        <a className='shop-now' href="">Shop now</a>
                    </div>
                </div>
            </div>
        </div>
    </>
}