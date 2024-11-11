document.addEventListener('DOMContentLoaded', () => {
    let viewer = document.querySelector('.viewer')
    let equals = document.querySelector('.equals')
    let clear = document.querySelector('.clear')
    let nums = document.querySelectorAll('.num')
    let ops = document.querySelectorAll('.ops')

    let theNum = ''
    let prevNum = ''
    let resultNum
    let operator

    nums.forEach((num) => {
        num.addEventListener('click', (e) => {
            theNum += e.target.getAttribute('data-num');
            viewer.innerText = theNum;
        });
    });

    ops.forEach((op) => {
        op.addEventListener('click', (e) => {
            prevNum = theNum;
            theNum = '';
            operator = e.target.getAttribute('data-ops');
            switch (operator) {
                case 'plus':
                    viewer.innerText = '+'
                    break;
                case 'minus':
                    viewer.innerText = '-'
                    break;
                case 'times':
                    viewer.innerText = '*'
                    break;
                case 'divided by':
                    viewer.innerText = '/'
                    break;
            }
        });
    });

    equals.addEventListener('click', () => {
        prevNum = parseFloat(prevNum)
        theNum = parseFloat(theNum)

        switch (operator) {
            case 'plus':
                resultNum = prevNum + theNum
                break;
            case 'minus':
                resultNum = prevNum - theNum
                break;
            case 'times':
                resultNum = prevNum * theNum
                break;
            case 'divided by':
                resultNum = theNum !== 0 ? prevNum / theNum : 'Erro!!'
                break;
            default:
                resultNum = theNum
        }
        viewer.innerText = resultNum
        prevNum = ''
        theNum = resultNum   
    })

    clear.addEventListener('click', () => {
        prevNum = ''
        theNum = ''
        resultNum = ''
        viewer.innerText = '0'
    })
})