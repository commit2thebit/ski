document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn-start').addEventListener('click', startQuiz);
    document.getElementById('btn-next').addEventListener('click', nextQuestion);
});

const liftDescriptions = {
    "Thunder": "Thunderous in your enthusiasm and zest for life, you embody the spirit of living for the moment. Adventurous and always in search of the next thrill, you approach life with a joie de vivre that's infectious. 🎿🍾",
    "Sublette": "With the quiet strength of the Sublette lift, you command respect without saying a word. A stoic at heart, you're a deep thinker, often mulling over life's big questions. But when you do speak, it's with a wit sharp enough to cut through any tension. 🎿🍾",
    "Teton": "Much like the hidden depths of the Teton, you may appear quiet at first glance, but to those who know you, you're a wellspring of creativity and humor. Your wit and originality surprise and delight, making every revelation a new reason to appreciate the complex tapestry of your personality. 🎿🍾",
    "Sweetwater": "Sweetwater in spirit, your kindness and caring nature make you a friend to all. With a wealth of knowledge and a willingness to share, you enrich the lives of those around you, offering guidance and support with a gentle hand. Your presence is a soothing balm, cherished by all who know you. 🎿🍾",
    "Casper": "Bright and buoyant, you're the Casper lift of your crew! With your golden retriever-like charm and unwavering optimism, you light up every room and trail you venture down. Your social nature and approachable vibe make you the life of the party, always ready with a laugh or a smile to brighten someone's day. 🎿🍾",
    "Eagle’s Rest": "As easygoing as Eagle's Rest, you're the embodiment of chill. Comfortable in any setting and always steady, you navigate life's ups and downs with unparalleled grace. Your laid-back attitude and ability to stay cool under pressure make you a magnetic presence, drawing others to your calm and serene outlook on life. 🎿🍾",
    "Marmot": "Just like this thoughtful pathfinder, you navigate life with purpose and consideration. Your conscientious approach ensures that every detail is accounted for, making you a reliable and trusted companion on any adventure. With a deep sense of responsibility and a thoughtful outlook, you're the one your friends count on to make the journey meaningful and fulfilling. 🎿🍾",
    "Apres Vous": "Apres Vous through and through, you blend sophistication with warmth, making you both admirable and approachable. Your empathy guides you, allowing you to connect with others on a deep level, while your refined tastes add a touch of elegance to your surroundings. You're the friend everyone seeks for heartfelt advice and a comforting presence. 🎿🍾",
    "Tram": "As majestic and ambitious as the Tram itself, you stand out for your courage and determination. Independent and driven, you're not afraid to carve out your own path or lift others up along the way. Your ambitious goals are matched only by your ability to achieve them, making you a true mover and shaker in any circle. 🎿🍾",
    "Bridger": "Steadfast and strong, you share the essence of the Bridger gondola. Your assertive nature is backed by a keen intelligence, making you a dependable leader and a loyal friend. You're the rock that others lean on, always ready with smart solutions and unwavering support, guiding your loved ones through life's rugged terrains. 🎿🍾",
    "Teewinot": "True to the spirit of Teewinot, you're the reliable backbone of your squad, always there with a friendly word and a silly joke to lighten the mood. Your dependable nature doesn't mean you're all work and no play; in fact, your playful antics and cheerful demeanor are what make you a beloved presence in any group. 🎿🍾"
};

const quizData = [
    {
        question: "When faced with a challenge, you:",
        answers: {
            a: "Tackle it head-on with enthusiasm.",
            b: "Think it through before acting.",
            c: "Look for a creative solution.",
            d: "Make sure everyone's on board first."
        },
        skiLift: { a: "Thunder", b: "Sublette", c: "Teton", d: "Sweetwater" }
    },
    {
        question: "Your friends would say you're:",
        answers: {
            a: "The heart of the party.",
            b: "A calming presence.",
            c: "Always ready to help.",
            d: "Full of surprises."
        },
        skiLift: { a: "Casper", b: "Eagle’s Rest", c: "Marmot", d: "Apres Vous" }
    },
    {
        question: "Your ideal vacation spot is:",
        answers: {
            a: "Somewhere remote and adventurous.",
            b: "A cozy cabin in the woods.",
            c: "The heart of a bustling city.",
            d: "A quiet, hidden gem."
        },
        skiLift: { a: "Tram", b: "Bridger", c: "Casper", d: "Teton" }
    },
    {
        question: "In a group project, you are the one who:",
        answers: {
            a: "Leads and organizes.",
            b: "Comes up with out-of-the-box ideas.",
            c: "Ensures everyone's voice is heard.",
            d: "Keeps spirits high."
        },
        skiLift: { a: "Bridger", b: "Teton", c: "Sweetwater", d: "Teewinot" }
    },
    {
        question: "Choose a hobby:",
        answers: {
            a: "Hiking or outdoor sports.",
            b: "Reading or writing.",
            c: "Arts and crafts.",
            d: "Socializing and hosting events."
        },
        skiLift: { a: "Tram", b: "Sublette", c: "Apres Vous", d: "Casper" }
    },
    {
        question: "Your approach to problem-solving is:",
        answers: {
            a: "Analytical and strategic.",
            b: "Empathetic and understanding.",
            c: "Creative and unconventional.",
            d: "Direct and action-oriented."
        },
        skiLift: { a: "Sublette", b: "Sweetwater", c: "Teton", d: "Thunder" }
    },
    {
        question: "On a lazy Sunday, you prefer to:",
        answers: {
            a: "Plan your next adventure.",
            b: "Chill at home with a good book.",
            c: "Get crafty on a DIY project.",
            d: "Cook a big meal for friends and family."
        },
        skiLift: { a: "Tram", b: "Eagle’s Rest", c: "Apres Vous", d: "Sweetwater" }
    },
    {
        question: "Choose a motto:",
        answers: {
            a: "Live life to the fullest.",
            b: "Knowledge is power.",
            c: "Creativity conquers all.",
            d: "Unity is strength."
        },
        skiLift: { a: "Thunder", b: "Sublette", c: "Teton", d: "Bridger" }
    },
    {
        question: "At a dinner party, you're:",
        answers: {
            a: "Mingling and making everyone laugh.",
            b: "Helping the host with everything.",
            c: "Engaging in deep conversations.",
            d: "Observing and soaking it all in."
        },
        skiLift: { a: "Casper", b: "Marmot", c: "Sublette", d: "Eagle’s Rest" }
    },
    {
        question: "Your dream job would involve:",
        answers: {
            a: "Leading a team to success.",
            b: "Solving complex problems.",
            c: "Inspiring others with your creativity.",
            d: "Making the world a better place."
        },
        skiLift: { a: "Bridger", b: "Sublette", c: "Teton", d: "Sweetwater" }
    }
];

let currentQuestionIndex = 0;
let scores = {};

function startQuiz() {
    document.getElementById('btn-start').style.display = 'none';
    document.getElementById('question-container').style.display = 'block';
    scores = initializeScores();
    showQuestion();
}

function initializeScores() {
    const scores = {};
    Object.keys(liftDescriptions).forEach(lift => {
        scores[lift] = 0;
    });
    return scores;
}

function showQuestion() {
    if (currentQuestionIndex < quizData.length) {
        const questionObj = quizData[currentQuestionIndex];
        document.getElementById('question-container').innerHTML = `<div class="question">${questionObj.question}</div>` +
            Object.entries(questionObj.answers).map(([key, value]) =>
                `<button class="answer-option" onclick="selectAnswer('${key}', '${questionObj.skiLift[key]}')">${value}</button>`
            ).join('');
        document.getElementById('btn-next').style.display = 'none';
    } else {
        showResults();
    }
}

function selectAnswer(answerKey, skiLift) {
    scores[skiLift]++;
    document.querySelectorAll('.answer-option').forEach(button => button.disabled = true);
    document.getElementById('btn-next').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

function showResults() {
    const highestScoreLift = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('btn-next').style.display = 'none';
    document.getElementById('result-container').innerHTML = `<div class="result">You are ${highestScoreLift}! ${liftDescriptions[highestScoreLift]}</div>`;
    document.getElementById('result-container').style.display = 'block';
}
