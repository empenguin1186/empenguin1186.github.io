document.addEventListener('DOMContentLoaded', function () {
    const main = new Main();
});

class Main {
    constructor() {
        this.mobileMenu = new MobileMenu();
        this._observers = [];
        this._swipers = [];
        Pace.on('done', this._init.bind(this));
    }

    set observers(val) {
        this._observers.push(val);
    }

    get observers() {
        return this._observers;
    }

    set swipers(val) {
        this._swipers.push(val);
    }

    get swipers() {
        return this._swipers;
    }

    _init() {
        this._scrollInit();
        this._swiperInit();
        this._accordionInit();
        this._moveTopInit();
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

    _headerBgChange(el, inview) {
        const header = document.querySelector('.header');
        if (inview) {
            header.classList.add('top');
        } else {
            header.classList.remove('top');
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

    // スクロール監視クラスの初期化
    _scrollInit() {
        this.observers = new ScrollObserver('.hero__texts', this._inviewAnimation);
        this.observers = new ScrollObserver('.hero__title', this._inviewAnimation);
        this.observers = new ScrollObserver('.hero__vertical', this._inviewAnimation);
        // this.observers = new ScrollObserver('.principle', this._headerBgChange, { once: false });
        this.observers = new ScrollObserver('.principle', this._inviewAnimation);
        this.observers = new ScrollObserver('.service', this._inviewAnimation);
        this.observers = new ScrollObserver('.works', this._inviewAnimation);
        this.observers = new ScrollObserver('.blog', this._inviewAnimation);
        this.observers = new ScrollObserver('.about', this._inviewAnimation);
        this.observers = new ScrollObserver('.contact', this._inviewAnimation);
        this.observers = new ScrollObserver('.footer', this._inviewAnimation);
        this.observers = new ScrollObserver('.title__main', this._textAnimation);
        this.observers = new ScrollObserver('.title__sub', this._textAnimation);
    }

    // スライドの初期化
    _swiperInit() {
        this._setSwipersAll();
        this._swipers.forEach(el => {
            el.start();
        });
    }

    _setSwipersAll() {
        this.swipers = new HeroSlider('.works__slide');
        this.swipers = new HeroSlider('.blog__slide');
    }

    // アコーディオンの初期化
    _accordionInit() {
        const accordion = document.querySelector('.principle__btn');
        const clickOrTap = window.ontouchstart ? 'touchstart' : 'click';
        accordion.addEventListener(clickOrTap, () => {
            document.querySelector('.principle').classList.toggle('expand');
        });
    }

    // クリックするとページトップに遷移するボタンの初期化
    _moveTopInit() {
        $(function () {
            const scroll = $('.scroll');
            scroll.hide();
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    scroll.fadeIn();
                } else {
                    scroll.fadeOut();
                }
            });
            scroll.click(function () {
                $('body, html').animate({ scrollTop: 0 }, 500);
                return false;
            });
        })
    }
}