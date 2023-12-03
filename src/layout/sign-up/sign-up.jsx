import './sign-up.scss'

export default function SignUp() {
    return <>
        <div className='mt-5 py-3 home-decor-container'>
            <div className="background-image brightness">
                <img className='col-sm-12' src={require('../../assets/sign-up-background.avif')} alt="" />
            </div>
            <div className="content d-flex align-items-center justify-content-center">
                <div className="col-sm-12 text-center">
                    <h1 className='m-0 title'>
                        Sign-up for our newsletter
                    </h1>
                    {/* <p className='semi-header sub-title'>Find your new favorite pieces.</p> */}
                    <div className='mt-5'>
                        <div className="field text-start mx-auto col-md-4">
                            <label htmlFor="email" className='mb-1'>Your email</label>
                            <input className='email-signup' placeholder='Your email address' type="text" name="email" id="email" />
                        </div>
                    </div>
 
                    <div className="mt-5">
                        <a className='shop-now' href="">Submit</a>
                    </div>
                </div>
            </div>
        </div>
    </>
}