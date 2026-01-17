import CompanyStory from '@/components/about/CompanyStory'
import MissionVision from '@/components/about/MissionVision'
import OurWork from '@/components/about/OurWork'
import ProductCta from '@/components/about/ProductCta'
import HeroBanner from '@/components/hero/HeroBanner'
import React from 'react'

const page = () => {
  return (
    <section>
      <HeroBanner/>
      <CompanyStory/>
      <MissionVision/>
      <OurWork/>
      <ProductCta/>
    </section>
  )
}

export default page