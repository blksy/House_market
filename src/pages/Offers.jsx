import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import {collection, getDocs, query, where, orderBy, limit, startAfter, QuerySnapshot} from 'firebase/firestore'
import {db} from '../firebase.config'
import {toast} from 'react-toastify'
import Spinner from "../components/spinner";
import ListingItem from "../components/ListingItem";

function Offers(){
    const [listings, setListings] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const params = useParams()

    useEffect(() => {
      const fetchListings = async() =>{
        try{
          //Get reference
          const listingsReference = collection(db, 'listings')
          //Create a query
          const q = query(listingsReference, where('offer', '==', true), 
          orderBy('timestamp', 'desc'),
          limit(10)
          )

          //Execute query
          const querySnapshot = await getDocs(q)
          
          const listings = []

          querySnapshot.forEach((doc) =>{
            return listings.push({
               id: doc.id,
               data: doc.data(),
            })
          })

          setListings(listings)
          setLoading(false)

        }catch(error){
           toast.error('Could not fetch the data')
        }
      }

      fetchListings()
    },[])

    return(
        <div className="category">
          <header>
            <p className="pageHeader"> 
               Offers
            </p>
          </header>

          {loading ? (<Spinner/>) : listings && listings.length > 0 ?
          <>
          <main>
            <ul className="categoryListings">
                {listings.map((listing) =>(
                   <ListingItem listing={listing.data} id={listing.id} key={listing.id}/>
                ))}
            </ul>
          </main>
          ) </> : (<p>No listing for ${params.categoryName}</p>)}
        </div>
    )
}

export default Offers;