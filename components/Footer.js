import React from 'react';
import Link from "next/link";
import { urlFor } from '../lib/client';
import { AiFillInstagram, AiOutlineTwitter, AiOutlineFacebook } from 'react-icons/ai';
const Footer = ({footerBanner}) => {
  return (
     <div className='footer-container'>
         <p> 2022 Palm Pro All rights reserved</p>
         <p className='icons'>
           <Link k href='http://instagram.com'>
              <AiFillInstagram  />
           </Link>
            <AiOutlineTwitter />
            <AiOutlineFacebook />
         </p>
     </div>
  )
}

export default Footer