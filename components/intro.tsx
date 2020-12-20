import { CMS_NAME } from '../lib/constants'
import ConvertKitForm from 'convertkit-react'


/**
 * The intro block/blurb that sits next to the welcome title.
 */
const Intro = () => {
  return (
    <>
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-10 md:mb-14 ">
      <div className="flex flex-col mx-auto">
        <img className="my-auto w-36 border-2 border-black rounded-full mx-auto mb-4" src="/img/ryan-hayes.jpg" />
        <h1 className="mx-auto text-6xl md:text-8xl font-bold tracking-tighter leading-tight lg:min-w-max-content">
          Hi, I'm Ryan.
        </h1>
      </div>
    </section>
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div className="flex border-2 rounded-lg p-5">
        <h4 className="text-center md:text-left text-lgmy-auto">
          <p>🚀 I help teams and their software products reach their full potential.</p>
          <br/>
          <p>🎯 I've spent the last 15 years helping fully remote teams work better together, bring their ideas to life, and get out of toxic cycles of burnout to build lasting productivity.</p>
          <br/>
          <p>📬 Each week I send out a newsletter of tips, tools, ideas and systems to help you be more effective from anywhere in the world!</p>
        </h4>
      </div>
      <div className="flex flex-col border-2 rounded-lg p-4">
        <h2 className="font-extrabold text-2xl">Join the newsletter!</h2>
        <p className="pb-4">
          I write weekly about developer productivity and high 
          performance cultures. Join the club of team-focused developers!
        </p>
        <ConvertKitForm template="Clare" formId={1856231} />
      </div>
    </section>
    </>
  )
}

export default Intro
