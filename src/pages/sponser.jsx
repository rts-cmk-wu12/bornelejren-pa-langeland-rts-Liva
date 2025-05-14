import Header from "../components/header";
import Footer from "../components/footer";
import '../scss/components/sponser.scss';

function SponserPage() {
    return (
        <>
            <Header currentPage='sponser' />
            <main>
                <section className="hero">
                    <h1 className="hero__heading">Tildmeld som sponser</h1>
                </section>
                <div className="intro">
                    <p className="intro__text">Da det er meget individuelt, hvor meget en virksomhed kan og ønsker at støtte med, har vi opdelt støttemulighederne i 3 kategorier:</p>
                </div>
                <div className="options">
                    <ul className="options__list">
                        <h2 className="options__list-heading">Børnesponsorat</h2>
                        <li>Hvis din virksomhed vælger at blive børnesponsor, dækker I omkostningerne for et navngivet barns ophold og transport til og fra Langeland. Prisen pr. barn varierer fra lejr til lejr, men vi har fastsat en gennemsnitspris på kr. 4.000,- pr. barn for et ophold. Denne pris inkluderer transport, forplejning, forsikring, udflugter, adgangsbilletter til udflugtsmålene, smågaver og slik til ét barn.</li>
                    </ul>
                    <ul className="options__list">
                        <h2 className="options__list-heading">Lejrsponsorat</h2>
                        <li>For kr. 2.000,- kan virksomheden blive lejrsponsor og være med til at dække alle omkostningerne ved børnelejren, som bl.a. omfatter ejendommens drifts- og vedligeholdelsesomkostninger samt eventuelle ekstra udgifter omkring en lejr, der f.eks. kan være løn til specialuddannet personale.</li>
                    </ul>
                    <ul className="options__list">
                        <h2 className="options__list-heading">Støtte til foreningen</h2>
                        <li>Virksomheder, der ønsker at støtte foreningens arbejde med et mindre beløb, kan vælge at blive diplomsponsorer. Af administrative årsager skal der minimum støttes med kr. 1.000,- for at man kan modtage et trykt diplom til ophængning i virksomheden, men alle støttebeløb - store som små - er naturligvis velkomne.</li>
                    </ul>
                </div>
                <div className="form-container">
                    <form className="form">
                        <img src="logo-wide.svg" alt="logo" className="form__logo" />
                        <div className="form-field">
                            <div>
                                <label htmlFor="type">Støttetype:</label>
                                <select name="type" className="form-field__input">
                                    <option value="børnesponsorat">Børnesponsorat</option>
                                    <option value="lejrsponsorat">Lejrsponsorat</option>
                                    <option value="foreningen">Støtte til foreningen</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="company-name">Firmanavn:</label>
                                <input type="text" name="company-name" className="form-field__input" placeholder="Dit firmanavn..." />
                            </div>
                            <div>
                                <label htmlFor="mail">Mail:</label>
                                <input type="mail" name="mail" className="form-field__input" placeholder="Din firma mail..." />
                            </div>
                            <div>
                                <label htmlFor="address">Adresse:</label>
                                <input type="text" name="address" className="form-field__input" placeholder="Din firma adresse..." />
                            </div>
                            <div>
                                <label htmlFor="phone">Telefon:</label>
                                <input type="number" name="phone" className="form-field__input" placeholder="Dit firma tlf nr..." />
                            </div>
                            <div>
                                <label htmlFor="budget">Beløb:</label>
                                <input type="number" name="budget" className="form-field__input" placeholder="Dit firma beløb..." />
                            </div>
                        </div>
                        <button type="submit" className="form-field__btn">Send</button>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default SponserPage;