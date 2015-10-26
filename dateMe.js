$(document).ready(function() {
  $('#testing').click(function() {
    console.log('working');
  });
});

// Question #1
function question1() {
  document.getElementById('question1').style.display = 'none';
  document.getElementById('question2').style.display = 'inline';
}

// Question #2
function question2() {
  document.getElementById('question2').style.display = 'none';
  document.getElementById('question3').style.display = 'inline';
}

// Question #3
function question3() {
  document.getElementById('question3').style.display = 'none';
  document.getElementById('form').style.display = 'inline';
}

function form() {
  console.log('message me using twillio api');
}