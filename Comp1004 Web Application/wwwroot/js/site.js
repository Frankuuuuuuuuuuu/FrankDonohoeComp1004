// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

/*
class Story {
    constructor(story_id, owner, image, profile_image, time_posted) {
        this.story_id = story_id;
        this.owner = owner;
        this.image = image;
        this.profile_image = profile_image;
        this.time_posted = time_posted;
    }

    get_story_id() {
        return this.story_id;
    }

    get_owner() {
        return this.owner;
    }

    get_image() {
        return this.image;
    }

    get_profile_image() {
        return this.profile_image;
    }

    get_time_posted() {
        return this.time_posted;
    }

    get_time_remaining(time) {
        const d = new Date();
        return d.getTime() - time;
    }
}

class Story_viewing extends Story {
    constructor(story_id, owner, image, profile_image, time_posted) {
        super(story_id);
        super(owner);
        super(image);
        super(profile_image);
        super(time_posted);
        this.appearance_val = 0;
        this.view_state = false;
    }

    set_appearance_val(new_val) {
        this.appearance_val = new val;
        return this.appearance_val;
    }

    get_appearance_val() {
        return this.appearance_val;
    }

    set_view_state(new_val) {
        this.view_state = new val;
        return this.view_state;
    }

    get_view_state() {
        return this.view_state;
    }
}

class Story_editing extends Story {
    constructor(story_id, owner, image, profile_image, time_posted) {
        super(story_id);
        super(owner);
        super(image);
        super(profile_image);
        super(time_posted);
        this.upload_state = 0;
    }

    set_image(image) {
        this.image = image;
        return this.image;
    }

    set_profile_image(image) {
        this.profile_image = image;
        return this.profile_image;
    }

    set_upload_state(new_val) {
        this.upload_state = new_val;
        return this.upload_state;
    }

    get_upload_state() {
        return this.upload_state;
    }
}

class User_Profile {
    constructor(name, user_id) {
        this.name = name;
        this.user_id = user_id;
        this.stories = new Array();

        add_story(story) {
            this.stories.push(story)
            return story;
        }
    }
}
    


const d = new Date();
story1_1 = new Story_viewing(000, "Future", "img\s1\Story1-1.jpg", "img\profile1.jpg", d.getTime)
story1_2 = new Story_viewing(001, "Future", "img\s1\Story1-2.jpg", "img\profile1.jpg", d.getTime)
story1_3 = new Story_viewing(002, "Future", "img\s1\Story1-3.jpg", "img\profile1.jpg", d.getTime)

story2_1 = new Story_viewing(003, "Thugger", "img\s2\Story2-1.jpg", "img\profile2.jpg", d.getTime)
story2_2 = new Story_viewing(004, "Thugger", "img\s2\Story2-2.jpg", "img\profile2.jpg", d.getTime)
story2_3 = new Story_viewing(005, "Thugger", "img\s2\Story2-3.jpg", "img\profile2.jpg", d.getTime)

story3_1 = new Story_viewing(006, "Carti", "img\s3\Story3-1.jpg", "img\profile3.jpg", d.getTime)
story3_2 = new Story_viewing(007, "Carti", "img\s3\Story3-2.jpg", "img\profile3.png", d.getTime)
story3_3 = new Story_viewing(008, "Carti", "img\s3\Story3-3.jpg", "img\profile3.jpg", d.getTime)

story4_1 = new Story_viewing(009, "lil boat", "img\s4\Story4-1.jpg", "img\profile4.jpg", d.getTime)
story4_2 = new Story_viewing(010, "lil boat", "img\s4\Story4-2.jpg", "img\profile4.jpg", d.getTime)
story4_3 = new Story_viewing(011, "lil boat", "img\s4\Story4-3.jpg", "img\profile4.jpg", d.getTime)

story5_1 = new Story_viewing(012, "lil boat", "img\s5\Story5-1.jpg", "img\profile5.jpg", d.getTime)
story5_2 = new Story_viewing(013, "lil boat", "img\s5\Story5-2.jpg", "img\profile5.jpg", d.getTime)
story5_3 = new Story_viewing(014, "lil boat", "img\s5\Story5-3.jpg", "img\profile5.jpg", d.getTime)

var stories = []


*/




    //const el = document.getElementById('sp');
    //el.style.opacity = '1';

    //document.getElementById('img1').id = 'img1-v';

//var url = 'https://comp1004app.s3.eu-west-2.amazonaws.com/data.json';
try {
    const execSync = require('child_process').execSync;
    const output = execSync('$ npm install cors', { encoding: 'utf-8' });
}
catch {
    alert("Fail");
}


/*const express = require("express");
const app = express();
const cors = require("cors");
app.use()*/

var url = get_pathname() + "data.json";
var data;




console.log(data);

function fetch_data() {
    try {
        fetch(url)
            .then(response => data)
            .then(json => {
                alert(json);
            })
    }
    catch {
        alert("Fail");
    }
}

function get_data() {
    try {
        alert(data);
    }
    catch {
        alert("Fail");
    }
}


function get_pathname() {
    let path = location.pathname;
    let path_split = path.split('/');
    path = "";
    path_split.pop(path_split.length - 1)
    path = path_split.join('/')
    path += "/";
    path = path.substring(1);
    return path;
}

function toggle_story() {
    if (document.getElementById('sp').style.dis == '0') {
        document.getElementById('sp').style.opacity = '1';
    }
    else if (document.getElementById('sp').style.opacity == '1') {
        document.getElementById('sp').style.opacity = '0';
    }
    else {
        document.getElementById('sp').style.opacity = '1';
    }
}