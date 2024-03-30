let add = JSON.parse(localStorage.getItem("addNews")) || []


const handleNews = (e) => {
    e.preventDefault()

    let data = {

        title: document.getElementById("title").value,
        img: document.getElementById("img").value,
        content: document.getElementById("content").value,

    }
    product.push(data)
    localStorage.setItem("addNews", JSON.stringify(product))
    window.location.href = "./index.html"

}

document.getElementById("#news").addEventListener("submit", handleNews)
