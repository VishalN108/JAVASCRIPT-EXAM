
let news = JSON.parse(localStorage.getItem("news")) || []


const objectNews = (data) => {
    document.getElementById("box").innerHTML = ""
    data.map((ele) => {
        let title = document.createElement("h1")
        title.innerHTML = ele.title

        let img = document.createElement("img")
        img.src = ele.img

        let content = document.createElement("p")
        content.innerHTML = ele.content
       


        div.append(img, title, content )

        document.getElementById("box").append(div)

    })

}







