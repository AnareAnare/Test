(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const toggleButtonForH1 = document.getElementById('button-hiddenh1');
        const mainTitle = document.getElementById('main-title');
        const changeOrderMiddleBlock = document.getElementById('button-changeorder');
        const blockChangeOrder = document.getElementById('block-changeorder');
        const secondBlockChangeOrder = document.getElementById('secondblock-changeorder');
        const popUp = document.getElementById('pop-up');
        const closeButton = document.getElementById('button');
        const modal = document.getElementById('modal');

        window.addEventListener('load', () => {
            popUp.classList.add('pop-up_opacity');
            modal.classList.add('pop-up_opacity');
        });
        closeButton.addEventListener('click', () => {
            modal.classList.add('modal-out');
        });
        document.addEventListener('click', e => {
            let target = e.target;
            let popupClick = target == popUp || popUp.contains(target);
            if (!popupClick) {
                modal.classList.add('modal-out');
            }
        });

        toggleButtonForH1.addEventListener('click', () => {
            mainTitle.classList.toggle('visually-hidden');
        });
        changeOrderMiddleBlock.addEventListener('click', () => {
            blockChangeOrder.classList.toggle('order3');
            secondBlockChangeOrder.classList.toggle('order2');
        });
    });
})();