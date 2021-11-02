function validate() {
  error = false;
  document.getElementById("errFeed").style.display = " ";
  document.getElementById("errName").style.display = " ";
  with (document.data) {
    if (feedback.value == "") {
      console.log("feedback is null");
      document.getElementById("errFeed").style.display = "inline-block";
      feedback.focus();
      err = true;
    }
    if (name.value == "") {
      console.log("feedback is null");
      document.getElementById("errName").style.display = "inline-block";
      name.focus();
      err = true;
    }
  }
  return !err;
}

var btn = $(".submit-btn");
var container = $(".card-container");

btn.on("click", appendToList);
container.on("click", deleteCard);

function appendToList(event) {
  event.preventDefault();
  var name_form = $(".name");
  var email_form = $(".email");
  var comment_form = $(".comment");
  var comment = $(".comment").val();
  var name = $(".name").val();
 

  container.append(`
   <div class="card">
     <p id="p"class="task">"${comment}" </p>
     <p id="p" class="task"> - ${name} </p>
     <button class="delete"> Delete! </button>
   </div>
 `);
 $(".card").fadeIn("slow");
  name_form.val("");
  email_form.val("");
  comment_form.val("");
}
function deleteCard() {
  if (event.target.className === "delete") {
    event.target.parentNode.remove();
  }
}
