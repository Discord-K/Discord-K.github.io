// 先加载
document.onreadystatechange = function () {
    const body = document.body;
    const loading = document.getElementById('loading');
    if (document.readyState === "complete") {
        document.getElementById('progress-bar').style.width = '100%';
        document.querySelector('#loading>p').innerHTML = '100%';
        setTimeout(function (){
            loading.style.display = 'none';
            body.style.display = "block";
        }, 500)
    }
};

// 注释闪动
window.onload = function (){
    glimmer();
}

function glimmer(){
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
    },150);
}