const ContainerFruid = (props) => {
    const {children, ...args} = props
    return (
        <div className="container-fluid" {...args}>
            {children}
        </div>
    )
}

const Container = (props) => {
    const {children, ...args} = props
    return (
        <div className="container" {...args}>
            {children}
        </div>
    )
}

export {ContainerFruid, Container}