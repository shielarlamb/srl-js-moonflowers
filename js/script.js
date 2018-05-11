const menuData = {
  "products": [
    {
      "name": "Assorted Muffins",
      "type": "bakery",
      "price": "$1.75",
      "img": "muffins.jpg"
      },
    {
      "name": "Fresh Baked Brownie",
      "type": "bakery",
      "price": "$2.00",
      "img": "brownies.jpg"
      },
    {
      "name": "Fresh Ground Coffee",
      "type": "beverage",
      "price": "$2.25"
      },
    {
      "name": "Assorted Scones",
      "type": "bakery",
      "price": "$2.50",
      "img": "scones.jpg"
      },
    {
      "name": "Espresso",
      "type": "beverage",
      "price": "$2.75",
      "img": "espresso.jpg"
      },
    {
      "name": "Americano",
      "type": "beverage",
      "price": "$2.85",
      "img": "americano.jpg"
      },
    {
      "name": "Cappuccino",
      "type": "beverage",
      "price": "$3.50",
      "img": "cappuccino.jpg"
      },
    {
      "name": "Latte",
      "type": "beverage",
      "price": "$3.50",
      "img": "latte.jpg"
      },
    {
      "name": "Moonflowers T-shirt",
      "type": "other",
      "price": "$12.00"
      },
    {
      "name": "Mocha",
      "type": "beverage",
      "price": "$3.75",
      "img": "mocha.jpg"
      },
    {
      "name": "Breve",
      "type": "beverage",
      "price": "$3.75",
      "img": "breve.jpg"
      },
    {
      "name": "Slice of Chocolate Cake",
      "type": "bakery",
      "price": "$3.75",
      "img": "choc-cake.jpg"
      },
    {
      "name": "Slice of Strawberry Cream Cake",
      "type": "bakery",
      "price": "$3.75",
      "img": "white-cake.jpg"
      }
    ]
};


const menus = {menuItems:menuData}
const menuTarget = document.getElementById("menu");



console.log(menus);
/*
addMenuData();
function addMenuData() {
	
	const menuTarget = document.getElementById("menu");
	
	// line to remove the default from the HTML
	const menuElement = menuTarget.lastElementChild;
	menuTarget.removeChild(menuElement);
	
	//process each menu
	const menuArray = menuData.products;

	menuArray.forEach((product) => {
		/*if (product.type == "beverage") {
			const tableMenu = document.createElement("table");
			menuTarget.appendChild(tableMenu);

			const productName = document.createElement("td");
			productName.setAttribute("class", "col-sm-12");
			productName.innerHTML = product.name + " | " + product.price + " | " + product.img;
			tableMenu.appendChild(productName);

			const imgAltText = "Sorry, no image."
			const imageTag = makeImageHTML(product.img, imgAltText);
			//addMenu(product, menuTarget);
		}
	
	});
	
}*/


bevTable();
//create table for beverage
function bevTable(t) {
	
	const menuTarget = document.getElementById("menu");
	
//	const tableMenu = document.createElement("table");

		
	// line to remove the default from the HTML
	const menuElement = menuTarget.lastElementChild;
	menuTarget.removeChild(menuElement);
	
	const beverageTable = document.createElement("h3");
	beverageTable.innerHTML = "Beverage";
	menuTarget.appendChild(beverageTable);
	//process each menu
	const menuArray = menuData.products;
	
	menuArray.forEach((product) => {
		
		
		if (product.type == "beverage") {
			const tableMenu = document.createElement("table");
			menuTarget.appendChild(tableMenu);

			
			const productName = document.createElement("td");
			productName.setAttribute("class", "col-sm-8");
			productName.innerHTML = product.name + " | " + product.price + " | ";
			tableMenu.appendChild(productName);
			
	
			const img = document.createElement("img");
			img.setAttribute("class", "col-sm-4");
			const src = "images/" + product.img ;
			const imgAltText = "Sorry, no image."
			const imageTag = makeImageHTML(src, imgAltText);
			tableMenu.appendChild(imageTag);
				
						
	
		}
				

	});
	
}

bakeryTable();
//create table for beverage
function bakeryTable() {
	
	const menuTarget = document.getElementById("menu");
	const menuArray = menuData.products;
	const bakeTable = document.createElement("h3");
	bakeTable.innerHTML = "Bakery";
	menuTarget.appendChild(bakeTable);
	
	menuArray.forEach((product) => {
		
		
		if (product.type == "bakery") {
			const tableMenu = document.createElement("table");
			menuTarget.appendChild(tableMenu);

			const productName = document.createElement("td");
			productName.setAttribute("class", "col-sm-8");
			productName.innerHTML = product.name + " | " + product.price + " | ";
			tableMenu.appendChild(productName);
			
	
			const img = document.createElement("img");
			img.setAttribute("class", "col-sm-0");
			const src = "images/" + product.img ;
			const imgAltText = "Sorry, no image."
			const imageTag = makeImageHTML(src, imgAltText);
			tableMenu.appendChild(imageTag);
				
			
		}
		
		
	
	});
}

otherTable();
//create table for beverage
function otherTable() {
	
	const menuTarget = document.getElementById("menu");
	
//	const tableMenu = document.createElement("table");

	const otherTable = document.createElement("h3");
	otherTable.innerHTML = "Other products";
	menuTarget.appendChild(otherTable);
	
	const menuArray = menuData.products;


	menuArray.forEach((product) => {
		
/*		const imgAltText = "Sorry, no image."
			const imageTag = makeImageHTML(product.img, imgAltText);*/
		
		if (product.type == "other") {
			const tableMenu = document.createElement("table");
			menuTarget.appendChild(tableMenu);

			
			const productName = document.createElement("td");
			productName.setAttribute("class", "col-sm-8");
			productName.innerHTML = product.name + " | " + product.price + " | ";
			tableMenu.appendChild(productName);
			
	
			const img = document.createElement("img");
			img.setAttribute("class", "col-sm-0");
			const src = "images/" + product.img ;
			const imgAltText = "Sorry, no image."
			const imageTag = makeImageHTML(src, imgAltText);
			tableMenu.appendChild(imageTag);
				
			
			
		}
		
	
	});
	
}


let locationsData = {
  "locations": [
    {
      "id": "gridania",
      "name": "Gridania Avenue",
      "hours": [
        {
          "day": "Monday - Thursday",
          "time": "6AM - 8PM"
        },
        {
          "day": "Friday",
          "time": "6AM - 10PM"
        },
        {
          "day": "Saturday - Sunday",
          "time": "8AM - 8PM"
        }
      ],
      "staff": [
        {
          "id": "leilahMoon",
          "name": "Leilah Moonflower",
          "img": "Leilah.png",
          "text": "The Moonflower sisters, Leilah and Khisa, are the proud founders of Moonflower's Coffee. After their adventuring days came to an end, they decided there was nothing more relaxing than sitting down to a slice of cake with a fine cup of coffee. Khisa manages the Limsa store and is also responsible for all the fine baked goods."
        },
        {
          "id": "hastan",
          "name": "Hastan",
          "img": "Hastan.png",
          "text": "Hastan is our bean buyer and a pro coffee roaster. He has traveled the world to ensure that Moonflower's bean are top notch, environmentally friendly, and fair-trade certified. He's always happy to share pictures and stories from his trips and will tell you more about coffee than you ever wanted to know."
        }
      ]
    },
    {
      "id": "limsa",
      "name": "Limsa Lane",
      "hours": [
        {
          "day": "Monday",
          "time": "Closed"
        },
        {
          "day": "Tuesday - Thursday",
          "time": "6AM - 8PM"
        },
        {
          "day": "Friday",
          "time": "6AM - 10PM"
        },
        {
          "day": "Saturday - Sunday",
          "time": "8AM - 10PM"
        }
      ],
      "staff": [
        {
          "id": "khisaMoon",
          "name": "Khisa Moonflower",
          "img": "Khisa.png",
          "text": "The Moonflower sisters, Khisa and Leilah, are the proud founders of Moonflower's Coffee. After their adventuring days came to an end, they decided there was nothing more relaxing than sitting down to a slice of cake with a fine cup of coffee. Khisa manages the Limsa store and is also responsible for all the fine baked goods."
        },
        {
          "id": "noirterel",
          "name": "Noirterel",
          "img": "Noirterel.png",
          "text": "Noirterel is our newest employee and we're happy to welcome him to the team. Noirterel works with Hastan to roast our beans and has been known to help out in the bakery as well. You can thank him for the awesome apricot and cardamom scones that we featured in the spring."
        }
      ]
    }
  ]
}


//Function to add location data
addLocationData();

function addLocationData() {
	
//Displying array of locations
	const locationsTarget = document.getElementById("locations");
	
	//line to remove the default from the HTML
	const paraElement = locationsTarget.lastElementChild;
	locationsTarget.removeChild(paraElement);
	
	//process each location
	const locationsArray = locationsData.locations;
	//new array forEach syntax
	locationsArray.forEach((location) => {
	addLocation(location, locationsTarget);
			//console.log(location);		   
 });
}

function addLocation(location, target) {
	const article = document.createElement("article");
	target.appendChild(article);
	
	const h3 = document.createElement("h3");
	h3.innerHTML = location.name;
	article.appendChild(h3);
	
	
	const h4Hours = document.createElement("h4");
	h4Hours.innerHTML = "Weekly Hours";
	article.appendChild(h4Hours);
	addHours(location.hours, article);
	
	const h4Staff = document.createElement("h4");
	h4Staff.innerHTML = "Staff Members";
	article.appendChild(h4Staff);
	addStaff(location.staff, article);
	//console.log(location);
}

function addHours(hoursArray, target) {
	console.log(hoursArray);
	
	hoursArray.forEach((hours) => {
	const ulHours = document.createElement("ul");
	ulHours.setAttribute("class", "col-sm-0");
	target.appendChild(ulHours);
		addLocationHours(hours, target);
	
	});
	
}

function addLocationHours(hours, target) {
		
		const ulHoursList = document.createElement("ul");
		ulHoursList.setAttribute("class", "col-sm-0");
		target.appendChild(ulHoursList);
		
		const listDay = document.createElement("li");
		listDay.innerHTML = hours.day+ " : " + hours.time;
		ulHoursList.appendChild(listDay);
		
		
	}					   
					   
function addStaff(staffArray, target) {
	//console.log(staffArray);
		
	//process each staff members in the array
	staffArray.forEach((member) => {
		//set up to hold div
	const div = document.createElement("div");
	div.setAttribute("class", "staff row");
		target.appendChild(div);
		addStaffMember(member, div);
	});
	
}

function addStaffMember(member, target) {
	//console.log(member);
	
		const div1 = document.createElement("div");
		div1.setAttribute("class", "col-sm-8");
		target.appendChild(div1);
	
	
		const h5 = document.createElement("h5");
		h5.innerHTML = member.name;
		div1.appendChild(h5);
	
	
		const para = document.createElement("p");
		para.innerHTML = member.text;
		div1.appendChild(para);
	
		const div2 = document.createElement("div");
		div2.setAttribute("class", "col-sm-4");
		target.appendChild(div2);
	
		const imgAltText = `Picture of ${member.name}.`
		const imageTag = makeImageHTML(member.img, imgAltText);
}


function makeImageHTML(src, alt) {
	
	const img = document.createElement("img");
	img.setAttribute("src", src);
	img.setAttribute("alt", alt);
	return img;

	
}

//console.log(menuData);
//console.log(locationsData);