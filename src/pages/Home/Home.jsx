import Communities from "./Section/Communities";
import Companies from "./Companies";
import Footer from "../../component/Footer";
import Hero from "./Hero";
import Job from "./Section/Job";
import Podcasts from "./Section/Podcasts";

export default function Home() {
    return (
        <main>
            <Hero />
            <Companies />
            <section className="px-5 md:px-16 flex flex-col md:flex-row gap-12 py-24">
                <Job />
                <div className="aside flex flex-col gap-12 flex-grow">
                    <Communities />
                    <Podcasts />
                </div>
            </section>
            <Footer />
        </main>
    );
}
