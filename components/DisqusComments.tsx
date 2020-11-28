import {DiscussionEmbed} from "disqus-react"
const DisqusComments: React.FC<{id: string, title: string, slug: string}> = props => {
  const disqusShortname = "ryanhayesblog"
  const disqusConfig = {
    url: `https://ryanhayes.net/${props.slug}`,
    identifier: props.id, // Single post id
    title: props.title // Single post title
  }
  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}
export default DisqusComments;