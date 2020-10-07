
var questions = [
    {
        question: 'Tên Tiêng anh con chó là?',
        answer: [
            "Cat",
            "Mouse",
            "Dog",
            "Pig",
        ],
        correct: 2
    },
    {
        question: 'Hà Nội năm 2020 có bao nhiêu xe máy ?',
        answer: [
            "1 triệu xe",
            "670 nghìn xe",
            "200 nghìn xe",
            "68 nghìn xe",
        ],
        correct: 3
    },
    {
        question: 'Bỏ ngoài nướng trong, ăn ngoài bỏ trong là gì?',
        answer: [
            "Nướng bắp ngô",
            "bác sĩ",
            "con tàu",
            "kim tran",
        ],
        correct: 0
    },
    {
        question: 'Con chó đỏ người ta gọi là con chó?',
        answer: [

            "con cho đen",
            "Con chó đỏ",
            " bắp ngô",
            "bác sĩ"
        ],
        correct: 1
    },
    {
        question: 'Con gì ăn lửa với nước than?',
        answer: [
            "Nướng chim",
            "bác sĩ",
            "con tàu",
            "Y tá",
        ],
        correct: 2
    },
    {
        question: 'Trên nhấp dưới giật là đang làm gì?',
        answer: [
            "đi xe",
            "bác sĩ",
            "sửa xe",
            "câu cá",
        ],
        correct: 3
    },
    {
        question: 'Con đường dài nhất là đường nào?',
        answer: [
            "Nướng bắp ngô",
            "bác sĩ",
            "Không có",
            "con đường tàu",
        ],
        correct: 3
    },
    {
        question: 'Tay cầm cục thịt nắn nắn?',
        answer: [
            "Nướng bắp ngô",
            "bác sĩ",
            "con tàu",
            "cho Con bú",
        ],
        correct: 3
    },
    {
        question: 'Con trai và đàn ong có điểm gì khác nhau?',
        answer: [

            "con tàu",
            "Lấy Vợ rồi",
            "Nướng bắp ngô",
            "bác sĩ"
        ],
        correct: 1
    },
    {
        question: 'Ở Việt Nam, rồng bay ở đâu và đáp ở đâu?',
        answer: [

            "con tàu",
            "Hạ Long",
            "Nướng bắp ngô",
            "bác sĩ",
        ],
        correct: 1
    },
    {
        question: 'Bỏ ngoài nướng trong?',
        answer: [
            "Nướng bắp ngô",
            "bác sĩ",
            "con tàu",
            "Than",
        ],
        correct: 3
    },
    {
        question: 'What is between the sky and earth?',
        answer: [
            "Tomato",
            "bác sĩ",
            "Dog",
            "And",
        ],
        correct: 3
    },
    {
        question: 'Xã đông nhất là xã nào?',
        answer: [

            "Tay",
            "Ngọc Trai",
            " ngô ƯUyeenf",
            " Xã đàn",
        ],
        correct: 3
    },
    {
        question: 'Con mèo nào cực kỳ sợ chuột?',
        answer: [
            "Cá ngô",
            "bác sĩ",
            "mèo già",
            "Tom",
        ],
        correct: 3
    },
    {
        question: 'Bệnh gì bác sỹ bó tay?',
        answer: [
            "Tomato",
            "Goot",
            "Gãy Tay",
            "hư chân",
        ],
        correct: 2
    }
]
var numberArray = 0;
var curentAnswer = null;
var s = 60;
var score = 0;
var score1 = 0;
function play() {
    showQuestion();
    start();
    clickAnswer((curentAnswer) => {

        if (curentAnswer == questions[numberArray].correct) {
            console.log(curentAnswer)
            document.getElementById('text').innerHTML = "Bạn Đã trả lời đúng !";
            document.getElementById('text').style.color="rgb(85, 199, 85)";

            score1 += score + 1;
            document.getElementById('score').innerHTML = score1;


            document.getElementById('answer_' + curentAnswer).style.background = 'rgb(85, 199, 85)';
            setTimeout(function () {
                next();
            }, 1400);

        } else {
            document.getElementById('text').innerHTML = "Bạn Đã trả lời sai !";
            document.getElementById('text').style.color="red";
            document.getElementById('answer_' + curentAnswer).style.background = 'red';
            document.getElementById('answer_' + questions[numberArray].correct).style.background = 'rgb(85, 199, 85)';
            setTimeout(function () {
                alert('Chơi Lại nhé!');
                location.reload();
            }, 1300);


        }

    });


}

function showQuestion(showQ) {
    numberArray = Math.floor(Math.random() * 15);
    showQ = questions[numberArray];
    console.log(showQ);
    document.getElementById('btn').style.display = 'none';
    document.getElementById('questions').style.display = 'block';
    document.getElementById('question').innerHTML = showQ.question;
    document.getElementById('answer_0').innerHTML = showQ.answer[0];
    document.getElementById('answer_1').innerHTML = showQ.answer[1];
    document.getElementById('answer_2').innerHTML = showQ.answer[2];
    document.getElementById('answer_3').innerHTML = showQ.answer[3];


}
function next() {

    showQuestion(numberArray++);
    document.getElementById('text').innerHTML = "";
    document.getElementById('answer_0').style.background = 'white';
    document.getElementById('answer_1').style.background = 'white';
    document.getElementById('answer_2').style.background = 'white';
    document.getElementById('answer_3').style.background = 'white';
}
function checkAnswer() {
    if (curentAnswer == questions[0].correct) {
        console.log('dung')
    }
}
function clickAnswer(callback) {
    document.getElementById('answer_0').addEventListener('click', () => callback(0));
    document.getElementById('answer_1').addEventListener('click', () => callback(1));
    document.getElementById('answer_2').addEventListener('click', () => callback(2));
    document.getElementById('answer_3').addEventListener('click', () => callback(3));
}
function start() {
    if (s == -1) {
        clearTimeout(timeout);
        alert('Hết giờ Chơi Lại nhé!');
        location.reload();
        return false;
    }
    document.getElementById('s').innerText = s.toString();

    timeout = setTimeout(function () {
        s--;
        start();
    }, 1000);

}
function exit() {

    location.reload();
}
function stop() {
    clearTimeout(timeout);
}