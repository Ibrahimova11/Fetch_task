
// const tBodyElement = document.querySelector("tbody");
// fetch("https://northwind.vercel.app/api/customers/ ")
// .then (function(response){
//     return response.json();

// })
// .then (function(data){
    
//     console.log(data);
//     for (let i=0; i <data.length ; i++){
//         const trElement= document.createElement("tr");
//         const tdIdElement=document.createElement("td");
//         const tdCompany_NameElement=document.createElement("td");
//         const tdContact_NameElement=document.createElement("td");
//         const tdContact_TitleElement=document.createElement("td");
//         const tdAddressElement=document.createElement("td");
//         tdIdElement.textContent=data[i].id;
//         tdCompany_NameElement.textContent=data[i].companyName;
//         tdContact_NameElement.textContent=data[i].contactName;
//         tdContact_TitleElement.textContent=data[i].contactTitle;
//         tdAddressElement.textContent=data[i].address.street+', '+data[i].address.country ;
//         trElement.append(tdIdElement,tdCompany_NameElement,tdContact_NameElement,tdContact_TitleElement, tdAddressElement);
//         tBodyElement.appendChild(trElement);
//     }

// });




const tBodyElement=document.querySelector("tbody");
axios("https://northwind.vercel.app/api/customers/ ").then(function(response){
    console.log(response.data);

for (let i=0; i<response.data.length; i++){
    const trElement= document.createElement("tr");
        const tdIdElement=document.createElement("td");
        const tdCompany_NameElement=document.createElement("td");
        const tdContact_NameElement=document.createElement("td");
        const tdContact_TitleElement=document.createElement("td");
        const tdAddressElement=document.createElement("td");
        tdIdElement.textContent=response.data[i].id;
        tdCompany_NameElement.textContent=response.data[i].companyName;
        tdContact_NameElement.textContent=response.data[i].contactName;
        tdContact_TitleElement.textContent=response.data[i].contactTitle;
        tdAddressElement.textContent=response.data[i].address.street+', '+response.data[i].address.country  ;
        trElement.append(tdIdElement,tdCompany_NameElement,tdContact_NameElement,tdContact_TitleElement, tdAddressElement);
        tBodyElement.appendChild( trElement);
    }

});

