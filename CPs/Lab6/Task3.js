$(document).ready(function(){
    $('#toggle-button').text('Show Image');
    $('#image-container').hide();

    $('#image-input').on('change', function(e){
        var file = e.target.files[0];
        if(file){
            var reader = new FileReader();
            reader.onload = function(e){
                $('#uploaded-image').attr('src', e.target.result);
            };
            reader.readAsDataURL(file);
        }
    });

    $('#toggle-button').on('click', function(){
        if ($('#toggle-button').text() === 'Show Image') {
            if ($('#uploaded-image').attr('src')) {
                $('#image-container').show();
                $('#toggle-button').text('Hide Image');
            } else {
                alert('Please upload an image first.');
            }
        } else {
            $('#image-container').hide();
            $('#toggle-button').text('Show Image');
        }
    });
});