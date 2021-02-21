export const BREAKPOINTS = {
  HANDSET: '(max-width: 599.98px) and (orientation: portrait), ' +
    '(max-width: 959.98px) and (orientation: landscape)',

  TABLET: '(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), ' +
    '(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)',

  DESKTOP: '(min-width: 840px) and (orientation: portrait), ' +
    '(min-width: 1280px) and (orientation: landscape)',
}

export function matchMedia(mediaQuery: string): MediaQueryList {
  return window && window.matchMedia(mediaQuery);
}

export function mediaIsMatched(mediaQuery: string): boolean {
  console.log(matchMedia(mediaQuery));
  return matchMedia(mediaQuery).matches;
}