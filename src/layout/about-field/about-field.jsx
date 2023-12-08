import './about-field.scss';
import {useNavigate} from 'react-router-dom';

export default function AboutField() {
    const navigate = useNavigate(); 
    const fieldArray = [
        {
            name: 'About Mina',
            description: 'Mina is a brand born out of a passion for ceramics.',
            imgUrl: require('../../assets/mina.avif'),
            url: ''
        },
        {
            name: 'Sustainability',
            description: 'Mina is an eco-friendly brand that cares about sustainability.',
            imgUrl: require('../../assets/sustainability.avif'),
            url: ''
        },
    ]

    return <>
        <div className='py-5 about-field-container'>
            <div className="row px-5">
                { 
                    fieldArray.map((dt, key) => {
                        return <div key={key} className="col-md-6 about-field-item">
                            <div className="col-md-12 about-img">
                                <img src={dt.imgUrl} alt="" />
                            </div>
                            <div className="mt-4 about-content">
                                <h2>{dt.name}</h2>
                            </div>
                            <p className='field-description'>{dt.description}</p>
                            <div className="mt-5">
                                <span onClick={() => {navigate('/')}} className='cursor shop-now learn-more'>Learn more</span>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    </>
}