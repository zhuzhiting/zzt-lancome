$(".signin-box-main-btn span").on("click",function(){
    console.log($('#lc-username').val());
    console.log($('#lc-password').val());
    $.ajax({
        url:'http://localhost/LC/lancome/interface/register.php',
        type:'post',
        data:{username:$('#lc-username').val(),password:$('#lc-password').val(),bool:1},
        success:function(data){
            
            console.log(data)
            if(data==1){
                alert("登录成功!");
                　window.location.href="http://localhost/LC/lancome/app/index.html";
            }else{
                alert("抱歉，登录失败！")
                window.location.href="http://localhost/LC/lancome/app/register.html";
            }
        },
        complete:function(){
            console.log('ajax完成了111')
        },
        error:function(XMLHttpRequest, textStatus){
            console.log(textStatus)
            console.log('ajax发生错误了')
        }
    })
    var url='http://localhost/LC/lancome/interface/register.php'
    var msg="username="+$('#lc-username').val()+"&password="+$('#lc-password').val()+"&bool=0";
    
})