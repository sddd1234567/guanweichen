import { ContainerFruid } from './index'
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import {useState, useRef, useEffect} from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { solid, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
// import { faCode, faGamepad, faMicrochip } from "@fortawesome/free-solid-svg-icons";

import expertise_data from '../data/expertise.json'

import "swiper/css"
import "swiper/css/pagination"

import "../css/swiper.css"


// library.add(faCode)
// library.add(faGamepad)
// library.add(faMicrochip)


const ExpertiseItem = (props) => {
    const { title, content, icon_name } = props
    return (
        <div>
            <i className={`${icon_name} fa-xl expertise-icon`}></i>
            {/* <FontAwesomeIcon icon={`${item.icon_name}`} className= "fa-xl expertise-icon" /> */}
            <p className='expertise-title'>{title}</p>
            <p className='expertise-content'>{content}</p>
        </div>
    )
}

const Expertise = () => {
    const [slides_per_view, set_slides_per_view] = useState(4)

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth >= 992) {
                set_slides_per_view(5)
            }
            else {
                set_slides_per_view(3)
            }
            // console.log('window.scrollY', window.scrollY);
        }

        handleScroll()
        window.addEventListener('resize', handleScroll);
    
        return () => {
          window.removeEventListener('resize', handleScroll);
        };
    }, []);

    return (<>
        {/* <div class="my-img" style={{backgroundImage: `url(${myimg})`}}></div> */}
        {/* <ContainerFruid> */}
            <Swiper
                slidesPerView={slides_per_view}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="expertise-swiper"
            >
                {
                    expertise_data.map((item, idx) => (
                        <SwiperSlide key={idx}>
                            <ExpertiseItem title={item.title} icon_name = {item.icon_name} content = {item.content}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        {/* </ContainerFruid> */}
        {/* <img src={myimg}/> */}
    </>)
}

export { Expertise }