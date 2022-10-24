import { useState, useEffect } from 'react'
import { Container, Project, Model } from './'
import { useModal } from '../common/modal'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

const style = {
    button: {

    },
    button_activate: {
        backgroundColor: "rgb(187 105 61 / 92%)",
        color: "white"
    }
}


const Button = (props) => {
    const { title, activate, onClick } = props

    return (
        <button type="button" style={activate ? style.button_activate : style.button} className="select-project-button" id="btn1" autoComplete="off" onClick={onClick}>
            {title}
        </button>
    )
}

const ProjectDescription = (props) => {
    const { image, title, description, content, style } = props
    const {setTitle, setContent} = useModal()
    console.log(image)
    const get_content_text = async (md_file_path) => {
        const response = await fetch(md_file_path)
        const text = await response.text()

        return text
    }

    const setModalContent = async (title, content) => {
        const md = await get_content_text(content)
        setTitle(title)
        setContent(<ReactMarkdown rehypePlugins={[rehypeRaw]}>{md}</ReactMarkdown>)
        // setContent(md)
        // console.log(content)
        // setContent(content)
    }

    const toggleModalActivate = () => {
        setModalContent(title, content)
    }

    return (
        <>
        {/* <Project activate={modalActivate} title={title} content={content}/> */}
        {/* <Button data-toggle="modal" data-target="#project-modal">Toggle</Button> */}
        <div className="project-description-container" style={style} onClick={toggleModalActivate} data-bs-toggle="modal" data-bs-target="#project-modal">
            <h3 style={{marginLeft: 2}}>{title}</h3>
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="project-description-image" style={{backgroundImage: `url(${image})`}} alt="Background"></div>
                </div>
                <div className="col-12 col-md-6">
                    <p className="project-description">
                        {description}
                    </p>
                </div>
            </div>
            <div style={{float: "right"}}>Show more <i className={`fa-angles-right fa-solid`}></i></div>
        </div>
        </>
    )
}

const ProjectSlider = (props) => {
    const {title, style, titleStyle, data, containerStyle} = props
    const [project, setProject] = useState(data[0])

    const selectProject = (p) => {
        setProject(p)
    }

    return (
        <div className="container-fluid project-slider-container" style={style}>
            <h2 className="pixel-font project-slider-title" style={{...{color: "white", textAlign: "Center"}, ...titleStyle}}>{title}</h2>
            <Container>
                <div className="btn-group row project-button-container" role="group" aria-label="Basic radio toggle button group">
                    {data.map((item, key) => (
                        <div className="col project-item-button" key={key}>
                            <Button title={item.title} onClick={() => selectProject(item)} activate={project.title === item.title} />
                        </div>
                    ))}
                </div>
                <ProjectDescription description = {project.description} image={project.image} title={project.title} content={project.content} style={containerStyle}/>
            </Container>
        </div>
    )
}

ProjectSlider.defaultProps = {
    title: "",
    style: {},
    titleStyle: {},
    containerStyle: {}
}

export { ProjectSlider }