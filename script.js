/*
	Date Created: 5 Nov, 2021
	Date Modified: 4 Nov, 2021
	Author: greatsilas23
*/

//constants
const opaqueBackground = document.getElementById("opaqueBackground")
const slideInContainer = document.getElementById("slideInContainer")
const popupItem = document.getElementById("popupItem")
const quickLinks = document.getElementsByClassName("quickTargets")
//variables
let popupIsShowing = false
//methods
function arrangeLinks(){
	let currentMargin = 0
	let leftProperty = ""
	for(let i = 0; i < quickLinks.length; i++){
		quickLinks[i].style.left = leftProperty
		currentMargin += 120
		leftProperty = `${currentMargin}px`
	}
}
function hideBlur(){
	opaqueBackground.style.display = "none"
	slideInContainer.style.display = "none"
	popupItem.style.display = "none"
	popupIsShowing = false
}
function slideMenu(){
	if(!popupIsShowing){
		opaqueBackground.style.display = "block"
		slideInContainer.style.display = "block"
		popupIsShowing = true
	} else {
		opaqueBackground.style.display = "none"
		slideInContainer.style.display = "none"
		popupIsShowing = false
	}
}
function showPopup(){
	if(!popupIsShowing){
		opaqueBackground.style.display = "block"
		popupItem.style.display = "block"
		popupIsShowing = true
	} else {
		opaqueBackground.style.display = "none"
		popupItem.style.display = "none"
		popupIsShowing = false
	}
}