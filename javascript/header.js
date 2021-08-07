class Header {
    constructor() {
        this.init()

    }
    init() {
        document.querySelector('.mobile-header-menu').addEventListener('click', () => {
            document.querySelector('.mobile-navigation').style.display = "block"
        });
        document.querySelector('.mobile-navigation').addEventListener('click', () => {
            document.querySelector('.mobile-navigation').style.display = "none"
        })
    }
}

new Header;