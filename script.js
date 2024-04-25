let products = {
    data: [
        {
            title: "title: The Name of the Wind",
            author: "author: Patrick Rothfuss",
            subject: "Fiction",
            date: "2022-01-31",
            image: "https://images.gr-assets.com/books/1515589515l/186074.jpg", // Replace this with the copied image URL
        },
        {
            title: "title :The Night Circu",
            author: "author : Erin Morgenstern",
            subject: "Fiction",
            date: "2022-11-11",
            image: "https://images.gr-assets.com/books/1387124618l/9361589.jpg" ,
        },
        {
            title: "title : Me Before You",
            author: "author : Jojo Moyes",
            subject: "Romance",
            date:  "2022-12-22",
            image: "https://tse3.mm.bing.net/th?id=OIP.n-ZduW8z8yvxLCCGxN9lmgHaLW&pid=Api&P=0&h=220" ,
        },
        {
            title: "title : Outlande",
            author: "author : Diana Gabaldon",
            subject: "Romance",
            date:  "2022-03-20",
            image: "https://tse3.mm.bing.net/th?id=OIP.lNGE8b3lvfBbEuBCOFSGywHaLp&pid=Api&P=0&h=220" ,
        },
        {
            title: "title : Sapiens: A Brief History of Humankind",
            author: "author : Yuval Noah Harari",
            subject: "Science",
            date:  "2022-11-10",
            image: "https://tse1.mm.bing.net/th?id=OIP.Wdw8knp_mCAsj_Y4hZ4MQwHaLX&pid=Api&P=0&h=220" ,
        },
        {
            title: "title : The Elegant Universe",
            author: "author : Brian Greene",
            subject: "Science",
            date:  "2022-12-20",
            image: "http://books.google.com/books/content?id=dpSqvJpLe8oC&printsec=frontcover&img=1&zoom=1&source=gbs_api" ,
        },
        {
            title: "title : A Game of Thrones",
            author: "author : George R.R. Martin",
            subject: "Fantasy",
            date:  "2022-12-20",
            image: "https://tse4.mm.bing.net/th?id=OIP.pFsASuBeDsUE_2Kzc2EGOgHaLU&pid=Api&P=0&h=220" ,
        },
        {
            title: "title :Mistborn: The Final Empire",
            author: "author : Brandon Sanderson",
            subject: "Fantasy",
            date: "2022-01-21",
            image: "https://tse1.explicit.bing.net/th?id=OIP.9BRxyipDFPrRQoosNLln6AHaLG&pid=Api&P=0&h=220" ,
        },
        {
            title: "title : Harry Potter",
            author: "author : J.K. Rowling",
            subject: "Fantasy",
            date:  "1999-12-20",
            image: "https://tse3.mm.bing.net/th?id=OIP.SMNHDGdZekxM-2Da8TTk_gHaKm&pid=Api&P=0&h=220" ,
        },
        {
            title: "title : The Real Trial of Oscar Wilde",
            author: "author : Merlin Holland",
            subject: "Biography & Autobiography",
            date:  "2022-04-20",
            image: "https://tse4.mm.bing.net/th?id=OIP.BHMkg5R6yymAB7GxJKvm2QAAAA&pid=Api&P=0&h=220" ,
        },
        {
            title: "title :Walt Whitman",
            author: "author : Justin Kaplan",
            subject: "Biography & Autobiography",
            date:  "1995-12-22",
            image: "https://tse3.mm.bing.net/th?id=OIP.JTXycL5Nfg9K1a8SW08a3wHaLJ&pid=Api&P=0&h=220" ,
        },
      
    ],
};

for(let i of products.data){
    let card = document.createElement("div");
    card.classList.add("card",i.subject,"hide");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    let image = document.createElement("img");
    image.setAttribute("src",i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let container = document.createElement("div");
    container.classList.add("container");

    let title = document.createElement("h5");
    title.classList.add("title");
    title.innerText = i.title.toUpperCase();
    container.appendChild(title);

    let author = document.createElement("h6");
    author.classList.add("author");
    author.innerText = i.author.toUpperCase();
    container.appendChild(author);

    let sub = document.createElement("h6");
    sub.classList.add("sub");
    sub.innerText = i.subject.toUpperCase();
    container.appendChild(sub);

    let date = document.createElement("h6");
    date.classList.add("date");
    date.innerText = i.date.toUpperCase();
    container.appendChild(date);

    card.appendChild(container);
    document.getElementById("Books").appendChild(card);
}

function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });

    let elements = document.querySelectorAll(".card");
    elements.forEach((element) =>{
        if(value == "all"){
            element.classList.remove("hide");
        }else{
            if(element.classList.contains(value)){
                element.classList.remove("hide");
            }
            else{
                element.classList.add("hide");
            }
        }
    });
}

document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".title");
    let cards = document.querySelectorAll(".card");
    elements.forEach((element, index) => {
      if (element.innerText.includes(searchInput.toUpperCase())) {
        cards[index].classList.remove("hide");
      } else {
        cards[index].classList.add("hide");
      }
    });
  });


  

  window.onload = () => {
    filterProduct("all");
  };



