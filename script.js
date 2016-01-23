var init = function() {

    var cashRegister = {
        total: 0,
        add: function(itemCost) {
            this.total += itemCost;
            lastTransItem = itemCost;
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
            } // end of switch
        }, // end of scan

        void: function() {
                this.total -= lastTransItem;
            } // void
            
    }; // end of register

    cashRegister.scan('eggs', 2);
    cashRegister.scan('milk', 1);
    cashRegister.scan('bread', 3);

    cashRegister.void();



    console.log("Your bill is: " + cashRegister.total + ".");

}; // end of init

$(document).ready(init);