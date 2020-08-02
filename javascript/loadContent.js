$("#content").load("/content/frontpage.html")
function loadContent(contentID) {
	$("#content").load(`/content/${contentID}.html`)
}
