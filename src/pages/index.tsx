import * as React from 'react'

// import Layout from '@/components/layout/Layout';
// import ArrowLink from '@/components/links/ArrowLink';
// import ButtonLink from '@/components/links/ButtonLink';
// import UnderlineLink from '@/components/links/UnderlineLink';
// import UnstyledLink from '@/components/links/UnstyledLink';
// import Seo from '@/components/Seo';
import Layout from '../components/layout/Layout'
import Seo from '../components/Seo'
import Link from 'next/link';
import useRouter from 'next/router';
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
// import Vercel from '~/svg/Vercel.svg';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// BehtmlFore you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {

const router = useRouter



  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <main>
        
          <section className="hero min-h-screen bg-base-200 bg-[url('https://uploads-ssl.webflow.com/62aa148249a8a08b3495d152/62e4246f8f93462e51ec8e0f_Small%20Goat%20Pasure.gif')]" >
            <div className='hero-content text-center'>
              <div className="max-w-md">
                <h1 className="text-5xl font-bold my-10">We're Ready... <br /> Are You?</h1>
                
                  <div className="mockup-code">
                    <pre data-prefix="$"><code>yarn hardhat run mint/the-herd.json</code></pre> 
                     <pre data-prefix=">" className="text-warning"><code>Broadcasting Tx...</code></pre> 
                     <pre data-prefix=">" className="text-"><code> Tx Taking longer than Usual...</code></pre> 
                     <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
                     
                    
                </div>
                      

                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button type="button" onClick={() => router.push('/MintingPage')} className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </section>
          <div className="grid h-screen place-content-center">
			    <h1 className="text-4xl font-bold">
				    NextJs + Tailwind + DaisyUI template
			    </h1>
			    <p className="mt-4 text-2xl text-center">
			    	Starter template for building prototypes
			    </p>
		    </div>
        
      </main>
    </Layout>
  );
}