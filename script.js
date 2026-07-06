const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
let pricesElement = document.querySelectorAll(".prices");
let totalSum = 0;

pricesElement.forEach((element)=>{
	const priceText = element.textContent.trim();
	const priceValue = Number(priceText)||0;

	totalSum += priceValue;
});

let table = document.querySelector("table");
let row = document.createElement("tr");
let newCell = document.createElement("td");

newCell.textContent = `Total: ${totalSum}`;
newCell.setAttribute("id","ans");
newCell.setAttribute("colspan",'2');


row.appendChild(newCell);
table.appendChild(row);
};

getSumBtn.addEventListener("click", getSum);

