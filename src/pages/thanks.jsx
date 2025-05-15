import { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import '../scss/components/thanks.scss';
import '../scss/components/intro.scss';

function ThanksPage() {
    const [sponsers, setSponsers] = useState([]);

    useEffect(() => {
        async function fetchSponsers() {
            const response = await fetch(`${import.meta.env.VITE_URL}/api/sponsers`);
            const data = await response.json();

            setSponsers(data);
        }

        fetchSponsers();
    }, []);

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
                    {sponsers.length > 0 ? (
                        <table className="sponsers__table">
                            <tbody>
                                {sponsers.map((sponser, index) => (
                                    <tr key={index}>
                                        <td>{sponser.year}</td>
                                        <td>{sponser.company}</td>
                                        <td>{sponser.amount}kr</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : <p>Ingen sponsers fundet...</p>}
                </section>
            </main>
            <Footer />
        </>
    );
}

export default ThanksPage;