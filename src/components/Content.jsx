import React from 'react';

const Content = () => {
    const advertisementsData = [
        {
            image: "https://www.bhphotovideo.com/images/images1500x1500/dell_wnvdn_dell_latitude_3190_2_in_1_1618993.jpg", 
            title: "Dell Latitude 3190",
            specification: "2-in-1 11.6 HD Touch Intel 8GB 128GB SSD Win 11 Pro",
            description: "Super compact and highly portable 11.6-inch laptop for web surfing, quad-core Intel processor and fast 128GB SSD. Comes with a reversible HD resolution touchscreen so it can be used as a tablet. Weighing in at 1.4 kg.", 
            price: "2399 kr", 
            contact: "test1@gmail.com"
        },
        {
            image: "https://c1.neweggimages.com/ProductImageCompressAll1280/V0UUD2103198CD22.jpg", 
            title: "Dell Latitude 7410",
            specification: "2-in-1 14 Touch i5 (Gen 10) 16GB 256GB SSD with 4G & Win 11 Pro",
            description: "Dell Latitude 7410 with small mark screen! 14-inch laptop with a 360-degree Full HD touchscreen, tenth generation Intel i5 processor, 16GB RAM, handy backlit keyboard, built-in 4G modem and a super-fast 256GB SSD. Comes with Windows 11 Pro.", 
            price: "5999 kr", 
            contact: "test2@gmail.com"
        },
        {
            image: "https://www.dellrefurbished.com/mas_assets/cache/image/c/0/0/800x-3072.Jpg", 
            title: "Dell Precision 7540",
            specification: "15.6 Full HD i7-9750H 16GB 256GB SSD Quadro T2000 Win11 Pro (beg)",
            description: "Dell 7540 with 15.6-inch computer that has good performance for graphic work with the strong six-core Intel i7 processor, 16GB of RAM, and a powerful NVIDIA Quadro T2000 graphics card that has 4GB of GDDR6 graphics memory.", 
            price: "8499 kr", 
            contact: "test3@gmail.com"
        },
        {
            image: "https://www.bhphotovideo.com/images/images1500x1500/dell_wnvdn_dell_latitude_3190_2_in_1_1618993.jpg", 
            title: "Dell Latitude 3190",
            specification: "2-in-1 11.6 HD Touch Intel 8GB 128GB SSD Win 11 Pro",
            description: "Super compact and highly portable 11.6-inch laptop for web surfing, quad-core Intel processor and fast 128GB SSD. Comes with a reversible HD resolution touchscreen so it can be used as a tablet. Weighing in at 1.4 kg.", 
            price: "2399 kr", 
            contact: "test1@gmail.com"
        },
        {
            image: "https://c1.neweggimages.com/ProductImageCompressAll1280/V0UUD2103198CD22.jpg", 
            title: "Dell Latitude 7410",
            specification: "2-in-1 14 Touch i5 (Gen 10) 16GB 256GB SSD with 4G & Win 11 Pro",
            description: "Dell Latitude 7410 with small mark screen! 14-inch laptop with a 360-degree Full HD touchscreen, tenth generation Intel i5 processor, 16GB RAM, handy backlit keyboard, built-in 4G modem and a super-fast 256GB SSD. Comes with Windows 11 Pro.", 
            price: "5999 kr", 
            contact: "test2@gmail.com"
        },
        {
            image: "https://www.dellrefurbished.com/mas_assets/cache/image/c/0/0/800x-3072.Jpg", 
            title: "Dell Precision 7540",
            specification: "15.6 Full HD i7-9750H 16GB 256GB SSD Quadro T2000 Win11 Pro (beg)",
            description: "Dell 7540 with 15.6-inch computer that has good performance for graphic work with the strong six-core Intel i7 processor, 16GB of RAM, and a powerful NVIDIA Quadro T2000 graphics card that has 4GB of GDDR6 graphics memory.", 
            price: "8499 kr", 
            contact: "test3@gmail.com"
        }
    ];

    const renderAdvertisements = () => {
        const advertisementsDiv = advertisementsData.map((eachItem, index) => {
            const eachCard = 
            
            <div className="card col col-md-4 mb-4 my-1 border rounded bg-light">
                <div className="d-flex flex-column my-2">
                    <img className="card-img-top" src={eachItem.image} alt="Dell Image" style={{objectFit: "contain", height: "200px"}}/>
                    <div className="card-body">
                        <h5 className="card-title">{eachItem.title}</h5>
                        <p className="card-text">{eachItem.specification}</p>
                        <h4 className="card-text text-danger fw-bolder">{eachItem.price}</h4>
                        <p className="card-text fw-bolder">Contact: <span className="card-text fw-bolder" id={`contact-${index}`}>*****</span></p>
                    </div>
                    <div className="card-footer text-center">
                        <button className="btn btn-info btn-block mx-2 contactButton" data-index={index} onClick={toggleContact}>Show Contact</button>
                        <button className="btn btn-info btn-block mx-2 detailsButton" data-index={index} onClick={showDetails}>Show Details</button>
                    </div>
                    <div className="card-text">
                        <div id={`details-${index}`} style={{display: "none", padding: "10px", marginTop: "1px", backgroundColor: "lightgrey"}}>
                            <p><strong>Description: </strong>{eachItem.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            return eachCard;
        });
        return advertisementsDiv;
    };

    const toggleContact = ((event) => {
        const contactButtonIndex = event.target.getAttribute("data-index");
        const contactSpan = document.getElementById(`contact-${contactButtonIndex}`);
        if (contactSpan.textContent === '*****') {
            contactSpan.textContent = advertisementsData[contactButtonIndex].contact;
            event.target.textContent = 'Hide Contact';
        } else {
            contactSpan.textContent = '*****';
            event.target.textContent = 'Show Contact';
        }
    });
    
    const showDetails = ((event) => {
        const detailsButtonIndex = event.target.getAttribute("data-index");
        const detailsDiv = document.getElementById(`details-${detailsButtonIndex}`);
        if (detailsDiv.style.display === "none") {
            detailsDiv.style.display = "block";
            event.target.textContent = 'Hide Details';
        } else {
            detailsDiv.style.display = "none";
            event.target.textContent = 'Show Details';
        }
    });

    return (
        <div className="container mt-3">
            <h2 className="mb-4">Advertisement List</h2>
            <div id="advertisements" className="row">
                {renderAdvertisements()}
            </div>
        </div>
    );
};

export default Content;