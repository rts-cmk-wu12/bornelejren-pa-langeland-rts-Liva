import { Link } from "react-router";
import { FaFacebookF } from "react-icons/fa";
import '../scss/components/footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <h3 className="footer__heading">Kontakt os</h3>
            <p>Foreningen Børnelejren på Langeland</p>
            <div className="footer-info">
                <div className="footer-info__item">
                    <section>
                        <h4 className="footer-info__heading">Sekretariatet og administration:</h4>
                        <address className="footer-info__address">
                            <small>Knud Bro Alle 1, st. mf.</small>
                            <small>3660 Stenløse</small>
                            <a href="tel:+4538711260">Telefon: 38711260</a>
                            <a href="mailto:info@lejren.dk">E-mail: info@lejren.dk</a>
                            <Link to="/">Hjemmeside: http://www.lejren.dk</Link>
                            <a href="tel:+4526917425">SEnr. 26917425</a>
                            <small>Danske Bank: reg.nr. 1551 konto 10008182</small>
                            <small>Merkur Bank: reg.nr. 8401 konto 1077819</small>
                            <small>Merkur Bank: reg.nr. 8401 konto 4215119</small>
                            <small>MobilePay 27231</small>
                        </address>
                    </section>
                    <section>
                        <h4 className="footer-info__heading">Lejren:</h4>
                        <address className="footer-info__address">
                            <small>Søgård Hovedgård</small>
                            <small>Søgårdsvej 8A</small>
                            <small>5935 Bagenkop</small>
                        </address>
                    </section>
                </div>
                <FaFacebookF className="footer-info__link"/>
            </div>
        </footer>
    );
}

export default Footer;