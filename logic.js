var quizContainer = document.getElementById("quiz");
var submitContainer = document.getElementById("submitButton");


var jsonObject = {
    name : "Learner Style Quiz",
    questions: [
        {
            question: "I'm always on time.",
            options: ["Strongly Disagree","Somewhat Disagree","Somewhat Agree","Strongly Agree"]
        },
        {
            question: "I'm good at remembering others' names.",
            options: ["Strongly Disagree","Somewhat Disagree","Somewhat Agree","Strongly Agree"]
        },
        {
            question: "I'm one of the most organized people I know.",
            options: ["Strongly Disagree","Somewhat Disagree","Somewhat Agree","Strongly Agree"]
        },
        {
            question: "I'm sometimes surprised by how people react negatively to me.",
            options: ["Strongly Disagree","Somewhat Disagree","Somewhat Agree","Strongly Agree"]
        },
        {
            question: "I'm very different from other people: I have a unique perspective.",
            options: ["Strongly Disagree","Somewhat Disagree","Somewhat Agree","Strongly Agree"]
        },
        {
            question: "I often procrastinate",
            options: ["Strongly Disagree","Somewhat Disagree","Somewhat Agree","Strongly Agree"]
        },
        {
            question: "I seek out new experiences",
            options: ["Strongly Disagree","Somewhat Disagree","Somewhat Agree","Strongly Agree"]
        },
        {
            question: "In a group setting, I let others make decisions",
            options: ["Strongly Disagree","Somewhat Disagree","Somewhat Agree","Strongly Agree"]
        },
        {
            question: "When I get interested in something, I can hyperfocus on it for hours.",
            options: ["Strongly Disagree","Somewhat Disagree","Somewhat Agree","Strongly Agree"]
        },
        {
            question: "I find myself worrying about the future or the past.",
            options: ["Strongly Disagree","Somewhat Disagree","Somewhat Agree","Strongly Agree"]
        },
        {
            question: "I enjoy it when I'm the center of attention.",
            options: ["Strongly Disagree","Somewhat Disagree","Somewhat Agree","Strongly Agree"]
        },
        {
            question: "I take pride in my ability to wing it.",
            options: ["Strongly Disagree","Somewhat Disagree","Somewhat Agree","Strongly Agree"]
        },
        {
            question: "I often find myself daydreaming about the future or past.",
            options: ["Strongly Disagree","Somewhat Disagree","Somewhat Agree","Strongly Agree"]
        },
        {
            question: "When things don't go as planned, I get easily frustrated or upset.",
            options: ["Strongly Disagree","Somewhat Disagree","Somewhat Agree","Strongly Agree"]
        },
        {
            question: "I have a vivid memory of the past.",
            options: ["Strongly Disagree","Somewhat Disagree","Somewhat Agree","Strongly Agree"]
        },
        {
            question: "I go to others for comfort and support when I'm distressed",
            options: ["Strongly Disagree","Somewhat Disagree","Somewhat Agree","Strongly Agree"]
        },
        {
            question: "I rely on myself when I'm distressed",
            options: ["Strongly Disagree","Somewhat Disagree","Somewhat Agree","Strongly Agree"]
        },
        {
            question: "I don't worry about speaking my mind.",
            options: ["Strongly Disagree","Somewhat Disagree","Somewhat Agree","Strongly Agree"]
        },
        {
            question: "I have a creative mind.",
            options: ["Strongly Disagree","Somewhat Disagree","Somewhat Agree","Strongly Agree"]
        },
        {
            question: "I pick up on new information quickly.",
            options: ["Strongly Disagree","Somewhat Disagree","Somewhat Agree","Strongly Agree"]
        },
        {
            question: "My friends and family think I have a good sense of humor.",
            options: ["Strongly Disagree","Somewhat Disagree","Somewhat Agree","Strongly Agree"]
        },
        {
            question: "I often find myself saying something inappropriate, even though I don't intend any harm.",
            options: ["Strongly Disagree","Somewhat Disagree","Somewhat Agree","Strongly Agree"]
        },
        {
            question: "When it comes to solving problems, I trust myself more than anyone else to come up with the best solution.",
            options: ["Strongly Disagree","Somewhat Disagree","Somewhat Agree","Strongly Agree"]
        },
        {
            question: "I sometimes lie to protect others from realities I know they won't accept.",
            options: ["Strongly Disagree","Somewhat Disagree","Somewhat Agree","Strongly Agree"]
        },
        {
            question: "Everyone knows a different version of me, but few people know the real me.",
            options: ["Strongly Disagree","Somewhat Disagree","Somewhat Agree","Strongly Agree"]
        },
        {
            question: "People sometimes get annoyed with me when I have a lot of energy.",
            options: ["Strongly Disagree","Somewhat Disagree","Somewhat Agree","Strongly Agree"]
        },
        {
            question: "I'm frequently hard on myself if I make mistakes trying or learning something new.",
            options: ["Strongly Disagree","Somewhat Disagree","Somewhat Agree","Strongly Agree"]  
        },
        {
            question: "I tend to have friends who have very different personalities than I do.",
            options: ["Strongly Disagree","Somewhat Disagree","Somewhat Agree","Strongly Agree"]
        },
        {
            question: "Before making a major decision, I tend to plan and do a lot of research and thinking.",
            options: ["Strongly Disagree","Somewhat Disagree","Somewhat Agree","Strongly Agree"]
        },
        {
            question: "Music is an important part of my life.",
            options: ["Strongly Disagree","Somewhat Disagree","Somewhat Agree","Strongly Agree"]
        },
        {
            question: "I'm a naturally good reader.",
            options: ["Strongly Disagree","Somewhat Disagree","Somewhat Agree","Strongly Agree"]
        },
        {
            question: "When things are disorganized/messy, I get frustrated or anxious.",
            options: ["Strongly Disagree","Somewhat Disagree","Somewhat Agree","Strongly Agree"]
        },
        {
            question: "I tend to be critical of myself and others.",
            options: ["Strongly Disagree","Somewhat Disagree","Somewhat Agree","Strongly Agree"]
        },
        {
            question: "I'm quick to spot problems that others overlook.",
            options: ["Strongly Disagree","Somewhat Disagree","Somewhat Agree","Strongly Agree"]
        }
        // ,
        // {
        //     question: "I have a high tolerance for discomfort or pain.",
        //     options: ["Strongly Disagree","Somewhat Disagree","Somewhat Agree","Strongly Agree"]
        // }

    ]
}
var choices = ["a", "b", "c", "d" , "e", "f"]

function buildQuiz1(){
    const output = [];
    const questionAns = [];
    for(let i = 0; i < jsonObject['questions'].length; i++){
            const ans = [];
            for(let x = 0; x < jsonObject['questions'][i]['options'].length; x++){
                    ans.push(
                    `<label>
                    <input type="radio" name="question${i}" value="${jsonObject['questions'][i]['options'][x]}">
                    ${choices[x]} :
                    ${jsonObject['questions'][i]['options'][x]}
                    </label>`
               );
            }

            /*
            add question and ans to a new list with the div tag similar to what reg happens
            then add that to the output
            */
            
            output.push(`
            <div class = "quesAns"> 
                <div class="question"> ${ (i + 1) + ". " + jsonObject['questions'][i]['question']} </div>  
                <div class="answers"> ${ans.join('')} </div>   
            </div>`);
            output.push(`<br>`)
            
        }
   quizContainer.innerHTML = output.join('');

}
buildQuiz1()
var Quiz = {
    studentAns:[
    ]
}

function display(msg){
    alert(msg);
}
/*
studentAns: Array(4)
    0: {question: '', answer: ''}
    1: "I'm always on time."
    2: "I'm good at remembering others' names."
    3: "I'm one of the most organized people I know."

    0) json(question, ans)
    1-3) string(question)
*/
function buildResults(){
    Quiz = {
        studentAns:[
        ]
    }
    var ansContainers = quizContainer.querySelectorAll('.answers');
    for(let i = 0; i < jsonObject['questions'].length; i++){
        const answerContainer = ansContainers[i];
        let selector = `input[name=question${i}]:checked`;
        let userAns = (answerContainer.querySelector(selector) || {}).value;
        if(!userAns){
            alert("please answer all questions: question #" + (i+1) );
            return;
        }
        Quiz['studentAns'].push({question:jsonObject['questions'][i]['question'], answer: userAns});
        console.log(Quiz);
        //results["answer"].push(userAns);
    }
    console.log(Quiz)

    //send a post request with the results as body
    displayResults();
    
}

function httpPost(theUrl){
    let xmlHTTPReq = new XMLHttpRequest();
    xmlHTTPReq.open("POST", theUrl, false);
    xmlHTTPReq.setRequestHeader("Accept", "*/*");
    xmlHTTPReq.setRequestHeader("Content-type", "application/json");
    xmlHTTPReq.send(JSON.stringify(Quiz));
    return xmlHTTPReq.responseText;
}

function displayResults(){
    var data = httpPost('http://tests-env.eba-2tcvtitb.us-east-1.elasticbeanstalk.com/learn/compute')
    //data = JSON.parse(data)
    display(data);
}
submitContainer.addEventListener('click', buildResults);
