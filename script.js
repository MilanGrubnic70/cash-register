var init = function() {

    var cashRegister = {
        total: 0,
        add: function(itemCost) {
            this.total += itemCost
        },
        scan: function(item) {
            switch (item) {
                case 'eggs':
                    this.add(5.00);
                    break;
                case 'milk':
                    this.add(2.50);
                    break;
                case 'bread':
                    this.add(1.00);
                    break;
            }
        }
    };

    cashRegister.scan('eggs');
    cashRegister.scan('milk');
    cashRegister.scan('bread');



    console.log("Your bill is: " + cashRegister.total + ".");

}; // end of init

$(document).ready(init);