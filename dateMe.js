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
  document.getElementById('form').style.display = 'none';
  document.getElementById('question1').style.display = 'inline';
  $.ajax({
    type: 'POST',
    username: TWILIO_ACCOUNT_SID,
    password: TWILIO_AUTH_TOKEN,
    url: 'https://api.twilio.com/2010-04-01/Accounts/' + TWILIO_ACCOUNT_SID + '/Messages.json',
    data: {
      'to': '+15416210655',
      'from': '+15412272133',
      'body': 'something'
    },
    success: function (data) {
      alert(JSON.stringify(data));
    },
    error: function(){
      alert('Cannot get data');
    }
  });
}

// $.ajax({
//   // url: 'https://api.twilio.com/2010-04-01/Accounts/' + TWILIO_ACCOUNT_SID + '/SMS/Messages',
//   url: 'https://api.twilio.com/2010-04-01/Accounts/' + TWILIO_ACCOUNT_SID + '/Messages',
//   type: 'POST',
//   data: {
//     'body': 'Jenny please?! I love you <3',
//     'from': '+15412272133',
//     'to': '+15416210655'
//   },
//   beforeSend: function(xhr, settings) {
//     xhr.setRequestHeader('Authorization','Bearer ' + TWILIO_AUTH_TOKEN);
//   },
//   success: function( response ) {
//     // response
//     console.log('something just sent successfully');
//   }
// });

// $.ajax({
//     type: 'POST',
//     username: TWILIO_ACCOUNT_SID,
//     password: TWILIO_AUTH_TOKEN,
//     url: 'https://api.twilio.com/2010-04-01/Accounts/' + TWILIO_ACCOUNT_SID + '/Messages.json',
//     data: {
//       'to': '+15416210655',
//       'from': '+15412272133',
//       'body': 'something'
//     },
//     success: function (data) {
//       alert(JSON.stringify(data));
//     },
//     error: function(){
//       alert('Cannot get data');
//     }
// });


