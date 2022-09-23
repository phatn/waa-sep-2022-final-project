import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="footer-top-area section_50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-xs-3 col-sm-6">
                            <div className="single-footer-widget footer-logo-widget">
                                <div className="footer-logo">
                                    <a href="/">
                                        <img src="/logo.png" alt="footer logo" />
                                    </a>
                                </div>
                                <div className="footer-widget-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.</p>
                                    <ul className="footer-social">
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                        <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                                        <li><a href="#"><i className="fa fa-skype"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-xs-3 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>latest post</h3>
                                <div className="latest-post-footer clearfix">
                                    <div className="latest-post-footer-left">
                                        <i className="fa fa-image"></i>
                                    </div>
                                    <div className="latest-post-footer-right">
                                        <h4><a href="#">Revealed: How to set goals for you and your team</a></h4>
                                        <p>Jan 14, 2018</p>
                                    </div>
                                </div>
                                <div className="latest-post-footer clearfix">
                                    <div className="latest-post-footer-left">
                                        <i className="fa fa-briefcase"></i>
                                    </div>
                                    <div className="latest-post-footer-right">
                                        <h4><a href="#">Five ways to improve as a business professional!</a></h4>
                                        <p>Jan 14, 2018</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-xs-3 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>main links</h3>
                                <ul className="quicklinks">
                                    <li><a href="#"><i className="fa fa-angle-double-right "></i> About maaxen forum</a></li>
                                    <li><a href="#"><i className="fa fa-angle-double-right "></i> Delivery Information</a></li>
                                    <li><a href="#"><i className="fa fa-angle-double-right "></i> Terms &amp; Conditions</a></li>
                                    <li><a href="#"><i className="fa fa-angle-double-right "></i> Team Discussion on maaxen</a></li>
                                    <li><a href="#"><i className="fa fa-angle-double-right "></i> Contact with an expert</a></li>
                                    <li><a href="#"><i className="fa fa-angle-double-right "></i> investment pricing table</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-xs-3 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Contact Info</h3>
                                <p><i className="fa fa-map-marker"></i> 4257 Street, SunnyVale, USA </p>
                                <p><i className="fa fa-phone"></i> 012-3456-789</p>
                                <p><i className="fa fa-envelope-o"></i> info@maaxen.com</p>
                                <p><i className="fa fa-envelope-o"></i> info@maaxen.com</p>
                                <p><i className="fa fa-fax"></i> 112-3456-7898</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;