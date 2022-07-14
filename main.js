
$(function(){
  var columns=[
    {
      field: 'state',
      checkbox: "true",
      visible: true
    },
    {
      field: "order_id",
      title: 'Order ID',
      switchable: "false",
      sortable: "true"

    }, {
      field: "domain_name",
      title: 'Domain Name',
      switchable: "false",
      sortable: "true"
    }, {
      field: "ip_address",
      title: 'IP Address',
      sortable: "true"
    }, {
      field: "product_name",
      title: 'Product Name',
      sortable: "true"
    }, {
      field: "company_name",
      title: 'Company name',
      sortable: "true"
    }, {
      field: "action",
      title: 'Options',
      formatter: "dataformatter"
    },
  ]
  builduptable(columns);

  $(".checkbox-menu").on("change", "input[type='checkbox']", function() {
    $(this).closest("li").toggleClass("active", this.checked);
 });

 
 $(document).on('click', '.allow-focus', function (e) {
   e.stopPropagation();
 });
 
})
function builduptable(columns){
  $('#table').bootstrapTable('destroy').bootstrapTable({
columns:columns
    
  });
  
}
var ar=0;
function autorefresh(value){
  
  if(value.checked==true){
   
    ar=setInterval(refresh, 5000);
  }
else if(value.checked==false){
clearInterval(ar);
console.log("Timeout cleared")
}


}
  function addsearch(value){
  
    if(value.checked==true){
     
  
    }}
    function addexport(value){
  
      if(value.checked==true){
       
        
      }}


function refresh(){
  console.log("refreshed");
  $('#table').bootstrapTable('refresh',{silent:false});
}

function dataformatter(index,row){
  var html=[]
  $.each(row,function(key,value){
   if(key=='order_id') html.push('<div class="dropdown">  <button class="btn  dropdown-toggle ml-2" type="button" data-toggle="dropdown" style="border: 0; background-color: rgba(0,0,0,0);"><i class="fa fa-ellipsis-h" aria-hidden="true"></i><span class="caret"></span></button><ul id="options" class="dropdown-menu checkbox-menu allow-focus" aria-labelledby="dropdownMenuButton"><li class="dropdown-item"><label><input type="radio"/>&nbsp;Circuit Design</label></li><hr><li class="dropdown-item"><label><input type="radio"/>&nbsp;Console</label></li><hr><li class="dropdown-item"><label><input type="radio"/>&nbsp;Delete</label></li></ul></div>')
  })
  return html.join('')
}




function exp(val) {
  var $table = $('#table');
  
 
  

    console.log(val);
    $table.tableExport({
      type: val,
      escape: false,
      exportDataType: 'all',
      refreshOptions: { exportDataType: 'all'}
    });

}


