//Global Variables
let ans = '';
let op1 = '';
let op2 = '';
let operand = null;
let parsed



//END Global Variables

//Elements
const container = document.querySelector('#container')

const calc = document.createElement('div')
calc.className = 'calc'
calc.textContent = 'Colculator'
calc.setAttribute('style', "color: orange;")
container.appendChild(calc)

const screen = document.createElement('div')
screen.className = 'screen'
screen.textContent = 80085
calc.appendChild(screen)

const buttonsContainer = document.createElement('div')
buttonsContainer.className = 'buttonsContainer'

const buttonNames = [
    '7','4','1','AC',
    '8','5','2','0',
    '9','6','3','=',
    '+','-','*','/'
]

let nameIndex = 0
for(let i = 0; i < 4; i++) {
    
    let row = document.createElement('div')
    row.id =`${[i]}`

    for(let j = 0; j < 4; j++) {
        let column = document.createElement('button')
        column.className = 'button'
        column.id = `${[j]}`
        column.textContent = buttonNames[nameIndex++]
        column.setAttribute('style', 'color: orange; background-color: black;')
        row.appendChild(column)
    }
    
    buttonsContainer.appendChild(row)

}
calc.appendChild(buttonsContainer)

const buttons = document.querySelectorAll('button')
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if(isNaN(button.textContent) && button.textContent != 'AC' && button.textContent !== '=') 
            {
                operand = button.textContent
                console.log(`${button.textContent} is operand`)
                screen.textContent += operand
                
            }
            else if(button.textContent === 'AC') {
                console.log('Reset Button')
                Reset();
                
            }
            else if(button.textContent === '=') {
                console.log('Equals button')
                Operate(op1, operand, op2)
                screen.textContent = ans
                
            }
            else {
                if(operand === null) {
                    screen.textContent = ''
                    op1 += button.textContent
                    screen.textContent = op1
                    //console.log(`op1 ${op1}`)
                }
                else {
                    if (screen.textContent !== op1 + operand + op2) { 
                        screen.textContent = op1 + operand; 
                    }
                    
                    op2 += button.textContent
                    screen.textContent += op2
                    console.log(`op2 ${op2}`)
                    
                }
                
            
                
            }
            
           
            console.log(`${op1}${operand}${op2}`)
            
        })
        
    })

calc.appendChild(buttonsContainer)




//END Elements

//Functions
function Add(a,b) {
    ans = parseFloat(a) + parseFloat(b)
    console.log(`${a} + ${b}`)
    console.log(ans)
}

function Subtract(a,b) {
    ans = parseFloat(a) - parseFloat(b)
    console.log(`${a} - ${b}`)
    console.log(ans)
}

function Multiply(a,b) {
    ans = parseFloat(a) * parseFloat(b)
    console.log(`${a} x ${b}`)
    console.log(ans)
}

function Divide(a,b) {
    ans = parseFloat(a) / parseFloat(b)
    console.log(`${a} / ${b}`)
    console.log(ans)
}

function Reset() {
    ans = '';
    op1 = '';
    op2 = '';
    operand = null;
    screen.textContent = '0'
    
}

function Operate(op1, operand, op2) {
switch(operand) {
    case '+' : Add(op1,op2)
        break;
    
    case '-' : Subtract(op1,op2)
        break;

    case '*' : Multiply(op1,op2)
    break;

    case '/' : Divide(op1,op2)
    break;
    default : console.log("ERROR")
    
    }
    Continue()
}

function Continue()
{
    screen.textContent = ans
    operand = null
    op1 = ans.toString()
    op2 = ''
    console.log(`operators after operation has been called ${op1} ${op2}`)
}


//END Functions

