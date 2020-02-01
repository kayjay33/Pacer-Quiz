const maxPoints = ['A', 'G', 'C', 'D'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //check answers
    userAnswers.forEach((answer, index) => {
        if(answer === maxPoints[index]){
            score +=25;
        } else {
            score +=0;
        } 
        
    });



    //show result on page
    scroll(0,0);
    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);

        if (score <= 70){
        document.getElementById('closing').style.display = 'none';
        } else {

        }

    function refreshPage(){
        window.location.reload();
    }
});

