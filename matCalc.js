document.addEventListener('DOMContentLoaded', () => {
    var viewer = document.querySelector('.viewer')
    var equals = document.querySelector('.equals')
    var clear = document.querySelector('.clear')
    var nums = document.querySelectorAll('.num')
    var ops = document.querySelectorAll('.ops')

    var theNum = ''
    var prevNum = ''
    var resultNum
    var operator

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

const checkbox = document.querySelector('.checkbox')
const scientificFunctions = document.querySelector('.scientificCalc')

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        scientificFunctions.classList.add('show')
    } else {
        scientificFunctions.classList.remove('show')
    }
})

document.addEventListener('DOMContentLoaded', () => {
    var sin = document.querySelector('.sin')
    var cos = document.querySelector('.cos')
    var tan = document.querySelector('.tan')

    sin.addEventListener('click', () => {
        theNum = Math.sin(theNum)
        viewer.innerText = theNum
    })

    cos.addEventListener('click', () => {
        theNum = Math.cos(theNum)
        viewer.innerText = theNum
    })

    tan.addEventListener('click', () => {
        theNum = Math.tan(theNum)
        viewer.innerText = theNum
    })  
})