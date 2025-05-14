import { Link } from 'react-router';
import Header from '../components/header';
import '../scss/components/index.scss';

function HomePage() {
    return (
        <>
            <Header currentPage='index' />
            <section className="hero">
                <h1 className="hero__heading">Velkommen</h1>
                <p className="hero__text">
                    Børnelejren på Langeland er en forening, der udelukkende har til formål at sende dårligt stillede børn og unge sammen med deres pædagoger på et ophold i landlige omgivelser på det naturskønne Sydlangeland.
                </p>
                <div className="hero__sponser">
                    <p>Vil du gerne støtte?</p>
                    <Link to="/sponser" className="hero__sponser-btn">Tilmeld som sponser</Link>
                </div>
            </section>
        </>
    );
}

export default HomePage;