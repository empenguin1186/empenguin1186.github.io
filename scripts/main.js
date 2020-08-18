document.addEventListener('DOMContentLoaded', function () {
    // const main = new Main();
    const menu = new MobileMenu();

    function inviewAnimation(el, inview) {
        if (inview) {
            el.classList.add('inview');
        } else {
            el.classList.remove('inview');
        }
    }

    const so = new ScrollObserver('.hero', inviewAnimation);

    // アコーディオン
    const accordion = document.querySelector('.principle__btn');
    const clickOrTap = window.ontouchstart ? 'touchstart' : 'click';
    accordion.addEventListener(clickOrTap, () => {
        document.querySelector('.principle').classList.toggle('expand');
    });

    const works = new HeroSlider('.works__slide');
    works.start();

    const blog = new HeroSlider('.blog__slide');
    blog.start();
});

class Main {
    constructor() {
        this.header = document.querySelector('.header');
        this.sides = document.querySelectorAll('.side');
        this.mobileMenu = new MobileMenu();
        this.hero = new HeroSlider('.swiper-container');
        this._observers = [];
        Pace.on('done', this._init.bind(this));
    }

    set observers(val) {
        this._observers.push(val);
    }

    get observers() {
        return this._observers;
    }

    _init() {
        this._scrollInit();
    }

    _toggleAnimation(el, inview) {
        if (inview) {
            this.hero.start();
        } else {
            this.hero.stop();
        }
    }

    _inviewAnimation(el, inview) {
        if (inview) {
            el.classList.add('inview');
        } else {
            el.classList.remove('inview');
        }
    }

    _navAnimation(el, inview) {
        if (inview) {
            this.header.classList.remove('triggered');
        } else {
            this.header.classList.add('triggered');
        }
    }

    _textAnimation(el, inview) {
        if (inview) {
            const ta = new TweenTextAnimation(el);
            ta.animate();
        }
    }

    _sideAnimation(el, inview) {
        if (inview) {
            this.sides.forEach(side => side.classList.add('inview'));
        } else {
            this.sides.forEach(side => side.classList.remove('inview'));
        }
    }

    _scrollInit() {
        this.observers = new ScrollObserver('.swiper-container', this._toggleAnimation.bind(this), { once: false });
        this.observers = new ScrollObserver('.tween-animate-title', this._textAnimation);
        this.observers = new ScrollObserver('.cover-slide', this._inviewAnimation);
        this.observers = new ScrollObserver('.travel__title', this._inviewAnimation);
        this.observers = new ScrollObserver('.nav-trigger', this._navAnimation.bind(this), { once: false });
        this.observers = new ScrollObserver('.appear', this._inviewAnimation);
        this.observers = new ScrollObserver('#main-content', this._sideAnimation.bind(this), { once: false, rootMargin: "-400px 0px" });
    }
}