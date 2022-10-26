const Modal = (props) => {
    const {children, title} = props

    return (
        <div className="modal fade" id="project-modal" data-bs-keyboard="true" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title title-font">{title}</h5>
                <button type="button" className="fa-solid fa-xmark close-modal-button" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body content-font">
              {children}
              </div>
            </div>
          </div>
        </div>
    )
}

export {Modal}