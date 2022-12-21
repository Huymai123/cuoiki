
function signup() {
    event.preventDefault();
    var name1=document.getElementById("name1").value;
        var num1=document.getElementById("num1").value;
        var gender=document.getElementById("nam");
        var gender1=document.getElementById("nu");
        var gender2=document.getElementById("lgbt");
        var year1=document.getElementById("year1").value;
        var gamil1=document.getElementById("gmail1").value;
        var pass1=document.getElementById("pass1").value;
        var nick=document.getElementById("nickname").value;

        var checkbox=document.getElementById('on');
        var checkbox1=false;
        var gende='';
        
        if(gender.checked){
            gende="Nam";
        }
        else if(gender1.checked){
            gende="Nữ";
        }
        else if(gender2.checked){
            gende="LGBT";
        }
        if(name1==""){
            alert("bạn chưa ghi tên đăng nhập");
            return;
        }
        else{
            var name=true;
        }
        if(nick==""){
            alert("bạn chưa ghi tên hiện thị ");
            return;
        }
        else{
            var nick1=true;
        }
        if(num1==""){
            alert("bạn chưa ghi số điện thoại");
            return;
        }
        else{
            var num=true;
        }
        if(year1==""){
            alert("bạn chưa nhập sinh");
            return;
        }
        else{
            var year=true;
        }
        if(gamil1==""){
            alert("bạn chưa ghi email");
            return;
        }
        else{
            var gmail=true;
        }
        if(pass1==""){
            alert("bạn chưa ghi mật khẩu");
            return;
        }
        else{
            var pass=true;
        }
        if(checkbox.checked){
        checkbox1=true;}
        else{alert("Bạn chưa tích điều kiện dịch vụ");
        checkbox1=false;
        return;}
        var user = {
            name1:name1,
            nick:nick,
            num1:num1,
            gender:gende,
            year1:year1,
            gamil1:gamil1,
            pass1:pass1,
        }
        confirm('ban co chac muon dang ky khong\n'+name1+"\n"+num1+"\n"+gender+"\n"+year1+"\n"+gamil1+"\n"+pass1+"\n"+checkbox1);  
    if(name==true&&nick1==true&&num==true&&year==true&&gmail==true&&pass==true&&checkbox1==true){
    var json = JSON.stringify(user);
    localStorage.setItem(name1, json);
    alert("dang ky thanh cong");
    }
    else{
        alert("ko thành cong");
    }
  }
  function login() {
    event.preventDefault();
    var name1 = document.getElementById("name1").value;
    var pass1 = document.getElementById("pass1").value;
    var user = localStorage.getItem(name1);
    var data = JSON.parse(user);
    
    if (!user) {
      alert("vui long kiem tra lai ten dang nhap hoac mat khau");
    } else if (
      name1 == data.name1 &&
      pass1 == data.pass1
    ) {
      alert("dang nhap thanh cong");
      sessionStorage.setItem("user", data.name1);

    window.location.href = "../index.html";
    
       
    } else {
      alert("dang nhap that bai");
    }
    
  }
  function pass(){
        event.preventDefault();
        var name1 = document.getElementById("name1").value;
        var num1 = document.getElementById("num1").value;
        var user = localStorage.getItem(name1);
        var data = JSON.parse(user);
        var pass='';
        if (!user) {
          alert("vui long kiem tra lai ten dang nhap hoac mat khau");
        } else if (
          name1 == data.name1 &&
          num1 == data.num1
        ) {
        pass=data.pass1;
          alert("mật khẩu của bạn là: "+ pass);
        } else {
          alert("Tên tài khoản hoặc sđt sai");
        }
  }