export const animationMixin = (
  name = ``,
  duration = `1s`,
  timingFunction = `ease`,
  delay = `0s`,
  iterationCount = `1`,
  direction = `normal`,
  fillMode = `forwards`
) => {
  return `
    animation-name: ${name};
    animation-duration: ${duration};
    animation-timing-function: ${timingFunction};
    animation-delay: ${delay};
    animation-iteration-count: ${iterationCount};
    animation-direction: ${direction};
    animation-fill-mode: ${fillMode};
    `;
};
