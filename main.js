

// mảng chứa 5 file ảnh

const products = [
    {id: 1, name:"Cả team", src: "./img/mainOne.jpg"},
    {id: 2, name:"Bịp Vật Lý", src: "./img/secondOne.jpg"},
    {id: 3, name:"Chiến thần HoBo", src: "./img/thirdOne.jpg"},
    {id: 4, name:"Bịp ĐSTT, Web", src: "./img/fourthOne.jpg"},
    {id: 5, name:"a Zinh Sun Rang", src: "./img/fifthOne.jpg"},
];
// Khai báo các phần tử DOM chính
const mainCardContainer = document.querySelector('.main-card');
const secondarySection = document.getElementById('secondary-section');

//Todo: CSS cho secondary-section
function importAll(){
    //duyệt mảng products
    products.forEach((product) => {
        //Div con chứa ảnh
        const imgDiv = createImgElement(product);
        secondarySection.appendChild(imgDiv);
    });
};

//Todo: CSS cho các class imgContainer và img trong file index.css
function createImgElement(product){
    //Todo: CSS cho imgContainer flex col
    const card = document.createElement("div");
    card.className = "imgContainer";
    //img
    const img = document.createElement("img");
    img.src = product.src;
    img.alt = "Image";
    //info
    const name = document.createElement("h2");
    name.textContent = product.name;
    //append
    card.appendChild(name);
    card.appendChild(img);

    //Gán handle click cho thẻ phụ
    card.addEventListener('click', () =>{
        //Truyền vào thông tin đc đưa lên main
        //Chính là thông tin của product
        handleCardClick(product);
    });
    return card;
};


// Xử lý sự kiện
//Hàm chính 
function initializeApp(){
    //Hiển thị ảnh đầu tiên nè - id = 1
    handleCardClick(products[0]);

    //4 cái còn lại ở trong thẻ div secondary-section
        // .slice(1) - bỏ qua thằng đầu tiên
    const FourOthers = products.slice(); 
    FourOthers.forEach((item) =>{
        //in ra bằng 
        const imgDiv = createImgElement(item);
        secondarySection.appendChild(imgDiv);
    });
}

//Xử lý khi click vào thẻ con
  //Ta sẽ cập nhật main card khi card đc click
function handleCardClick(product){
    //Thay đổi nội dung cũ, img
    //Sử dụng innerHTML để chèn cấu trúc html vào thẻ chính
    //Lấy từ mainCard - Query Selector ?
    mainCardContainer.innerHTML = `
        <img src="${product.src}" alt="Main Image">
        <h2> ${product.name}</h2>
    `
};

//Chạy ứng dụng
initializeApp();