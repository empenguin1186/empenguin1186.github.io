/**
 * メニューを開閉するクラス
 * 
 * @class MobileMenu
 */
class MobileMenu {

    /**
     * @constructor
     */
    constructor() {
        this.DOM = {};
        this.DOM.btn = document.querySelector('.mobile-menu__btn');
        this.DOM.cover = document.querySelector('.mobile-menu__cover');
        this.DOM.menu = document.querySelector('.mobile-menu');
        this.DOM.title = document.querySelector('.mobile-menu__title');
        this.DOM.container = document.querySelector('#global-container');
        this.eventType = this._getEventType();
        this._splitTitle();
        this._addEvent();
    }

    /**
     * スマホからのタッチか、PCからのクリックかを判定するメソッド
     * @method _getEventType
     */
    _getEventType() {
        // event = touchstart は、ボタンに触れたら即発火するイベント。
        // スマホで event = click が登録されているボタンに触れた場合、指を離して300ms経過したのちにコールバックが発火する。
        return window.ontouchstart ? 'touchstart' : 'click';
    }

    /**
     * メニューの開閉を行うメソッド
     * @method _toggle
     */
    _toggle() {
        console.log(this);
        this.DOM.container.classList.toggle('menu-open');
        this.DOM.menu.classList.toggle('inview');
    }

    /**
     * イベントを登録するメソッド
     * 
     * @method _addEvent
     */
    _addEvent() {
        // bind を付与しないと、this は btn のHTMLElementを指してしまう
        this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
        this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
    }

    /**
     * タイトルを1文字ずつ分解するメソッド
     * 
     * @method _splitTitle
     */
    _splitTitle() {
        const chars = this.DOM.title.innerHTML.trim().split('');
        this.DOM.title.innerHTML = chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return acc += `<span>${curr}</span>`;
        }, "");
    }
}