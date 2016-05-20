function todoList () {
	var username = document.getElementById("username").value
	var comment = document.getElementById("comment").value

	var userNameText = document.createTextNode("Name: " + username)
	var commentText = document.createTextNode("Next Adventure: " + comment)

	var newListItem = document.createElement("LI")
	newListItem.className = "list-group-item"
	var newUserName = document.createElement("H3")
	newUserName.appendChild(userNameText)
	var newComment = document.createElement("P")
	newComment.appendChild(commentText)

	newListItem.appendChild(newUserName)
	newListItem.appendChild(newComment)
	document.getElementById("commentList").appendChild(newListItem)

	var newDiv = document.createElement("div")
	newDiv.className = "newClass"
	var newImg = document.createElement("img")
	newImg.setAttribute("src", "img/travelpen2.png")
	var addHere = document.getElementById("commentList")
	newListItem.appendChild(newImg)
	addHere.appendChild(newDiv)

	
}

// var newImg = document.createElement("img")
// newImg.setAttribute("src", "img/travelpen.png")
// var addHere = document.getElementById("form-group")
// addHere.appendChild(newImg)

// var newDiv = document.createElement('div')
// newDiv.className = "newClass"
// var textHere = document.createTextNode('So Cute!')
// newDiv.appendChild(textHere)
// var newImg = document.createElement("img")
// newImg.setAttribute("src", "img/travelpen.png")
// var addHere = document.getElementById("form-group")
// addHere.appendChild(newImg)
// addHere.appendChild(newDiv)


// var newImg = document.createElement('img')
// newImg.setAttribute('src', 'img/cuddle.jpg')
// var addHere = document.getElementById('addHere')
// addHere.appendChild(newImg)

