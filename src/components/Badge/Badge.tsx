import { BadgeRoot, Content } from "./Badge.styles";

type CounterBadge = {
  badgeContent: number;
  max: number;
  variant?: 'counter'
  showZero?: boolean
}

type DotBadge = {
  variant?: 'dot',
  badgeContent?: never;
  max?: never;
  showZero?: never
}

type CustomBadge = {
  badgeContent: JSX.Element;
  max?: never;
  variant?: 'custom'
  showZero?: never
}

type BadgeProps = {
  invisible?: boolean
  children: JSX.Element;
} & (CounterBadge | DotBadge | CustomBadge);

export const Badge = ({
  badgeContent = 1,
  max = 99,
  invisible = false,
  showZero = false,
  variant = 'dot',
  children,
}: BadgeProps) => {
  const showMax = Boolean((badgeContent && max) && badgeContent >= max);

  const hide = invisible || (badgeContent === 0 && !showZero)
  
  return (
    <BadgeRoot>
      <Content showMax={showMax} variant={variant} invisible={hide}>
        {variant !== 'dot' && (showMax ? max : badgeContent)}
      </Content>
      {children}
    </BadgeRoot>
  );
};
