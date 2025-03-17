import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  
  return (
    <footer>
        <div>
            <img src="/images/logo_part.png" className="footerlogo"alt="" />
            <ul className='footercontact'>
          <h3>Contactgegevens</h3>
          <li>Kindercoach Juf Monique</li>
          <li>Hoekeindseweg 42</li>
          <li>2665KE Bleiswijk</li>
          <li>info@kindercoachjufmonique.nl</li>
          <li>KvK: 93671067</li>
        </ul>


        </div>

        <div>
            <ul className='menu'>
              <h3>Menu</h3>
              <li><Link to={"/OverMij"}>Over mij</Link></li>
          <li><Link to={"/Waarom"}>Waarom</Link></li>
          <li><Link to={"/Aanbod"}>Aanbod</Link></li>
          <li><Link to={"/VoorScholen"}>Voor Scholen</Link></li>
          <li><Link to={"/Tarieven"}>Tarieven</Link></li>
          <li><Link to={"/Contact"}>Contact</Link></li>
            </ul>

        <ul className='socials'>
            <li><a href=""><img src="/images/whatsapp.png" alt="" /></a></li>
            <li><a href=""><img src="/images/instagram.png" alt="" /></a></li>
            <li><a href=""><img src="/images/facebook.png" alt="" /></a></li>
        </ul>
        </div>
    </footer>
  );
}

export default Footer;
