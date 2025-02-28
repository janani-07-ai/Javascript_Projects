var form=document.getElementById("elements")


function addItem(event)
{
  event.preventDefault()
  var name=document.getElementById("Name").value
  var age=document.getElementById("Age").value
  var course=document.getElementById("Course").value
  var gender=document.querySelector("input[name='Gender']:checked").value
  var email=document.getElementById("Email").value
  
  var table=document.getElementById("tableb")
  var newRow=document.createElement("tr")
  newRow.innerHTML=`
      <td>${name}</td>
      <td>${age}</td>
      <td>${course}</td>
      <td>${email}</td>
      <td>${gender}</td>
      <td><button onClick="deleteItem(this)" id="delete">Delete</button></td>
  `
  table.appendChild(newRow);
  form.reset()
  
}
function deleteItem(button)
{
  button.parentElement.parentElement.remove()
}