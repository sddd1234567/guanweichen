// import myimg from '../img/myimg.png'
// import myimg from '../img/IMG_20221017_121951.png'
import myimg from '../img/myimg_for_web.png'
import {ContainerFruid, Expertise} from './'

const MyInfo = () => {
    return (<>
        {/* <div className="my-img" style={{backgroundImage: `url(${myimg})`}}></div> */}
        {/* <div className="container-fluid about-container" id="About"> */}
        <ContainerFruid>
            <div className="row">
                {/* <div className="about-main-img col-12 col-md-6" style={{backgroundImage: `linear-gradient(to top, rgba(255,255,255,0) 20%, rgba(255,255,255,0.5)), url(${myimg})`}}> */}
                <div className="about-main-img col-12 col-md-6" style={{backgroundImage: `url(${myimg})`}}>
                </div>
                <div className="col-12 col-md-6">
                    <div className="about-title-container">
                    <h1 className="about-title">Guan-Wei Chen</h1>
                    <p className="about-link">
                        <a target="_blank" href="/guanweichen/guanwei_chen_resume.pdf">Resume</a> |
                        <a href="https://github.com/sddd1234567" target="_blank" rel="noreferrer">Github</a> |
                        <a href="https://www.linkedin.com/in/guan-wei-chen" target="_blank" rel="noreferrer">Linkedin</a>
                    </p>
                    <p className="about-link">
                        Contact: <a href="mailto:sddd1234567@gmail.com" target="_blank" rel="noreferrer">sddd1234567@gmail.com</a>
                    </p>
                    </div>
                </div>
            </div>
            <Expertise />
        </ContainerFruid>
        {/* </div> */}
        {/* <img src={myimg}/> */}
    </>)
}

export {MyInfo}