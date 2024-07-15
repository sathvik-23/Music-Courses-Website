import FeaturedCourses from '@/components/FeaturedCourses'
import HeroSection from '@/components/HeroSection'

export default function Home() {
  return (
    <main
      className="min-h-screen bg-black antialiased
    bg-grid-white/[0.0]"
    >
      <HeroSection />

      <FeaturedCourses />
    </main>
  )
}
