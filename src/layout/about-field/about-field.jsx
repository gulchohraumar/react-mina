import './about-field.scss'

export default function AboutField() {
    return <>
        <div className='py-5 bg-danger about-field-container'>
            <div className="row px-5">
                <div className="col-md-6 about-field-item">
                    <div className="col-md-12 about-img">
                        <img src={require('../../assets/mina.avif')} alt="" />
                    </div>
                    <div className="mt-4 about-content">
                        <h2>About Mina</h2>
                    </div>
                    <p className='semi-header'>Mina is a brand born out of a passion for ceramics.</p>
                    <div className="mt-5">
                        <a className='shop-now' href="">Shop now</a>
                    </div>
                </div>
            </div>
        </div>
    </>
}