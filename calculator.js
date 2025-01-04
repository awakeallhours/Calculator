//Global Variables
let ans = 0;
let op1 = null;
let op2 = null;
let operand = null;
let op1Store = []
let parsed



//END Global Variables

//Elements
const container = document.querySelector('#container')

const calc = document.createElement('div')
calc.className = 'calc'
calc.textContent = 'Colculator'
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
            if(isNaN(button.textContent) && button.textContent != 'AC' && button.textContent !== '=') //||isNaN(button.textContent) )
            {
                operand = button.textContent
                console.log(`${button.textContent} is operand`)
                if(op1 = 0 && operand === undefined) {
                    op1 = button.textContent
                    console.log(`op1 ${op1}`)
                }
            }
            else if(button.textContent === 'AC') {
                console.log('Reset Button')
                Reset();
                
            }
            else if(button.textContent === '=') {
                console.log('Equals button')
                Operate(op1, operand, op2)
                
            }
            else {
                //this works for op1 to screen but i need to get rid of the null
                //at the beginning
                op1 += button.textContent
                
                 
                 //*************** */
                parsed = parseInt(button.textContent)
              
                if(operand === null && button.textContent != 'AC' && button.textContent != '=') {
                    //op1 = op1 +=parsed
                    
                }
               
                screen.textContent = op1
                console.log(`${op1}`)
                
            }
            console.log(`button text content ${button.textContent}`)
            
        })
        return button
    })

calc.appendChild(buttonsContainer)




//END Elements

//Functions
function Add(a,b) {
    ans = a + b
    console.log(`${a} + ${b}`)
    console.log(ans)
}

function Subtract(a,b) {
    ans = a - b
    console.log(`${a} - ${b}`)
    console.log(ans)
}

function Multiply(a,b) {
    ans = a * b
    console.log(`${a} x ${b}`)
    console.log(ans)
}

function Divide(a,b) {
    ans = a / b
    console.log(`${a} / ${b}`)
    console.log(ans)
}

function Reset() {
    ans = null;
    numberStore = []
    op1 = null;
    op2 = null;
    operand = null;
    console.log(ans)
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
}
//!!!!!! REMEMBER TO TEST BUTTONS WOITH CONSOLE LOG
function showCalcs() {
    screen.textContent = ''
        
       

    
    
    
    //Operate()
   
    

   
}

//END Functions
showCalcs(1,'-',1)
