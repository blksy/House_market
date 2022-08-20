import {Link} from 'react-router-dom'
import {ReactComponent as DeleteIcon} from '../assets/svg/deleteIcon.svg'
import bedIcon from '../assets/svg/bedIcon.svg'
import bathtubIcon from '../assets/svg/bathtubIcon.svg'

function ListingItem({listing, id}){
    return(
        <li className='categoryListing'>
            <Link to ={`/category/${listing.type}/${id}`} className='categoryListingLink'></Link>
           <img src={listing.imageUrls[0]} alt= {listing.name} className='categoryListingImg'/>
        <div className="categoryListingDetails">
            <p className="categoryListingLocation">{listing.location}</p>
        </div>
        </li>
    )
}

export default ListingItem