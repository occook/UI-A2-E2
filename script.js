//this is the lastOpinionButton section
$('#lastOpinionButton').click(function(){
  $('#rightBox').html(lastOpinionButtonString);
  $('#ritz2Button').click(function(){
    alert(ritzButtonString);
  });
  $('#ardosa2Button').click(function(){
    alert(ardosaString);
  });
});
//here ends the lastOpinionButton section

//this is the personalInformationButton section
$('#personalInformationButton').click(function(){
  $('#rightBox').html(personalInformationButtonString);
});
//here ends the personalInformationButton section



//this is the myPreferenceButton section
var count = 3;
var allowx = true;
$('#myPreferenceButton').click(function (event){
  if(allowx==false){
    event.preventDefault();
    return false;
  }
  count++;
  //this part appends a new box
  $('#preferencesAdded').append("<div id = 'pref'>   <input type = 'text' id = 'firstNameIn' value = ''><!-- preference x  --><button class='btn'><i class='fa fa-close'></i></button> <!-- x button  --></div> <br>");
  $('#pref').attr('id','pref'+count);
  $('#firstNameIn').attr('id','firstNameIn'+count);
   allowx = false;
   //this part will stop the listening of myPreferenceButton as well as change the input to a text
  $('#firstNameIn'+count).on('keyup', function(event) {
      if (event.keyCode === 13) {
          allowx=true;
         tex = $('#firstNameIn'+count).val();
         var id1 = $(this).parent().attr('id');
         $('#'+id1).html("<!-- preference x  --><button class='btn'><i class='fa fa-close'></i></button> <!-- x button  -->");
         $('#'+id1).prepend(tex);
         $('i').click(function(){
         var id1 = $(this).parent().parent().attr('id');
         $('#'+id1).remove();
          });
     }
  });
});
//this sets the remove button
$('i').click(function(){
var id1 = $(this).parent().parent().attr('id');
$('#'+id1).remove();
});
//here ends the myPreferenceButton section



/*
    Here is the alert box section. These alerts create a popup box when certain paragraphs are clicked.
*/
$('#ritzButton').click(function(){ //alert pop up box for Hotel Ritz Madrid
  alert(ritzButtonString);
});

$('#ardosa').click(function(){ //alert pop up box for La Ardosa
  alert(ardosaString);
});

$('#sacha').click(function(){ //alert pop up box for Sacha
  alert(sachaButtonString);
});


/*
    HERE IS THE START OF THE LOGOUT PAGE. YOU WILL PROBABLY BE BASING A LOT OF CODE ON THIS WHEN YOU DO LOGIN AND REGISTER SO MAKE SURE YOU READ OVER THIS AND THE CORRESPONDING HTML TAGS!!!!!
*/
$('#logout').click(function(){
  $('#body').html("<div id='bodyLogout'></div>");
  $('#ulxx').html('<li id = "register" class="firstH"><a>Register</a></li><li id="logIn" class="secondH"><a>Login</a></li>');
  $('#register').click(function(){
    $('#bodyLogout').html(registerForm);
  });
  //After this, you should now make new click events for login and register. To make things cleaner, make a seperate helper function that you call inside your event listener! You should change what is in the #bodyLogout div element not the #body element. This will keep the css looking good.
  //below is the logIn button function
  $('#logIn').click(function(){
    $('#bodyLogout').html(logInForm);

  });
});

var globalcookie = 0;
function helper(){
  var el = document.getElementById('registerFile');
  storeValues(el);
}

function setCookie(name,value){
  document.cookie=name + globalcookie + "=" + escape(value) + "; path=/;"
}

function getCookie(cname){
  var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function storeValues(form){
    if (regForm.email.value === getCookie('email')){ //If email already exists.
      alert('You are already registered');
    }

    else{
    setCookie('username', regForm.username.value);
    setCookie('psw', regForm.psw.value);
    setCookie('firstName', regForm.firstName.value);
    setCookie('lastName', regForm.lastName.value);
    setCookie('email', regForm.email.value);
    setCookie('birthday', regForm.birthday.value);
    setCookie('address', regForm.address.value);
    setCookie('profilePicture', regForm.profilePicture.value);
    }
    globalcookie++;
    return true;
}
/*
    MOVED ALL OF THE LARGE STRINGS HERE SO WE DON'T HAVE TO LOOK AT ALL OF THIS JUNK. NOW WE CAN QUICKLY THROUGH OUR ACTUAL IMPORTANT CODE RATHER THAN THESE LONG STRINGS.
*/
var lastOpinionButtonString = "<h1>Last Opinions<h1><div><div class='noBorder'><img class='imgOpinion' src='images/ritz.jpg'> <!-- image of ritx  --> <h5 id = 'ritz2Button'>Hotel Ritz</h5> <!-- hotel name  --><h5>Madrid, Spain</h5> <!-- location  --><h5>16-5-1986</h5> <!-- date  --></div><div class='noBorder'><p id='opinions'>This is my favorite hotel in Madrid! The hotel restaurant is amazing - I would definitely recommend trying the lobster! The location is perfect and is near many of the main tourist sights that you should see when you are visiting the city! It is a little expensive, but worth it!</p> <!-- hotel review  --></div></div> <!-- close div object 1  --><div> <!-- start new div object  --><div class='noBorder'><img class='imgOpinion' src='images/laArdosa.jpg'><!-- La Ardosa image   --><h5 id = 'ardosa2Button'>La Adorsa</h5> <!-- restaurant name  --><h5>Madrid, Spain</h5> <!-- location  --><h5>23-8-2005</h5> <!-- date  --></div><div class='noBorder'><p id='opinions'>This is a great bodega in a busy and popular area of the city. It gets pretty crowded at night so I would recommend getting there early to secure a good seat. I heard that they are famous for their tortillas and they lived up to the expectation! Very fair pricing as well. </p> <!-- restaurant review  --></div>  </div> <!-- close reviews div object  --></div>";

var personalInformationButtonString = "<h1>Personal Information</h1> <!-- beginning of right box personal information section  --><br><br><form> <!-- start of form object  --><input type = 'text' id = 'firstName' value = 'First Name'> <!-- insert first name box  -->&nbsp &nbsp &nbsp<input type = 'text' id = 'lastName' value = 'Last Name'> <!-- insert last name box  --><br><br><input type = 'text' id = 'email' value = 'Email address'> <!-- insert email box  --> <br><br><input type = 'text' id = 'address' value = 'Home address'> <!-- insert address box  --> &nbsp &nbsp &nbsp<input type = 'text' id = 'phone' value = 'Phone number'> <!-- insert phone number box  --><br><br><input type = 'text' id = 'birthday' value = 'Birthday'> <!-- insert birthday box  --><br><br><p> <button type='submit'>Submit Information</button> </p> <!-- submit information button  --><br><br></form> <!-- end of form object  --><h2> My Activity in the App </h2> <!-- my activiyy in the app section --><br><br><div class='activity'>POINTS: 2</div> <!-- points circle  --><div class='activity'>LEVEL: 10</div> <!-- level circle  --><div class='activity'>OPINIONS: 3</div> <!-- opinions circle  --> <div class='activity'>PHOTOS: 5</div> <!-- photos circle  -->";

var ritzButtonString = "Name: Hotel Ritz Madrid\nAddress: Plaza de la Lealtad, 5, 28014 Madrid\nWebsite: https://www.mandarinoriental.com/madrid/hotel-ritz/luxury-hotel \nTelephone Number: (+34) 91 701 67 67 \nEmail: RZMAD-RESERVATIONS@MOHG.COM \nFacebook: Hotel Ritz, Madrid\nPrice: At least 300 per night\nDescription: Set in a grand building built in 1910, this plush luxury hotel is a 4-minute walk from the Museo del Prado and 15 km from Madrid-Barajas Airport \nOpinion: This is my favorite hotel in Madrid! The hotel restaurant is amazing I would definitely recommend trying the lobster! The location is perfect and is near many of the main tourist sights that you should see when you are in the city! It is a little expensive, but worth it!";

var ardosaString = "Name: La Ardosa\nAddress: Calle de Colon, 13, 28004 Madrid\nWebsite: http://www.laardosa.es/ \nTelephone Number: (+34) 91 521 49 79 \nEmail: N/A \nFacebook: Bodega La Ardosa\nPrice: $$-$$$ (Moderately Priced)\nDescription: They offer a wide variety of Irish beers at very reasonable prices, vermouth on tap, lagers, fine wines from La Ribera and Rioja. For snacks, they offer a variety of 'tapas', 'salmorejo' (a thick, cold tomato and garlic soup), cold meats, cured meat from Leon, duck ham and potato omelette, among other things. \nOpinion: This is a great bodega in a busy and popular area of the city. It gets pretty crowded at night so I would recommend getting there early to secure a good seat. I heard that they are famous for their tortillas and they lived up to the expectation! Very fair pricing as well";

var sachaButtonString = "Name: Restaurante Sacha\nAddress: 11, Calle de Juan Hurtado de Mendoza, 28036 Madrid\nTrip Advisor: https://www.tripadvisor.com/Restaurant_Review-g187514-d991775-Reviews-Sacha-Madrid.html \nTelephone Number: (+34) 913 45 59 52 \nEmail: N/A \nFacebook: Restaurante Sacha\nPrice: $$$$ (Expensive)\nDescription: Sacha, an old-school Spanish restaurant that was originally started by a couple who named the place after their only son. As luck would have it, Sacha is now the head chef and proprietor, helming a menu that has become a staple for Madrid foodies. The offerings here change seasonally, but the selection always has its foundation in traditional Spanish cuisine \nOpinion: This is a top tier restaurant in Madrid. It is a very popular restaurant with the locals and there are not many tourists! They have a great wine list and every item on the menu has been carefully thought out. It is a little hard to find, but I will be back next time I am in Madrid!";
//registerForm html
var registerForm = "<b>Account Information</b><br><form id='registerFile' method='post' onsubmit='helper()' name='regForm'>Username: <input type='text' name='username' required><br>Password: <input type = 'password' pattern = '[a-z0-9]{1,8}' name = 'psw'required><br><br><b>Personal Information</b><br>First Name: <input type='text' name='firstName' required><br>Last Name: <input type = 'text' name = 'lastName' required><br>E-mail Address: <input type = 'email' name = 'email' required><br>Birthday: <input type = 'date' name = 'birthday' required><br>Address: <input type = 'text' name = 'address' required><br><br><br>Profile Picture: <div id='browse'><input type = 'file' name = 'profilePicture'></div><br><br><input type = 'checkbox' name = 'terms' value = 'read' required>I have read and accept the terms of use<br><br><input type = 'submit' value = 'Save'><br><input type = 'reset' value = 'Delete'> </form>";
//logIn form html
var logInForm = "<b>Account Log In</b><br><form name='regForm' onsubmit='return regVal() method = 'post'>Email: <input type='email' name='logInEmail' required><br>Password: <input type = 'password' pattern = '[a-z0-9]{1,8}' name = 'psw'required><br><br><br><br><input type = 'submit' value = 'Log In'></form>";
