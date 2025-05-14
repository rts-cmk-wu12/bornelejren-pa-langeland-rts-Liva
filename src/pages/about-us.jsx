import Header from "../components/header";
import Footer from "../components/footer";
import '../scss/components/about.scss';

function AboutPage() {
    return (
        <>
            <Header currentPage='about' />
            <main>
                <section className="hero">
                    <h1 className="hero__heading">Om os</h1>
                </section>
                <div className="about-column">
                    <div className="about-column__text about-column__text--left">
                        <p>Børnelejren på Langeland er en velgørende, non-profit forening, som afholder finansierede lejre for dårligt stillede børn og unge fra hele landet. Børnelejrene bliver afholdt på foreningens bondegård, Søgård Hovedgård, som ligger i naturskønne omgivelser på sydspidsen af Langeland. Samtlige omkostninger til alle børns ophold og transport til/fra lejren bliver finansieret af foreningen, og det er et krav fra foreningens side, at der ikke opkræves brugerbetaling af børnenes forældre for opholdet på Søgård.</p>
                        <p>Foreningens bestyrelse og frivillige hjælpere arbejder ulønnet for Foreningen. Medarbejderne fra institutionerne på foreningens lejre, får ikke kolonitillæg udbetalt af Foreningen.</p>
                    </div>
                    <div className="about-column__text">
                        <p>Det er primært virksomheder og støttemedlemmer, der finansierer foreningens drift og aktiviteter. Vi har heldigvis erfaret, at rigtig mange virksomheder er villige til at bakke op omkring lejren, ligesom vi håber på endnu flere private, passive støttemedlemmer.</p>
                        <p>Alle skriftlige henvendelser vedrørende Foreningen Børnelejren på Langeland og Søgård Hovedgård bedes venligst sendt til Knud Bro Alle 1, st. mf., 3660 Stenløse. Telefoniske henvendelser bedes ligeledes rettet til sekretariatet på telefon 38711260. Foreningens formand er dagligt at træffe i sekretariatet.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default AboutPage;