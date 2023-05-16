
var userlist = [];//Usernames
var data;
var cur_story_ids = [];//Current story ids
var cur_user;//Current user
var story_c;//Current story index, relative to cur_story_ids
var seen_n = null;
var timer;
var progress_i = 0;
var interval;

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
    var user = get_user_data(get_user(n));
    if (user.name == "Main" & user.story_n == 0) {
        toggle_upload(1);
        return;
    }

    if (cur_user != get_user(n)) {
        if (cur_user != undefined) {
            if (check_user_seen(cur_user) == true) {
                requeue_user(cur_user);
                set_profile_opacity();
            }
        }
        //document.getElementById('bar').style.opacity = '1';
        //document.getElementById('story1').style.opacity = '1';

        
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
    //alert(userlist);
    init_storybar();
}


function set_current_story() {//Sets story
    clearTimeout(timer);
    var image = document.getElementById("story1");
    image.src = get_current_story(".jpg");
    timer = setTimeout(next_story, 15000);
    progress();

}

function progress() {
    progress_i = 0;
    var element = document.getElementById("progress");
    element.style.width = "1%";
    clearInterval(interval);
    if (progress_i == 0) {
        progress_i = 1;
        
        var width = 1;
        interval = setInterval(check_progress, 10);
        function check_progress() {
            if (width >= 100) {
                clearInterval(interval);
                progress_i = 0;
            }
            else {
                width += 0.0666666666667;
                element.style.width = width + "%";
            }
        }
    }
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
    toggle_upload(0);
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

function toggle_upload(direction) {//1 for toggle on, 0 for toggle off
    if (direction == 1) {
        document.getElementById('bar').style.opacity = '0';
        document.getElementById('story1').style.opacity = '0';
        document.getElementById('upload_form').style.display = 'block';
        story_c = 0;
    }
    else if (direction == 0) {
        document.getElementById('bar').style.opacity = '1';
        document.getElementById('story1').style.opacity = '1';
        document.getElementById('upload_form').style.display = 'none';
    }
}

function add_story_id() {
    if (data[0].story_n == 0) {
        var user = get_user_data(userlist[userlist.length - 1]);
        var temp_id = "id_" + (user.story_n);
        var story_id = user[temp_id];
        story_id = parseInt(story_id) + 1;
        user = get_user_data("Main");
        story_id = "0" + (story_id);
        temp_id = "id_" + (user.story_n + 1);
        user[temp_id] = story_id;
        user.story_n++;
        return story_id;
    }
    else {
        var user = get_user_data("Main");
        var temp_id = "id_" + (user.story_n);
        var story_id = user[temp_id];
        story_id = parseInt(story_id) + 1;
        story_id = "0" + (story_id);
        temp_id = "id_" + (user.story_n + 1);
        user[temp_id] = story_id;
        user.story_n++;
        return story_id;
    }
    
}


var data = [
    {
        "name": "Main",
        "story_n": 0,
        "story_s": [],
    },
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
    },
    {
        "name": "Aaron Paul",
        "story_n": 3,
        "story_s": [],
        "id_1": "016",
        "id_2": "017",
        "id_3": "018"
    },
    {
        "name": "Alain Ngalani",
        "story_n": 3,
        "story_s": [],
        "id_1": "019",
        "id_2": "020",
        "id_3": "021"
    },
    {
        "name": "Ashley Walters",
        "story_n": 3,
        "story_s": [],
        "id_1": "022",
        "id_2": "023",
        "id_3": "024"
    },
    {
        "name": "Danny Brown",
        "story_n": 3,
        "story_s": [],
        "id_1": "025",
        "id_2": "026",
        "id_3": "027"
    },
    {
        "name": "Donald Glover",
        "story_n": 3,
        "story_s": [],
        "id_1": "028",
        "id_2": "029",
        "id_3": "030"
    },
    {
        "name": "Elon Musk",
        "story_n": 3,
        "story_s": [],
        "id_1": "031",
        "id_2": "032",
        "id_3": "033"
    },
    {
        "name": "Fudgemuppet",
        "story_n": 3,
        "story_s": [],
        "id_1": "034",
        "id_2": "035",
        "id_3": "036"
    },
    {
        "name": "Jocko Willink",
        "story_n": 3,
        "story_s": [],
        "id_1": "037",
        "id_2": "038",
        "id_3": "039"
    },
    {
        "name": "Joe Rogan",
        "story_n": 3,
        "story_s": [],
        "id_1": "040",
        "id_2": "041",
        "id_3": "042"
    },
    {
        "name": "Kendrick Lamar",
        "story_n": 3,
        "story_s": [],
        "id_1": "043",
        "id_2": "044",
        "id_3": "045"
    },
    {
        "name": "Ogg Steven",
        "story_n": 3,
        "story_s": [],
        "id_1": "046",
        "id_2": "047",
        "id_3": "048"
    },
    {
        "name": "Oxhorn",
        "story_n": 3,
        "story_s": [],
        "id_1": "049",
        "id_2": "050",
        "id_3": "051"
    },
    {
        "name": "Pewdiepie",
        "story_n": 3,
        "story_s": [],
        "id_1": "052",
        "id_2": "053",
        "id_3": "054"
    },
    {
        "name": "Rejjie Snow",
        "story_n": 3,
        "story_s": [],
        "id_1": "055",
        "id_2": "056",
        "id_3": "057"
    },
    {
        "name": "Rick Rubin",
        "story_n": 3,
        "story_s": [],
        "id_1": "058",
        "id_2": "059",
        "id_3": "060"
    },
];

init_userlist();