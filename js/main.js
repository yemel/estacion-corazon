$("#message").on('change', function() {
    var tpl = $('#message').val();
    $('#contact a').each(function(index, a) {
        var old = a.href.split("&text=")[0];
        var name = $(a).data('name');
        message = tpl.replace('<<NOMBRE>>', name);
        a.href = old + '&text=' + encodeURI(message);
        console.log(a, name, message)
    })
});