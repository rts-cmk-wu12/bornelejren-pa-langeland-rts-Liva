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
            <main>
                <div className="column">
                    <p className='column__text'>Der er mange børn i verden, der ikke har det så godt, som de burde have det. Det gælder desværre også i Danmark. Der er børn med medfødte handicap, børn der er blevet alvorligt syge, børn der lider under omsorgssvigt eller bliver udsat for overgreb, børn der har mistet én af eller begge deres forældre, børn der er tvangsfjernet fra deres hjem og familie, børn der bliver mobbet i skolen, børn der vokser op i meget fattige familier, børn fra skilsmisse- og sammenbragte familier - vi kender allesammen et barn, der tilhører en af disse grupper, og det er disse børn, vi gerne vil gøre noget for.</p>
                    <img src="inside.jpg" alt="Køkken" className="column__img" />
                </div>
                <div className="text-section">
                    <p className='text-section__text'>Foreningen Børnelejren på Langeland samler penge ind fra erhvervslivet, fonde og private til at sende dårligt stillede børn på et velfortjent lejrophold på Søgård.</p>
                    <p className="text-section__text text-section__text--bold">Hjælp os med at hjælpe dem!</p>
                </div>
            </main>
        </>
    );
}

export default HomePage;