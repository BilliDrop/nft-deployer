import * as React from 'react'

// import Layout from '@/components/layout/Layout';
// import ArrowLink from '@/components/links/ArrowLink';
// import ButtonLink from '@/components/links/ButtonLink';
// import UnderlineLink from '@/components/links/UnderlineLink';
// import UnstyledLink from '@/components/links/UnstyledLink';
// import Seo from '@/components/Seo';
import Layout from '../components/layout/Layout'
import Seo from '../components/Seo'
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

export default function MintingPage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <main>
          <section className="hero min-h-screen bg-base-200 bg-[url('https://uploads-ssl.webflow.com/62aa148249a8a08b3495d152/62e4246f8f93462e51ec8e0f_Small%20Goat%20Pasure.gif')]" >
            <div className='hero-content text-center'>
              <div className="max-w-md">
              <div className="form-control">
                    <label className="label">
                      <span className="label-text">Enter amount</span>
                    </label>
                    <label className="input-group">
                      <span>Price</span>
                      <input type="text" placeholder="10" className="input input-bordered" />
                      <span>GOATS</span>
                      <br />
                      <button type="button" onClick={() => router.push('/Home')} className="btn btn-primary">Get Minted</button>
                    </label>
                    </div>
              </div>
            </div>
          </section>
      </main>
    </Layout>
  );
}