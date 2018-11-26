// Create a Module
var app = angular.module('InvoiceApp',[]);

// Create a controller
app.controller('InvoiceAppCtrl',function($scope) {
    $scope.invoiceEditMode = true;
    $scope.invoice = {
        customer_data : {
            name : 'Mr. Rajan Jain',
            company : 'Jain Industries Inc.',
            address1 : 'Plot No.112',
            address2 : 'Saket Nagar , Delhi',
            pincode : 5000100
        },
        company_data : {
            name : 'HAWAA Techno Labs',
            company : 'HAWAA Pvt.Ltd.',
            address1 : 'Plot No.1471, Road No. 12',
            address2 : 'Jubilee Hills , Hyderabad',
            pincode : 5000124
        },
        items : [
            {
                description : '',
                quantity : '',
                cost : ''
            }
        ],
        gst : 13
    };
    $scope.addInvoiceItem = function() {
        var invoiceItem = {
            description : '',
            quantity : '',
            cost : ''
        };
        $scope.invoice.items.push(invoiceItem);
    };
    $scope.deleteInvoiceItem = function(index) {
        $scope.invoice.items.splice(index,1);
    };
    $scope.subTotal = function() {
        var tempTotal = 0;
        $scope.invoice.items.forEach(function (item) {
            tempTotal += (item.quantity * item.cost);
        });
        return tempTotal;
    };
    $scope.addGST = function() {
        return $scope.subTotal() * $scope.invoice.gst / 100;
    };
    $scope.grandTotal = function() {
        return $scope.subTotal() + $scope.addGST();
    };
    $scope.ONInvoiceEditMode = function() {
        $scope.invoiceEditMode = true;
    };
    $scope.OFFInvoiceEditMode = function() {
        $scope.invoiceEditMode = false;
    };
    $scope.printDoc = function() {
        window.print();
    };
});
