import { CMS_NAME } from '../lib/constants'

/**
 * The intro block/blurb that sits next to the welcome title.
 */
const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-14 ">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 md:mr-16 lg:min-w-max-content">
        👋 Hi, I'm Ryan.
      </h1>
      <div className="border-2 rounded-lg mt-16 md:mt-auto md:mb-auto">
        <h4 className="text-center md:text-left text-lg m-5">
          <p>🚀 I help teams and their software products reach their full potential.</p>
          <br/>
          <p className="">🎯 I've spent the last 15 years helping teams work better together, bring their ideas to life, and get out of toxic cycles of burnout to build lasting productivity.</p>
        </h4>
      </div>
    </section>
  )
}

export default Intro
