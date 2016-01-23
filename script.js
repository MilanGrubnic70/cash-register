var init = function() {

    var cashRegister = {
        total: 0,
        add: function(itemCost) {
            this.total += itemCost;
        }
    };

    cashRegister.add(0.98);
    cashRegister.add(1.23);
    cashRegister.add(4.99);
    cashRegister.add(0.45);



    console.log("Your bill is: " + cashRegister.total + ".");

}; // end of init

$(document).ready(init);