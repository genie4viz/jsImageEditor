$('#logo-chooser').on("change", e => {
    var file = e.target.files[0];

    var reader = new FileReader();
    reader.onload = function (evt) {
        $("#img-logo").attr("src", evt.target.result);
        $('#img-logo').rcrop({
            minSize: [100, 80],
            preserveAspectRatio: true,
        
            preview: {
                display: true,
                size: [100, 80],
            }
        });
    };
    reader.readAsDataURL(file);
});

