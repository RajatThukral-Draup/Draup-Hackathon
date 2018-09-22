const input = document.querySelector('input[id = "csv"]');
//const input_url = document.querySelector('input[id = "url"])

input.addEventListener('change', function(e) {
//    console.log(input.files)
    const reader = new FileReader()
    reader.onload = function() {
        const lines = reader.result.split('\n').map(function (line){
            return line.split(',')
        })
//        console.log(lines)
    var table = document.getElementById('import')

//    var fff= '<thead><tr></tr></thead>';
    var heder ='';
    var body =[];
        lines.forEach(function(lin,x){
            body[x] ='';
            lin.forEach(function(l,y){
                 if(x==0){

                    heder += '<th>'+l+'</th>';
                 }
                 else{
                    body[x] += '<td>'+l+'</td>';
                 }
            })
             body[x] = "<tr>"+body[x]+"</tr>";
        })
        table.innerHTML = "<table border='1'<thead><tr>"+heder+"</tr></thead><tbody>"+body.join()+"</tbody></table>"
    }
    reader.readAsText(input.files[0])
},false)


function urlOpener(){
    var url = document.getElementById('url').value;
    console.log(document.getElementById('import'))

    document.getElementById('import').innerHTML = "<iframe height='800' width='600' src='https://www.w3schools.com'></iframe>";
}

function getSelectionText() {
    var signal = document.getElementsByClassName("btn-danger").length;
    if (signal != 0){
        document.getElementById("modal").classList.remove('btn-danger');
        document.getElementById("modal").classList.add('btn-success');
    }

    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    document.getElementById('form1').setAttribute('value',text)

    $(".close").on('click',function(){
     $("#modal").removeClass('btn-success');
     $("#modal").addClass('btn-danger');
     $("#modal").removeClass('active');
     $("#modal").addClass('disabled');
     $("#modal").html('Go! Annotate');
})
$(".save").on('click',function(){
      var self = $(this).html('Saving your records to db <img src="103.gif">');
      setTimeout(function() {
         self.html('Save');
         }, 5000);

     var tag = $("#form2").val();
     console.log(tag);
     $("#tag-item").append("<li class='list-group-item'>"+tag+"</li>");

     $("#modal").removeClass('btn-success');
     $("#modal").addClass('btn-danger');
     $("#modal").removeClass('active');
     $("#modal").addClass('disabled');
     $("#modal").html('Go! Annotate');
    return false;
})

    return text;

}

$(function(){
    $(document.getElementById('import')).bind('mouseup', function(e){
        var selection;
        if (window.getSelection) {
          selection = window.getSelection();
        } else if (document.selection) {
          selection = document.selection.createRange();
        }
        selection.toString() !== '' &&    document.getElementById("modal").classList.remove('btn-danger') ;
        document.getElementById("modal").classList.add('btn-success');
        document.getElementById("modal").classList.remove('disabled');
        document.getElementById("modal").classList.add('active');
        $("#modal").html('Save Highlight');
    });
});

$("#email-submit").on('click',function(){
    var getEmail = $("#email").val();
    console.log(getEmail);
    $("#my-email").html(getEmail);
})