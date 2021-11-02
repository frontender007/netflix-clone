import React from 'react'
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer__company">
                <img className="footer__logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix logo" />
                <ul className="footer__social">
                    
                    <li>
                        <a href="https://twitter.com/netflixuk?lang=en">
                            <i className="fa-brands fa-twitter footer__twitterIcon"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/netflixuk/?hl=en">
                            <i className="fa-brands fa-instagram footer__instagramIcon"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://en-gb.facebook.com/netflix/">
                            <i className="fa-brands fa-facebook footer__facebookIcon"></i>
                        </a>
                    </li>

                </ul>
            </div>

            <div className="footer_helpcenter">
                <ul className="footer__links">
                    <li><a href="https://jobs.netflix.com/">Careers</a></li>
                    <li><a href="https://help.netflix.com/en">Help Center</a></li>
                    <li><a href="https://www.netflix.com/gb/">Netflix.com</a></li>
                    <li><a href="https://help.netflix.com/en/legal/media-terms-and-conditions">Terms of Service</a></li>
                    <li><a href="https://help.netflix.com/en/legal/privacy">Privacy</a></li>
                    <li><a href="https://help.netflix.com/en">Cookie Preference</a></li>
                </ul>
                <p className="footer__copyright">&copy; 2021 NetFlix</p>
            </div>
        </footer>
    )
}

export default Footer; 
