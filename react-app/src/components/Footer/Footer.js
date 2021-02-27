import './Footer.css'

const Footer = () => {

    return (
        <div className='footer-div'>
            <div className="two-links">
                <div className='footer-div__person zach'>
                    <a className='github-link img' href='https://github.com/zduvall'>ZD</a>
                </div>
                <div className='footer-div__linkin'>
                    <a className='github-link' href='https://github.com/zduvall'>ZD</a>
                </div>
            </div>
            <div className='footer-div__person courtney'>
                <a className='github-link img' href='https://github.com/CJNewcomer'>CN</a>
            </div>
            <div className="footer-div__github-link">
                <a className='github-link github-repo' href='https://github.com/markhv-code/pair-yo-pet'>Github Repo Link</a>
            </div>
            <div className='footer-div__person ameera'>
                <a className='github-link img' href='https://github.com/MeeraMeera1'>AM</a>
            </div>
            <div className='footer-div__person mark'>
                <a className='github-link img' href='https://github.com/markhv-code'>MV</a>
            </div>
        </div>
    )
}

export default Footer;