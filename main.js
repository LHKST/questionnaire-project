var url = 'https://github.com/LHKST/questionnaire-project/blob/master/qu-link.json';
var response;
var questionnaire = document.getElementById('2');
var qq = document.querySelector('a');
fetch(url).then(function(response){
    response.json().then(function(json){
        questionnaire.href = json;
    });
});
var pa = document.querySelector('p');
var list = document.createElement('p');
list.textContent = response.json;
pa.appendChild(list);
//questionnaire.href = 'questionnaire.html';

qq.href = 'questionnaire.html';