import { useState, useEffect } from 'react'
import {Link, useNavigate, useParams} from 'reac-router-dom'
import {getDoc, doc} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import {db} from '../firebase.config'
import Spinner from '../components/spinner'
import shareIcon from '../assets/svg/shareIcon.svg'
import React from 'react'

function Listing() {
  return (
    <div>Listing</div>
  )
}

export default Listing