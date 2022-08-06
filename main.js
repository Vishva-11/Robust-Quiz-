const correctAnswers = ['B','A','A','A'];
const form = document.querySelector('.quiz-form');
let displayScore = document.querySelector('.result');
 
 
form.addEventListener('submit', e => {
    e.preventDefault();
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    console.log(userAnswers);
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }

    });
 
    //show results 
    scrollTo(0,0); // this will take us to top of window object

    // animationss
    // let i=0;
    // let timer =setInterval(()=>{
    //     console.log('hello')
    //     i++;
    //     if(i===3)
    //     {
    //         clearInterval(timer); // clearInterval is also default method that clears any interval so it is not present anymore
    //     }
    // }, 2500); // this is like set timeout but it repeats the function every 2500 ms but it doesnt stop till clearinterval occurs

    let output=0;

    let timer =setInterval(()=>{
        displayScore.querySelector('span').textContent = `${output}%`;
        if(output===score)
        {
            clearInterval(timer);
        }else{
            output++;
        }
    },15)

    displayScore.classList.remove('d-none');
 
});

// window object 

window.console.log('hello'); 
// it is same as console.log 
//window object is father of all object

// setTimeout(()=>{
// // alert('Hello Robust');
// }, 3000)

// it sets time out