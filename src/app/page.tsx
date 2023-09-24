import { ClothesCarrouselSection } from '@/components/clothes-carousel-section'
import { Footer } from '@/components/footer'
import { OurStorySection } from '@/components/our-story-section'
import { AboutSection } from '@/pages/components/about-section'
import { MainSection } from '@/pages/components/main-section'

const Home = () => {
    return (
        <div className="bg-zinc-950 scroll-smooth mx-auto flex flex-col justify-center">
            <MainSection />
            <AboutSection />
            <ClothesCarrouselSection />
            <OurStorySection />
            <Footer />
        </div>
    )
}

export default Home
