import AboutField from "./about-field/about-field"
import { BestSeller } from "./bestseller"
import FollowPath from "./follow-path/follow-path"
import { Header } from "./header"
import HomeDecor from "./home-decor/home-decor"
import './layout.scss'
import SignUp from "./sign-up/sign-up"

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
        <section className="block">
            <SignUp />
        </section>
        <section className="block">
            <FollowPath />
        </section>
    </>
}