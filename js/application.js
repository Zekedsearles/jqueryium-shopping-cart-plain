$(document).ready(function() {
    $('.remove').on('click', function() {
        $(this).closest("tr").remove();
        calculateTotal()
    })
    
})
function calculateTotal() {
    var overAllTotal = 0;

    $("tbody tr").each(function() {
        var price = parseFloat($(this).find(".price input").val())
        var quantity = parseFloat($(this).find('.quantity input').val())
        price = isNaN(price) ? 0 : price;
        quantity = isNaN(quantity) ? 0 : quantity;
        var total = price * quantity;
        $(this).find('.total').text(total.toFixed(2))
        overAllTotal += total;
        $('#overAllTotal').text(overAllTotal.toFixed(2));
        
    })
}
$(document).ready(function() {
    //remove button
    $(document).on('click', '.btn.remove', function() {
      $(this).closest('tr').remove();
    })
    //add function
    $('.add').on('click', function(event) {
        event.preventDefault()
        var itemname = $('#addToList input[name="item"]').eq(0).val();
        var price = $('#addToList input[name="item"]').eq(1).val();
        var quantity = $('#addToList input[name="item"]').eq(2).val();

        $('tbody').append('<tr>' + 
          '<td class="item">' + itemname + '</td>' + 
          '<td class="price mx-1"><input type="number" value="' + price + '" /></td>' + 
          '<td class="quantity"><input type="number" value="' + quantity + '" /></td>' + 
          '<td class="total"></td>' + 
          '<td><button class="btn btn-light btn-sm remove">remove</button></td>' + 
          '</tr>');
        
        calculateTotal()
    })
    setInterval(function() {
        calculateTotal()
    }, 5000);
    
    calculateTotal()

})
