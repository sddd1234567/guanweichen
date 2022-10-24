import {useEffect, useState} from 'react'

const Header = () => {

    const [header_hide, set_header_hide] = useState(true)

    useEffect(() => {
        const handleScroll = event => {
            if (window.scrollY >= 200) {
                set_header_hide(false)
            }
            else {
                set_header_hide(true)
            }
            // console.log('window.scrollY', window.scrollY);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <nav className={`header navbar navbar-expand-lg navbar-light bg-light ${header_hide ? "header-hide" : ""}`}>
        {/* <nav className={`header navbar navbar-expand-lg navbar-light bg-light`}> */}
            <div className="container-fluid">
                <a className="header-title navbar-brand" href="index.html">Guan-Wei Chen</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="header-item-container collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#About">Home</a>
                        <a className="nav-link" target="_blank" href="/guanweichen/guanwei_chen_resume.pdf">Resume</a>
                        <a className="nav-link" href="https://github.com/sddd1234567" target="_blank" rel="noreferrer">Github</a>
                        <a className="nav-link" href="https://www.linkedin.com/in/guan-wei-chen" target="_blank" rel="noreferrer">Linkedin</a>
                    </div>
                </div>
            </div>
        </nav>
    )

}

export { Header }