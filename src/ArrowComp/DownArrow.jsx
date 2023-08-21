
import { HashLink as Link } from 'react-router-hash-link'
import ArrowImg from "../assets/arrowimg/up-arrow.png"
const DownArrow = () => {
    return (
        <>
            <button className='arrow-button'>
                <Link className='arrow-link' scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="#up"><img src={ArrowImg} /></Link>
            </button>
        </>
    )
}

export default DownArrow
