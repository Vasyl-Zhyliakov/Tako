import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

let animation = null;

function getPath() {
  const width = window.innerWidth;
  console.log(width);

  if (width >= 1920) {
    return {
      path: document.querySelector('.motion__svg--large path'),
      start: 0,
      end: 0.5,
    };
  } else if (width >= 1440) {
    return {
      path: document.querySelector('.motion__svg--desktop path'),
      start: 0,
      end: 0.5,
    };
  } else if (width >= 1024) {
    return {
      path: document.querySelector('.motion__svg--small path'),
      start: 0,
      end: 0.5,
    };
  } else {
    return {
      path: document.querySelector('.motion__svg--tablet path'),
      start: 0.16,
      end: 0.64,
    };
  }
}

export function animateMotion() {
  const { path, start, end } = getPath();

  if (animation) {
    animation.kill();
  }

  animation = gsap.to('.motion__ball', {
    duration: 15,
    repeat: -1,
    ease: 'none',
    motionPath: {
      path: path,
      align: path,
      alignOrigin: [0.5, 0.5],
      autoRotate: true,
      start: start,
      end: end,
    },
  });
}
