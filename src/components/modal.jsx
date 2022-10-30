import { useEffect, useState } from "react"

const Modal = (props) => {
    const {children, title} = props

    const [content, setContent] = useState(null)

    const onModalClosed =  () => {
      setContent(<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>)
    }
    
    useEffect(() => {
      document.querySelector('#project-modal').addEventListener('hidden.bs.modal', onModalClosed)
      return () => {
        document.querySelector('#project-modal').removeEventListener('hidden.bs.modal', onModalClosed)
      };
    }, []);

    useEffect(() => {
      setContent(children)
    }, [children])

    return (
        <div className="modal fade" id="project-modal" data-bs-keyboard="true" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title title-font">{title}</h5>
                <button type="button" className="fa-solid fa-xmark close-modal-button" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body content-font">
              {content}
              </div>
            </div>
          </div>
        </div>
    )
}

export {Modal}