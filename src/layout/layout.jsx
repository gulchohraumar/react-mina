import AboutField from "./about-field/about-field"
import { BestSeller } from "./bestseller"
import { Header } from "./header"
import HomeDecor from "./home-decor/home-decor"
import './layout.scss'

export function Layout() {
    return <>
        <section className="block">
            <Header />
        </section>
        <section className="block">
            <BestSeller />
        </section>
        <section className="block">
            <HomeDecor />
        </section>
        <section className="block">
            <AboutField />
        </section>
    </>
}