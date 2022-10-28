import React from 'react'
import HeaderSection from '../Sections/Header/HeaderSection'
import { headerData } from '../data/Data'
import ContactUs from '../Sections/ContactUs/ContactUs'
import LiveStreams from '../Sections/LiveItem/LiveStreams'
import Channels from '../Sections/Channels/Channels'
import Categories from '../Sections/Categories/Categories'
import Navbar from '../Navbars/Navbar';

import { SliderData } from '../Sections/Lives/SliderData';
import Slider from '../Sections/Lives/Slider';

import video from '../../videos/video6.mp4'
import Footer from '../Sections/Footer/Footer'

function HomePage() {
  const { headline, slogan, description } = headerData

  return (
    <>
      <Navbar />
      <HeaderSection
        headline={headline}
        slogan={slogan}
        description={description}
        videoSourceURL={video}
      />
      <Slider slides={SliderData} props={'Streams'}/>
      <LiveStreams />
      <Channels />
      <Categories />
      <ContactUs />

      <Footer />
    </>
  )
}
export default HomePage
