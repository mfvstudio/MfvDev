import { gsap } from 'gsap';
import { ExpoScaleEase } from 'gsap/EasePack';
import { SplitText } from 'gsap/SplitText';
import { ScrambleTextPlugin } from 'gsap/all';

export default function animate() {
  if (!import.meta.client) return;
  const width = window.innerWidth;
  const height = window.innerHeight;
  const square = Array.from(document.getElementsByClassName('transition-title'))[0];
  square?.setAttribute('x', `${width * 0.05}`);
  // square.setAttribute("y", `${height * 0.5}`);

  const leftTl = gsap.timeline();
  leftTl.to('.left-title', { x: width * 0.5, duration: 0.7 });
  leftTl.to('.left-title', { x: width * 0.5 + 5, rotation: 45, duration: 0.5, transformOrigin: '0% 50%', delay: 0.3 });
  leftTl.to('.left-title', { x: width, duration: 0.7 });

  const rightTl = gsap.timeline();
  rightTl.to('.right-title', { x: -width * 0.5 + 50, duration: 0.7 });
  rightTl.to('.right-title', { x: -width * 0.5 - 5, rotation: 45, duration: 0.5, transformOrigin: '100% 00%', delay: 0.3 });
  rightTl.to('.right-title', { x: -width, duration: 0.7 });

  const squareTl = gsap.timeline();
  squareTl.to('.transition-title', {
    x: width * 0.5,
    y: height * 0.25,
    rotation: -45,
    duration: 0.7,
  });
  squareTl.to('.transition-title', {
    transformOrigin: 'center',
    scaleY: 20,
    scaleX: 10,
    duration: 0.7,
    ease: ExpoScaleEase.config(0.1, 5),
  });
}

export function animateCharsUp(str: string) {
  if (!import.meta.client) return;
  const split = SplitText.create(str, {
    type: 'chars',
  });
  gsap.to(split.chars, {
    duration: 0.5,
    y: -20,
    stagger: 0.03,
  });
}

export function animateCharsDown(str: string) {
  if (!import.meta.client) return;
  const split = SplitText.create(str, {
    type: 'chars',
  });
  gsap.to(split.chars, {
    duration: 0.5,
    y: 20,
    stagger: 0.03,
  });
}

export function animateCharsRightToLeftAppearing(str: string) {
  if (!import.meta.client) return;
  const split = SplitText.create(str, {
    type: 'chars',
  });
  gsap.from(split.chars, {
    x: 150,
    opacity: 0,
    duration: 0.7,
    ease: 'power4',
    stagger: 0.04,
  });
}

export function animateCharsRightToLeftDisappear(str: string) {
  if (!import.meta.client) return;
  const split = SplitText.create(str, {
    type: 'chars',
  });
  gsap.to(split.chars, {
    opacity: 0,
    x: -150,
    duration: 0.5,
    ease: 'power4',
    stagger: 0.04,
  });
}

/**
 * The index number of the list member will be added to the class name
 * @param str the class to animate without the index suffix
 * @param count the number of items in the list
 */
export function animateListItemsUpAppearing(str: string, count: number) {
  if (!import.meta.client) return;
  for (let i = 0; i < count; i++) {
    gsap.from(`${str}-${i}`, {
      opacity: 0,
      duration: 0.5,
      ease: 'power4',
      delay: 0.1 * i,
      y: 250,
    });
  }
}

export function animateListItemsLeftDisappearing(str: string, count: number) {
  if (!import.meta.client) return;
  for (let i = 0; i < count; i++) {
    gsap.to(`${str}-${i}`, {
      opacity: 0,
      duration: 0.5,
      ease: 'power4',
      delay: 0.1 * i,
      x: -150,
    });
  }
}

export function animateTextMaskedAppearing(str: string) {
  if (!import.meta.client) return;
  gsap.set(str, {
    opacity: 1,
  });
  const split = SplitText.create(str, {
    type: 'chars, words',
    mask: 'chars',
  });
  gsap.from(split.chars, {
    duration: 2,
    yPercent: 'random([-150,150])',
    xPercent: 'random([-150,150])',
    stagger: {
      from: 'random',
      amount: 2,
    },
    ease: 'power3.out',
  });
}

export function animateScrambleText(str: string) {
  if (!import.meta.client) return;
  gsap.registerPlugin(ScrambleTextPlugin);
  const split = SplitText.create(str, {
    type: 'chars',
    charsClass: 'char',
  });
  return gsap.to(split.chars, {
    duration: 2,
    overwrite: true,
    stagger: 0.05,
    scrambleText: {
      text: '{original}',
      chars: 'マリオフロレスヴェンセス',
      speed: 0.4,
    },
  });
}

export function animateScrambleTextTimeline(el: HTMLElement) {
  if (!import.meta.client) return;
  gsap.registerPlugin(ScrambleTextPlugin);
  let tl = gsap.timeline({paused: true});
  tl.to(el, {
    duration: 2,
    stagger: 0.05,
    scrambleText: {
      text: 'プラジェクトアーカイブ',
      chars: 'マリオフプラジェクトロレスヴェンセスアーカイブ',
      revealDelay: 0.2,
    },
  });
  return tl;
}

export function animateScanWipe(el: string) {
  if (!import.meta.client) return;

  gsap.fromTo(
    `${el}`,
    { yPercent: 500 },
    {
      yPercent: 0,
      duration: 1.4,
      ease: 'power2.out',
    }
  );
}

export function animateScanTitle(selector: string) {
  if (!import.meta.client) return;

  gsap.fromTo(
    selector,
    { opacity: 0 },
    { opacity: 1, duration: 0.2 }
  );

  gsap.to(selector, {
    delay: 0.1,
    duration: 1.6,
    scrambleText: {
      text: '{original}',
      chars: '01▒░█',
      speed: 0.3,
    },
    ease: 'none',
  });
}

export function animateScanSections() {
  if (!import.meta.client) return;

  gsap.utils.toArray<HTMLElement>('.scan-section').forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
      },
    });
  });
}



