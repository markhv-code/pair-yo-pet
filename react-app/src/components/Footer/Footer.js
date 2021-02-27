import { useWindowWidth } from '../../services/windowWidth';


const Footer = () => {
    const width = useWindowWidth();

    return (
        <div className='footer-div'>
            <div className='footer-div__person.footer-div__person-1'>
                <a className='github-link' href='https://github.com/zduvall'>ZD</a>
            </div>
            <div className='footer-div__person.footer-div__person-2'>
                <a className='github-link' href='https://github.com/CJNewcomer'>CN</a>
            </div>
            <div className="footer-div__github-link">
                <a className='github-link github-repo' href='https://github.com/markhv-code/pair-yo-pet'>Github Repo Link</a>
            </div>
            <div className='footer-div__person.footer-div__person-3'>
                <a className='github-link' href='https://github.com/MeeraMeera1'>AM</a>
            </div>
            <div className='footer-div__person.footer-div__person-4'>
                <a className='github-link' href='https://github.com/markhv-code'>MV</a>
            </div>
        </div>
    )
}

export default Footer;