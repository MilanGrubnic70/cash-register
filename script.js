var init = function() {

    var cashRegister = {
        total: 0,
        add: function(itemCost) {
            this.total += itemCost
        },
        scan: function(item, qty) {
            switch (item) {
                case 'eggs':
                    this.add(5.00 * qty);
                    break;
                case 'milk':
                    this.add(2.50 * qty);
                    break;
                case 'bread':
                    this.add(1.00 * qty);
                    break;
            }
        }
    };

    cashRegister.scan('eggs', 2);
    cashRegister.scan('milk', 1);
    cashRegister.scan('bread', 3);



    console.log("Your bill is: " + cashRegister.total + ".");

}; // end of init

$(document).ready(init);