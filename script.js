let questionNumber = 0;
let total_score = 0;

let questions = [
    {
        ques: "What is the order of a matrix ?",
        opt: ["number of rows X number of columns",
            "number of columns X number of rows",
            "number of rows X number of rows",
            "number of columns X number of columns"],
        answ: 1,
        score: 10
    },

    {
        ques: "What is the order of a matrix ?",
        opt: ["number of rows X number of columns",
            "number of columns X number of rows",
            "number of rows X number of rows",
            "number of columns X number of columns"],
        answ: 1,
        score: 10
    },

    {
        ques: "What is the order of a matrix ?",
        opt: ["number of rows X number of columns",
            "number of columns X number of rows",
            "number of rows X number of rows",
            "number of columns X number of columns"],
        answ: 1,
        score: 10
    },

    {
        ques: "What is the order of a matrix ?",
        opt: ["number of rows X number of columns",
            "number of columns X number of rows",
            "number of rows X number of rows",
            "number of columns X number of columns"],
        answ: 1,
        score: 10
    },
    {
        ques: "What is the order of a matrix ?",
        opt: ["number of rows X number of columns",
            "number of columns X number of rows",
            "number of rows X number of rows",
            "number of columns X number of columns"],
        answ: 1,
        score: 10
    },
    {
        ques: "What is the order of a matrix ?",
        opt: ["number of rows X number of columns",
            "number of columns X number of rows",
            "number of rows X number of rows",
            "number of columns X number of columns"],
        answ: 1,
        score: 10
    },
    {
        ques: "What is the order of a matrix ?",
        opt: ["number of rows X number of columns",
            "number of columns X number of rows",
            "number of rows X number of rows",
            "number of columns X number of columns"],
        answ: 1,
        score: 10
    },
    {
        ques: "What is the order of a matrix ?",
        opt: ["number of rows X number of columns",
            "number of columns X number of rows",
            "number of rows X number of rows",
            "number of columns X number of columns"],
        answ: 1,
        score: 10
    },
    {
        ques: "What is the order of a matrix ?",
        opt: ["number of rows X number of columns",
            "number of columns X number of rows",
            "number of rows X number of rows",
            "number of columns X number of columns"],
        answ: 1,
        score: 10
    },
    {
        ques: "What is the order of a matrix ?",
        opt: ["number of rows X number of columns",
            "number of columns X number of rows",
            "number of rows X number of rows",
            "number of columns X number of columns"],
        answ: 1,
        score: 10
    }
];



function generate_question() {
    document.getElementById("question").innerHTML = "<h5>Q" + (questionNumber + 1) + ": " + questions[questionNumber].ques + "</h5>";
    for (var i = 0; i < questions[questionNumber].opt.length; i++) {
        var list = "l" + (i + 1);
        document.getElementById(list).innerText = questions[questionNumber].opt[i];
    }
}

function change_to_next_btn() {
    var btn = document.getElementById("submit");
    btn.innerText = "Next";
    btn.setAttribute("class", "btn btn-success m-3");
    btn.setAttribute("onclick", "next()");
}

function change_to_submit_btn() {
    var btn = document.getElementById("submit");
    btn.innerText = "Submit";
    btn.setAttribute("class", "btn btn-warning m-3");
    btn.setAttribute("onclick", "submit()");
}

function show_correct() {
    var show = document.getElementById("display");
    show.innerText = "CORRECT";
    show.style.color = "green";
    show.style.display = "block";
    show.style.boxShadow = "20px 20px 50px 10px azure inset";
}

function show_incorrect() {
    var show = document.getElementById("display");
    show.innerText = "INCORRECT";
    show.style.color = "red";
    show.style.display = "block";
    show.style.boxShadow = "20px 20px 50px 10px bisque inset";
}

function answer_hide() {
    document.getElementById("display").style.display = "none";
}

function show_answer() {
    var content = document.getElementById("content");
    var ul_tag = document.createElement("ul");

    while (content.hasChildNodes()) {
        content.removeChild(content.firstChild);
    }

    document.getElementById("quiz").innerText = "Score: " + total_score;

    document.getElementById("answer-key").innerHTML = "<h2>Answer Key</h2>";

    for (var i = 0; i < questions.length; i++) {
        var list = document.createElement("li");
        var ques = document.createElement("span");
        var answ = document.createElement("span");
        list.setAttribute("class", "m-3");

        ques.innerText = questions[i].ques;
        answ.innerHTML = questions[i].opt[questions[i].answ - 1];

        list.setAttribute("class", "m-3 d-flex");
        answ.setAttribute("class", "mx-2 px-2 text-white rounded bg-success")
        list.appendChild(ques);
        list.appendChild(answ);
        ul_tag.appendChild(list);
    }

    ul_tag.style["list-style-type"] = "circle";
    content.appendChild(ul_tag);

    var btn = document.createElement("button");
    btn.setAttribute("class", "btn btn-primary m-3");
    btn.setAttribute("id", "reset-btn");
    btn.setAttribute("onclick", "reset()");
    btn.innerHTML = "Restart";
    document.getElementById("restart").appendChild(btn);
}

function next() {
    if (questionNumber >= questions.length) {
        show_answer();
    } else {
        generate_question();
        answer_hide();
        change_to_submit_btn();
    }
}

function submit() {
    var element = document.getElementsByTagName("input");
    for (var i = 0; i < element.length; i++) {
        if (element[i].checked == true) {
            var show = document.getElementById("display");
            if ((i + 1) == questions[questionNumber].answ) {
                show_correct();
                total_score += questions[questionNumber].score;
            } else {
                show_incorrect();
            }

            element[i].checked = false;
            break;
        }
    }
    questionNumber++;
    change_to_next_btn();
}

function reset() {
    questionNumber = 0;
    total_score = 0;

    document.getElementById("quiz").innerText = "Quiz";

    document.getElementById("answer-key").innerHTML = "";

    var content = document.getElementById("content");

    console.log(content);

    while (content.hasChildNodes()) {
        content.removeChild(content.firstChild);
    }

    document.getElementById("reset-btn").remove();

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");

    div1.setAttribute("class", "m-3");
    div1.setAttribute("id", "question");

    div2.setAttribute("class", "m-3");

    for (var i = 0; i < 4; i++) {
        var list_tag = document.createElement("input");
        var label_tag = document.createElement("label");

        list_tag.setAttribute("type", "radio");
        list_tag.setAttribute("id", "o" + (i + 1));
        list_tag.setAttribute("name", "opt");
        list_tag.setAttribute("value", "" + (i + 1));

        label_tag.setAttribute("for", "o" + (i + 1));
        label_tag.setAttribute("id", "l" + (i + 1));

        div2.appendChild(list_tag);
        div2.appendChild(label_tag);
        div2.appendChild(document.createElement("br"));
    }

    div3.setAttribute("class", "rounded text-center m-3 p-2");
    div3.setAttribute("id", "display");

    div4.setAttribute("class", "btn btn-warning m-3");
    div4.setAttribute("id", "submit");
    div4.setAttribute("onclick", "submit()");

    div4.innerText = "Submit";

    content.appendChild(div1);
    content.appendChild(div2);
    content.appendChild(div3);
    content.appendChild(div4);

    generate_question();

}