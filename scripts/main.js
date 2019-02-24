$(document).ready(() => {
    new Menu();
});

class Menu {
    navEl$ = $('.nav');
    navTopOffset$ = null;
    
    constructor() {
        this.setup();
    }
    
    setup() {
        this.setTopOffset();
        this.handleStickyNav();
        this.addScrollListener();
    }
    
    addScrollListener() {
        $(window).scroll(() => {
            this.handleStickyNav();
        });
    }
    
    setTopOffset() {
        if (!this.navEl$) {
            console.warn('Unable to read navEl: ', this.navEl$);
            return;
        }
        this.navTopOffset$ = this.navEl$.offset().top;
    }
    
    handleStickyNav() {
        const scrollY = $(window).scrollTop();
        const isStickyRequired = (scrollY > this.navTopOffset$);
        
        isStickyRequired
            ? this.navEl$.addClass('sticky')
            : this.navEl$.removeClass('sticky');
    }
}
