import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
        <div className='align-element grid md:grid-cols-2 items-center gap-16'>
            <img src={aboutSvg}  className='w-full h-64'/>
            <article>
                <SectionTitle text='code and coffee' />
                <p className='text-slate-600 mt-8 leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatum libero molestiae voluptatem ad alias, officia quo nostrum maxime id ex commodi! Aliquid, facilis in accusamus aspernatur magnam consectetur ipsam.
                Delectus ut recusandae iusto dignissimos. Et, eaque necessitatibus quo facere quos incidunt, laboriosam, hic est corrupti soluta asperiores rerum qui? Praesentium libero esse accusamus magni sed nam, ullam dolores qui.</p>
            </article>
        </div>
    </section>
  )
}

export default About
