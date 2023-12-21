
import bgHeader from '../assets/page-header-content/sustainabilty.avif'

export default function PageHeaderContent(data) {
    return <>
        <div style={{ position: 'relative', height: '50vh' }}>
            <div className='free-shipping-text py-3 text-center'>
                Free shipping on orders over $50 amount
            </div>

            <div className='header-logo-con' style={{ height: 'auto' }}>
                <img className='header-logo' style={{ height: 'auto', minHeight: '440px' }} src={data?.data?.urlString} alt="" />
            </div>

            <div className='header-content m-auto text-center' style={{ top: '40%' }}>
                <h1 className='font-size-6'>
                    {data?.data?.name}
                </h1>
            </div>
        </div>
    </>
}