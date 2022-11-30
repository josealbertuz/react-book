import { MarqueeContent, MarqueeRoot } from './Marquee.styles'

type MarqueeProps = {
    items: JSX.Element[]
    reverse?: boolean
    pauseOnHover?: boolean
}

export const Marquee = ({items, reverse = false, pauseOnHover = false}: MarqueeProps) => {
  return (
    <MarqueeRoot pauseOnHover={pauseOnHover}>
      <MarqueeContent reverse={reverse}>
        {items.map((item, index) => (
          <li key={`items-${index}`}>{item}</li>
        ))}
      </MarqueeContent>
      <MarqueeContent reverse={reverse}>
        {items.map((item, index) => (
          <li key={`items-duplicate-${index}`}>{item}</li>
        ))}
      </MarqueeContent>
    </MarqueeRoot>
  );
}
