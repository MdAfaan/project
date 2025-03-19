const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id : uuidv4(),
        username : "User-1",
        content : "One of the things I did was hacked a series of accounts used for practice tests by an economics class. The accounts were quite limited; when you logged in, they would immediately begin running a program that gave you sample questions. Most students used the computer from one of several terminal rooms on campus—large rooms filled with Televideo 920 terminals hard-wired to the computer. I was one of the very few students who had his own computer (a TRS-80 Model 4P) and a dial-up modem. I could connect from my dorm room. In fact, I wrote a program, TERTEL/CMD, that emulated a Televideo 920 just for the purpose. So there I was one night, logged on from my dorm room. I connected my account to the test account and saw someone taking one of the sample tests. I watched him for a while. He kept getting the answers wrong…so I started answering the questions for him. He typed “Who is this? Where are you?” I typed “Sitting right behind you.” He logged off. I found out the next day there was an altercation in one of the terminal rooms—apparently a student stood up and started a fight with another student who was sitting behind him."
    },
    {
        id : uuidv4(),
        username : "User-2",
        content : "When USA asked their allies and friends for help, he volunteered, and went to Afghanistan. On November 25th, 2005, he was caught in an ambush. It took him two weeks to die from his injuries. The day before yesterday, your trained clown and his orange baboon handler took a huge dump on his grave. His sacrifice for the USA was demeaned, his memory belittled. What the hell do you think would happen if the USA were attacked tomorrow? Or next year? Or even ten years from now, with a different President? Who volunteers to lay down their lives for the USA, and then have Americans shit on their sacrifice? Every single American has baboon shit all over him, and it doesn’t wash away that easily."
    },
    {
        id : uuidv4(),
        username : "User-3",
        content : "Jen-Hsun Jensen Huang, who said something quite similar, is still the CEO of Nvidia and has been the CEO since 1993. He is a marketing man. He is selling AI devices for billions of dollars. He needs to spice things up. AI is nowhere near making programmers out of work. You know what you have, when you explain your requirements in small details in english? You have CODE. AI is basically a great tool for developers. Yes, god awful programmers could pass as decent ones for a while but AI often makes code that is useless, gobblety gook basically. Referencing functions, classes and methods that don’t exist. AI can’t tell you how any times the letter S appears in STRAWBERRY. OpenAI added specific code to answer this type of question because, plain and simple, AI can not answer that question."
    },
];





app.get("/posts", (req,res) => {
    res.render("index.ejs", {posts});
});

app.get("/posts/new", (req,res) => {
    res.render("new.ejs");
});

app.post("/posts", (req,res) => {
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({id, username, content});
    res.redirect("/posts");
});

app.get("/posts/:id", (req,res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", { post });
});

app.patch("/posts/:id", (req,res) => {
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
});

app.get("/posts/:id/edit", (req,res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", { post });
});

app.delete("/posts/:id", (req,res) => {
    let {id} = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})