$("#navbar").load("/content/navbar.html")
loadContent("savingsCalculator")

function loadContent(contentID) {
	$("#content").load(`/content/${contentID}.html`)
}