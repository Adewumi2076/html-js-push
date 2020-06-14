$(document).ready(function(){
    $(document).on("click",".delete",function(e){
      e.preventDefault();
      $(this).parent().parent().remove();
    });
    $(document).on("click",".edit",function(e){
      e.preventDefault();
      $("#numberInput").val($(this).parent().parent().children().eq(0).text());
      $("#countryInput").val($(this).parent().parent().children().eq(1).text());
      $("#cityInput").val($(this).parent().parent().children().eq(2).text());
      $("#zipcodeInput").val($(this).parent().parent().children().eq(3).text());
      $("#actionInput").val("edit");
      $("#rownumInput").val($(this).parent().parent().data("number"));
    });
    $(document).on("submit","#inputForm", function(e){
      e.preventDefault();
      if($("#actionInput").val()=="add"){
        $("tbody").append(`
          <tr data-number="`+$("#numberInput").val()+`">
            <td>`+$("#numberInput").val()+`</td>
            <td>`+$("#countryInput").val()+`</td>
            <td>`+$("#cityInput").val()+`</td>
            <td>`+$("#zipcodepInput").val()+`</td>
            <td><a href="#" class="edit">Edit</a><a href="#" class="delete">Delete</a></td>
          </tr>
          `);
      } else if($("#actionInput").val()=="edit"){
        $("tr[data-number="+$("#rownumInput").val()+"]").children().eq(0).text($("#numberInput").val());
        $("tr[data-number="+$("#rownumInput").val()+"]").children().eq(1).text($("#countryInput").val());
        $("tr[data-number="+$("#rownumInput").val()+"]").children().eq(2).text($("#cityInput").val());
        $("tr[data-number="+$("#rownumInput").val()+"]").children().eq(3).text($("#zipcodeInput").val());
  
      }
      $("#inputForm")[0].reset();
      $("#actionInput").val("add");
  
    });
  });
  