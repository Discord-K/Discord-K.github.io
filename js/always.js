// 先加载

document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        document.body.style.display = "block";
    } else {
        document.body.style.display = "none";
    }
};

// 注释闪动
window.onload = function (){
    const notice = document.getElementById('notice');
    let status = 1;
    const colors = ['#aaaaaa', '#888888', '#666666', '#444444', '#222222', '#444444', '#666666', '#888888']
    setInterval(function (){
        notice.style.color = colors[status];
        if(status < 8){
            status = status + 1;
        }else {
            status = 0;
        }
    },500);
}