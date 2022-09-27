import { MdLocationPin, MdOutlineMapsHomeWork } from 'react-icons/md'
import { FaTwitter } from 'react-icons/fa'
import { TbLink } from 'react-icons/tb'
import './style.css'

function CardFooter(props) {
  return (
    <div className='card-footer'>
        <div className='card-footer-top'>
            <div>
                <MdLocationPin />
                {props.location ?? 'Not Available'}
            </div>
            <div>
                <FaTwitter />
                {props.twitter_username ?? 'Not Available'} 
            </div>    
        </div>
        <div className='card-footer-botton'>
            <div>
                <TbLink />
                    {!props.blog == "" ? props.blog : 'Not Available'}                                             
            </div>
            <div>
                <MdOutlineMapsHomeWork />
                {props.company ?? 'Not Available'}
            </div>                       
        </div>
    </div>
  )
}

export default CardFooter