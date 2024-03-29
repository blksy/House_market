import { useState, useEffect } from 'react'
import {Link, useNavigate, useParams} from 'reac-router-dom'
import {getDoc, doc} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import {db} from '../firebase.config'
import Spinner from '../components/spinner'
import shareIcon from '../assets/svg/shareIcon.svg'
import React from 'react'

function Listing() {
  const [listing, setListing] = useState(null)
  const [loading, setLoading] = useState(true)
  const [shareLinkCopied, setShareLinkCopied] = useState(null)

  const navigate = useNavigate()
  const params = useParams()
  const auth = getAuth()

  useEffect(() =>{
    const fetchListing = async () =>{
      const docRef = doc(db, 'listings', params.listingId)
      const docSnap = await getDoc(docRef)

      if(docSnap.exists()){
        setListing(docSnap.data())
        setLoading(false)
      }
    }
    fetchListing()
  }, [navigate, params.listingId])

  if(loading){
    return <Spinner/>
  }

  return (
    <main>
      {/*Slider */}
      <div className='shareIconDiv' onClick={() =>{
        navigator.clipboard.writeText(window.location.href)
        setShareLinkCopied(true)
        setTimeout(()=>{
          setShareLinkCopied(false)
        },2000)
      }}>
        <img src={shareIcon} alt=""/>
      </div>

      {shareLinkCopied && <p className='linkCopied'>Link Copied</p>}

      <div className='listingDetails'>
        <p className='listingName'>{listing.name} - {
           listing.offer ? listing.discountedPrice : listing.regularPrice}
        </p>
        <p className='listingLocation'>
          {listing.location}
        </p>
        <p className='listingType'>
          for {listing.type === 'rent' ? 'Rent' : 'Sale'}
        </p>
      </div>
    </main>
  )
}

export default Listing