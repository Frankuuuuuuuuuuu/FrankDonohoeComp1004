﻿
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


var userlist = [];//Usernames
var data;
var cur_story_ids = [];//Current story ids
var cur_user;//Current user
var story_c;//Current story index, relative to cur_story_ids
var seen_n = null;


function init_userlist() { //Adds usernames in data to userlist
    for (i = 0; i < data.length; i++) {
        userlist.push(data[i].name);
    }
}

function get_user(n) {//Gets username of user at pos n in userlist
    username = userlist[n];
    return username;
}

function get_user_img(username) {//Gets profile image from username
    img_path = "img/" + username + "/" + username + "_prof_img.jpg";
    return img_path;
}

function init_storybar() {//Sets profile images in story bar using order from userlist
    var temp_id;
    var image;
    var username;
    for (i = 0; i < userlist.length; i++) {
        temp_id = "img" + (i + 1);
        image = document.getElementById(temp_id);
        username = get_user(i);
        image.src = get_user_img(username);
    }
}

function generate_story_data(n) {//Generates story data for user at pos n
    if (cur_user != get_user(n)) {
        if (cur_user != undefined) {
            if (check_user_seen(cur_user) == true) {
                requeue_user(cur_user);
                var index = get_cur_user_index();
                set_profile_opacity();
            }
            
        }

        var user;
        story_c = 1;
        cur_story_ids = [];
        cur_user = get_user(n);
        user = get_user_data(cur_user);
        cur_story_ids = get_user_story_ids(user);


    }
}

function set_profile_opacity() {

    if (seen_n == null) {
        seen_n = userlist.length;
    }
    var temp_id = "img" + (seen_n);
    document.getElementById(temp_id).style.opacity = 0.7;
    seen_n--;
}

function get_user_story_ids(user) {
    var story_list = [];
    for (i = 1; i <= user.story_n; i++) {
        temp_id = "id_" + i;
        story_list.push(user[temp_id]);
    }
    return story_list;
}

function get_current_story(type) {//Gets story id for the story at the current index in cur_story_ids
    var story_id = cur_story_ids[story_c - 1];
    var user = get_user_data(cur_user);

    if (story_s_contains(user, story_id) == false) {
        user.story_s.push(story_id);
    }
    
    var img_path = "img/" + cur_user + "/" + story_id + type;
    return img_path;
}

function story_s_contains(user, story_id) {
    if (user.story_s.length == 0) {
        return false;
    }
    for (i = 0; i < user.story_s.length; i++) {
        if (user.story_s[i] == story_id) {
            return true;
        }
    }
    return false;
}

function get_user_data(username) {
    var temp_user;
    for (i = 0; i < data.length; i++) {
        if (data[i].name == username) {
            temp_user = data[i];
            return temp_user;
        }
    }
}

function check_user_seen(username) {//Returns boolean dependent on whether all of selected user's storys are seen
    var user = get_user_data(username);
    var story_ids = get_user_story_ids(user);
    var count = 0;
    
    
    for (i = 0; i < story_ids.length; i++) {
        for (j = 0; j < user.story_s.length; j++) {
            if (story_ids[i] == user.story_s[j]) {//Counts number of common story ids in loaded story ids and seen story ids
                //alert(story_ids[i]);
                //alert(user.story_s[j]);
                count++;
            }
        }
    }
    //alert(count);
    if (count == story_ids.length) {//Returns true if number of common ids is equal to number of story ids
        return true;
    }
    else {
        return false;
    }
}

function requeue_user(username) {
    userlist = userlist.filter(function (e) { return e !== username });
    userlist.push(username);
    alert(userlist);
    init_storybar();
}


function set_current_story() {//Sets story
    var image = document.getElementById("story1");
    image.src = get_current_story(".jpg");
}

function get_cur_user_index() {
    for (i = 0; i <= userlist.length; i++) {
        if (cur_user == userlist[i]) {
            return i;
        }
    }
    return -1;

}

function get_adjacent_user_index(direction) {//Gets adjacent user(and index), 1 for next user, 0 for previous user
    var user_index = get_cur_user_index();
    if (direction == 1) {
        user_index += 1;
        return user_index;
    }
    else if (direction == 0) {
        user_index -= 1;
        return user_index;
    }
    
}

function previous_story() {
    if (story_c == 1) {
        var n = get_adjacent_user_index(0);
        generate_story_data(n);
        story_c = cur_story_ids.length;
        set_current_story();
    }
    else {
        story_c -= 1;
        set_current_story();
    }
}

function next_story() {
    if (story_c == cur_story_ids.length) {
        var n = get_adjacent_user_index(1);
        generate_story_data(n);
        story_c = 1;
        set_current_story();
    }
    else {
        story_c += 1;
        set_current_story();
    }
}

function init_story(n) {//Initiates story UI when profile image is clicked
    generate_story_data(n);
    set_current_story();
}

function get_pathname() {
    let path = location.pathname;
    let path_split = path.split('/');
    path = "";
    path_split.pop(path_split.length - 1);
    path = path_split.join('/')
    path += "/";
    path = path.substring(1);
    return path;
}

function toggle_story(n) {//Toggle story UI opacity
    init_story(n);
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

var data = [
    {
        "name": "Future",
        "story_n": 3,
        "story_s": [],
        "id_1": "001",
        "id_2": "002",
        "id_3": "003"
    },
    {
        "name": "Thugger",
        "story_n": 3,
        "story_s": [],
        "id_1": "004",
        "id_2": "005",
        "id_3": "006"
    },
    {
        "name": "Carti",
        "story_n": 3,
        "story_s": [],
        "id_1": "007",
        "id_2": "008",
        "id_3": "009"
    },
    {
        "name": "lil boat",
        "story_n": 3,
        "story_s": [],
        "id_1": "010",
        "id_2": "011",
        "id_3": "012"
    },
    {
        "name": "Weezy",
        "story_n": 3,
        "story_s": [],
        "id_1": "013",
        "id_2": "014",
        "id_3": "015"
    }
];

init_userlist();