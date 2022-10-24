const SubTitle = (props) => {
    const {title, style, textStyle} = props

    return (
        <div className="container-fluid" style={style}>
            <h2 className="home-subtitle" style={textStyle}>{title}</h2>
        </div>
    )
}

SubTitle.defaultProps = {
    title: "",
    style: {
        color: "#4c4c4c"
    },
    textStyle: {}
}

export {SubTitle}