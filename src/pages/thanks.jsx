import Header from "../components/header";
import Footer from "../components/footer";
import '../scss/components/thanks.scss';

function ThanksPage() {
    return (
        <>
            <Header currentPage="thanks" />
            <main>
                <section className="hero">
                    <h1 className="hero__heading">Børnelejren takker</h1>
                </section>
                <div className="intro">
                    <p className="intro__text">Børnelejren på Langeland takker <span className="intro__text intro__text--bold">alle</span>, der på den ene eller anden måde, har støttet foreningens arbejde med at sende dårligt stillede børn på et ophold på Søgård Hovedgård - det være sig ved naturaliesponsorater eller økonomisk støtte fra støttemedlemmer, virksomhedssponsorer og donationer fra fonde.</p>
                </div>
                <section className="sponsers">
                    <h2 className="sponsers__heading">En særlig tak til:</h2>
                    <table className="sponsers__table">
                        <tbody>
                            <tr>
                                <td>2025</td>
                                <td>Aage og Johanne Louis-Hansens Fond</td>
                                <td>20.000kr</td>
                            </tr>
                            <tr>
                                <td>2025</td>
                                <td>Aage og Johanne Louis-Hansens Fond</td>
                                <td>20.000kr</td>
                            </tr>
                            <tr>
                                <td>2025</td>
                                <td>Aage og Johanne Louis-Hansens Fond</td>
                                <td>20.000kr</td>
                            </tr>
                            <tr>
                                <td>2025</td>
                                <td>Aage og Johanne Louis-Hansens Fond</td>
                                <td>20.000kr</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default ThanksPage;