const Modal = (props) => {
    const {children, title} = props

    return (
        // <div className="modal fade" id="project-modal" data-show={activate} tabIndex="-1" role="dialog" aria-labelledby="project-modal" aria-hidden="true">
        //     <div className="modal-dialog" role="document">
        //         <div className="modal-content">
        //         <div className="modal-header">
        //             <h5 className="modal-title" id="exampleModalLongTitle">{title}</h5>
        //             <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        //             <span aria-hidden="true">&times;</span>
        //             </button>
        //         </div>
        //         <div className="modal-body">
        //             {child}
        //         </div>
        //         <div className="modal-footer">
        //             <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        //             <button type="button" className="btn btn-primary">Save changes</button>
        //         </div>
        //         </div>
        //     </div>
        // </div>
        

        <div class="modal fade" id="project-modal" data-bs-keyboard="true" tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title title-font">{title}</h5>
                <button type="button" class="fa-solid fa-xmark close-modal-button" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body content-font">
              {children}
              </div>
            </div>
          </div>
        </div>
    )
}

export {Modal}