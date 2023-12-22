try {
	// Specify the pattern to match in the CSS file URLs
	const cssURLPattern = /^https:\/\/cdn\.oaistatic\.com\/_next\/static\/css/

	// Find and remove stylesheets with URLs matching the pattern
	document.querySelectorAll('link[rel="stylesheet"]').forEach((stylesheet) => {
		const href = stylesheet.getAttribute("href")

		// Check if the href attribute matches the pattern
		if (cssURLPattern.test(href)) {
			// If it matches, remove the stylesheet from the document
			stylesheet.parentNode.removeChild(stylesheet)
		}
	})

	const extensionURL = chrome.runtime.getURL("")

	// Create a new link element for your custom CSS
	const linkElement = document.createElement("link")
	linkElement.rel = "stylesheet"
	linkElement.type = "text/css"
	linkElement.href = extensionURL + "css/style.css"

	// Create new link elements for Google Fonts
	const googleFontsLink1 = document.createElement("link")
	googleFontsLink1.rel = "preconnect"
	googleFontsLink1.href = "https://fonts.googleapis.com"

	const googleFontsLink2 = document.createElement("link")
	googleFontsLink2.rel = "preconnect"
	googleFontsLink2.href = "https://fonts.gstatic.com"
	googleFontsLink2.crossOrigin = "true"

	const googleFontsLink3 = document.createElement("link")
	googleFontsLink3.href =
		"https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap"
	googleFontsLink3.rel = "stylesheet"

	// Get the head element from the document
	const headElement = document.head || document.getElementsByTagName("head")[0]

	// Append the link elements to the head
	headElement.appendChild(linkElement)
	headElement.appendChild(googleFontsLink1)
	headElement.appendChild(googleFontsLink2)
	headElement.appendChild(googleFontsLink3)

	console.log("🎉 Custom CSS and Google Fonts injected successfully!")
} catch (error) {
	console.log("😒 Sorry for this error - ", error.message)
}


//