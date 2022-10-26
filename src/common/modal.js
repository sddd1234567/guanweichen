import React, { createContext, useState, useContext} from "react";

const ModalContext = createContext()
const ModalProvider = ({ children }) => {

    //your variables
    //example
    const [title, setTitle] = useState('')
    const [activate, setActivate] = useState(false)
    const [content, setContent] = useState(null)


    return (
        <ModalContext.Provider value={{ title, activate, content, setTitle, setActivate, setContent }} >
            {children}
        </ModalContext.Provider>
    )
}

const useModal = () => {
    const context = useContext(ModalContext)
    if (!context) throw new Error("useModal must be used within a CountProvider")

    const { title, activate, content, setTitle, setActivate, setContent } = context

    return { title, activate, content, setTitle, setActivate, setContent }
}

export {ModalProvider, useModal}