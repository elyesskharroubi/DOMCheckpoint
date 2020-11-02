let itemList = document.getElementById("mainContent");
let filter = document.getElementById("filterItems");
// let items = document.getElementsByClassName("myItem");
// var x = itemList.getElementsByClassName("myItem");
// console.log(x);

// SEARCH FILTER //
filter.addEventListener("keyup", filterItems); // event listener search
// filter elements function
function filterItems(e) {
  let txt = e.target.value.toLowerCase(); // convert to lowercase
  let items = itemList.getElementsByClassName("myItem"); // getting items
  Array.from(items).forEach(function (item) {
    let itemName = item.firstElementChild.textContent;
    if (itemName.toLowerCase().indexOf(txt) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

// FAVORITE BUTTON COLOR CHANGE //

// let favBtn = [].slice.call(itemList.querySelectorAll(".favBtn"));
// favBtn.addEventListener("click", red);
// function red(e) {
//   return (e.style.color = "#e60505");
// }

const redHeart = (e) => e.classList.toggle("red-heart");

// ADDING AND REMOVING ITEMS FROM CART //

const btns = document.getElementsByClassName("buyBtn");
Array.from(btns).map((e) => {
  e.addEventListener("click", () => {
    let unitP = e.nextElementSibling.innerHTML;
    totalPrice.innerHTML =
      parseInt(totalPrice.innerHTML) + parseInt(unitP.replace(" DT", ""));
    // var container = document.querySelector(".box");

    var price = e.nextElementSibling.innerHTML;
    var name =
      e.parentElement.previousElementSibling.previousElementSibling
        .previousElementSibling.innerHTML;
    let structur = `<ul class="cartRow"><li class="cartItemName">${name}</li><li class="cartItemPrice">${price}</li><li class="unit">${price}</li><li class="cartItemQuantity"><input type="number" class="quantityInput" value="1"></li><li><button class="removeBtn btn btn-danger">X</button></li></ul>`;

    document.querySelector(".list-items").innerHTML =
      document.querySelector(".list-items").innerHTML + structur;
    // var cartRow = document.createElement("ul");
    // cartRow.classList.add("cartRow");
    // var cartName = document.createElement("li");
    // cartName.classList.add("cartItemName");
    // cartName.innerHTML = name;
    // var cartPrice = document.createElement("li");
    // cartPrice.classList.add("cartItemPrice");
    // cartPrice.innerHTML = price;
    // var cartQuantity = document.createElement("li");
    // cartQuantity.classList.add("cartItemQuantity");
    // var quantityInput = document.createElement("input");
    // quantityInput.setAttribute("type", "number");
    // quantityInput.setAttribute("id", "quantityInput");
    // quantityInput.setAttribute("value", "1");
    // var deleteItem = document.createElement("li");
    // var delBtn = document.createElement("button");
    // delBtn.classList.add("removeBtn", "btn", "btn-danger");
    // delBtn.innerHTML = "X";
    // cartRow.append(cartName);
    // cartRow.append(cartPrice);
    // cartQuantity.append(quantityInput);
    // cartRow.append(cartQuantity);
    // deleteItem.append(delBtn);
    // cartRow.append(deleteItem);
    // container.insertBefore(cartRow, container.children[3]);

    // REMOVING ITEMS FROM CART //

    let qtyInputs = document.querySelectorAll(".quantityInput");
    Array.from(qtyInputs).map((el) => {
      el.addEventListener("change", (e) => {
        let qty = e.target.value;
        let unit =
          el.parentElement.previousElementSibling.previousElementSibling
            .innerHTML;
        totalPrice.innerHTML =
          parseInt(totalPrice.innerHTML) + parseInt(unit.replace(" DT", ""));
        if (qty <= 0) {
          e.target.value = 1;
        } else {
          el.parentElement.previousElementSibling.innerHTML =
            parseInt(unit.replace(" DT", "")) * parseInt(qty) + " DT";
          // totalPrice.innerHTML =
          //   parseInt(totalPrice.innerHTML) + parseInt(unit.replace(" DT", ""));
        }
      });
    });

    let delItem = document.querySelectorAll(".removeBtn");
    Array.from(delItem).map((el) =>
      el.addEventListener("click", function () {
        el.parentElement.parentElement.remove();
        totalPrice.innerHTML =
          parseInt(totalPrice.innerHTML) -
          parseInt(
            el.parentElement.previousElementSibling.previousElementSibling.innerHTML.replace(
              " DT",
              ""
            )
          );
      })
    );

    //   quantitty and price change  //
    // let quantity = quantityInput.value;
    // quantityInput.addEventListener(
    //   "click",
    //   () => (price = parseInt(price.replace(" DT", "")) * parsInt(quantity))
    // );
    // TOTAL PRICE //
  });
});
