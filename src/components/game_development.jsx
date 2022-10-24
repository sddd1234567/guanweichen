import { ContainerFruid, Container, ProjectSlider } from "./"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"

const GameDevelopement = () => {

    return (
        <div className="container-fluid" style={{backgroundColor: "#4c4c4c", textAlign: "center"}}>
            <h2 className="pixel-font" style={{paddingTop: 20, color: "white", textAlign: "Center"}}>Game Development</h2>
            <ProjectSlider/>
        </div>
    )
}

export {GameDevelopement}