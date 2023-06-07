import {Component, OnInit} from '@angular/core';
import {animate, inView, scroll, stagger, timeline} from "motion";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {

    timeline([
      ['.intro-section .header .anim-fade-in', {scale: [0, 1]}, {duration: .8, delay: stagger(0.1)}],
      ['.intro-section .header .logo', {scale: [0, 1]}, {duration: .5, at: '<'}],
      ['.intro-section .container .test-fade-in', { transform: ['translate(-101%) scale(0)', "translate(0%) scale(1)"] }, { duration: .8, delay: stagger(0.15), at: '<'}],
      ['body', { backgroundImage: [`var(--primary-dark-color)`, 'var(--gradient-color)'], backgroundPositionY: ['bottom', 'top'] }, { duration: 1, at: '-1' }],
      ['.intro-section .container .content .logo img', { borderRadius: ['30px 30px 150px 150px', '150px'], top: ['100%', '0%'], objectPosition: ['-101px -650px', '-101px 0px'] }, { duration: 1, at: '-1' }]
    ])


    inView('.features-section', () => {
      timeline([
        ['.feature-item.home-insurance', { transform: ['scale(0)', 'scale(1)'] }, { duration: 1 }],
        ['.feature-item.life-guard', { backgroundPositionY: ['550px', 'unset'] }, { duration: 1, at: '-0.7' }],
        ['.feature-item:not(.home-insurance):not(.life-guard)', { transform: ['scale(0)', 'scale(1)'] }, { duration: 1, delay: stagger(.2), at: '-0.7' }],
      ])
    })


    inView('.expert-slide-show', () => {
      timeline([
        ['.expert-section .expert-profile', { transform: ['scale(0) translateX(100px)', 'scale(1) translateX(0)'] }, { duration: 1 }],
        ['.expert-section .expert-profile .expert-image', { top: ['100%', '0'], backgroundPositionY: ['-550px', '0']}, { duration: 1, at: '-1' }],
        ['.expert-section .expert-profile .expert-info .expert-info-staggered-anim', { scale: [0, 1], }, { duration: 1, delay: stagger(.2), at: '-1' }],
        ['.expert-section .expert-title .logo', { scale: [0, 1] }, {}],
        ['.expert-section .expert-title .expert-text span', { transform: ['translateX(400px) translateY(100px)', 'translateX(0) translateY(0)'], opacity: [0, 1]  }, {  duration: 1, delay: stagger(.1), at: '-1'}],
      ])
    })


    inView('.support-section .features', () => {
      timeline([
        ['.support-section .support-slogan span', { transform: ['translateX(-200px)', 'translateX(0)'], opacity: [0, 1] }, { duration: 1, delay: stagger(0.1) }],
        ['.support-section .features .feature', { transformOrigin: ['top bottom', 'top bottom'], transform: ['scale(0) translateY(100px)', 'scale(1) translateY(0)'] }, { duration: 1, delay: stagger(0.1), at: '<' }],
        ['.support-section .support-image', { top: [ '100%', '0%' ], backgroundPositionY: ['-700px', '0'], borderRadius: ['10px 10px 150px 150px', '150px'] }, { duration: 1, at: '-1' }],
      ])
    })


    inView('.contact-section .form .header', () => {
      timeline([
        ['.contact-section .form .header', { scale: [0, 1], }, { duration: 1 }],
        ['.contact-section .contact-types .contact-type', { scale: [0, 1] }, { duration: .7, delay: stagger(.1), at: '-.7' }],
        ['.contact-section .controls-container .control-container .control-label', { scale: [0, 1], }, { duration: .7, delay: stagger(.1), at: '-1' }],
        ['.contact-section .controls-container .control-container .control', { scale: [.9, 1], opacity: [0, 1]}, { duration: .7, delay: stagger(.1), at: '-.6' }],
        ['.contact-section .controls-container .control-container .control-icon', { scale: [.9, 1], opacity: [0, 1]}, { duration: .7, delay: stagger(.1), at: '-1' }],
        ['.contact-section .controls-container .control-action-button', { scale: [0, 1] }, { duration: 1, at: '-.7' }],

        ['.contact-section .links .links-section h3', { scale: [0, 1] }, { duration: 1, at: '<' }],
        ['.contact-section .links .links-section .links-container span', { scale: [0, 1] }, { duration: 1, delay: stagger(0.05), at: '-.7' }],

        ['.contact-section .footer .logo', { scale: [0, 1] }, { duration: 1, at: '-1' }],
        ['.contact-section .footer .product span', { scale: [0, 1] }, { duration: 1, at: '-.7' }],
        ['.contact-section .footer .link', { scale: [0, 1] }, { duration: 1, at: '-.7' }],

        // ['.support-section .support-image', { top: [ '100%', '0%' ], backgroundPositionY: ['-700px', '0'], borderRadius: ['10px 10px 150px 150px', '150px'] }, { duration: 1, at: '-1' }],
      ])
    })




   /* const targetElement = document.querySelector('.features-section')

    function callback(entries: IntersectionObserverEntry[]) {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          // Calculate the visible percentage of the target element
          const visiblePercentage = entry.intersectionRatio * 100;

          if (visiblePercentage >= 20) {
            timeline([
              ['.feature-item.home-insurance', { scale: [0, 1] }, { duration: 1 }],
              ['.feature-item.life-guard', { backgroundPositionY: ['550px', 'unset'] }, { duration: 1, at: '-0.7' }]
            ])
          }
        }
      });
    }

    const observer = new IntersectionObserver(callback, { threshold: 0.2 });


    !!targetElement && observer.observe(targetElement);






    document.querySelectorAll('.scroll-section').forEach(node => {
      const snapper = node.querySelector('.snapper');
      scroll(animate(node, { opacity: [0, 1] }, { duration: 10 }), { target: snapper ?? undefined })

    });*/

  }
}
