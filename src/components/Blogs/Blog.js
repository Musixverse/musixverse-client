import React from 'react'
import BlogHeader from './BlogHeader'
import BlogSubHeading from './BlogSubHeading'
import BlogImage from './BlogImage'
import Blogcontent from './Blogcontent'
import BlogProfile from './BlogProfile'
import logo from "../../../public/mxv_green.png"

const Blog = () => {
  return (
    <div className='py-36'>
        <BlogProfile 
            profile={logo}
            username={'Royal'}
            lastupdated={new Date().toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"})}
        />    
        <BlogHeader>DANIEL LOVE: I&apos;M A COLLECTOR WHO BECAME A FAN</BlogHeader>
        <Blogcontent>Collector Daniel Love shares why he’s betting big on the future of music</Blogcontent>
        <BlogImage 
            src={'https://cdn-images-1.medium.com/max/1920/1*Me9PbBbaMnWGpLG57XsikA.png'}
            alt={'Daniel Love'}
            width={768}
            height={500}
        />
        <Blogcontent>
        Owning music rights has historically been a privilege of record labels, private equity funds, hedge funds, and highly connected people with wealth. Now, for the first time, anyone can own music and earn royalties.
        Royal lets fans participate in music ownership while giving artists a way to power their careers and keep creative control. This idea appealed to Daniel Love, an ex-producer living in Los Angeles. He created an account as soon as he heard about Royal’s mission and bought his first token this spring.
        </Blogcontent>
        <BlogSubHeading>Investing in the future of music</BlogSubHeading>
        <Blogcontent>
        Creating a world where artists and fans co-own music together immediately resonated with Daniel, and he decided to get involved. “Royal is helping music go back to the way it’s supposed to be,” Love said.
        </Blogcontent>
        <BlogImage
            src={'https://cdn-images-1.medium.com/max/1078/1*c57BeyXxca3oovkvKfZFdA.png'}
            alt={'Daniel Love'}
            width={768}
            height={200}
        />
        <Blogcontent>
        “As one of Royal’s first users, I’m helping pioneer change in the music industry.”
        When you buy music through Royal, you become a rightsholder of the track or album and earn royalties as the music streams. Platforms like Spotify, Apple Music, and Tidal pay out royalties on a quarterly or biannual basis, and you can claim the royalties straight from your Royal dashboard.
        <br />
        <br />
        “When I saw the possibility of how this model could disrupt the industry, I decided to put my money where my mouth is,” Love said.
        Check out his collection below.
        </Blogcontent>
    </div>
  )
}

export default Blog