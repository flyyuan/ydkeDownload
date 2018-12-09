var line = document.getElementById("myVideo_html5_api");
// console.log(line)
if (line !== null) {
    var css = `
    "
    width: 150px;
    height: 30px;
    color: #fff;
    text-align: center;
    display: block;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    background: #5DBF62;
    text-decoration: none;
    line-height: 30px;
    "
    `
    var tag = `<a style=${css} href = ${line.src} download>本课时视频下载</a>`; var divObj = document.createElement("div");
    divObj.innerHTML = tag;
    var first = document.body.firstChild;
    document.body.insertBefore(divObj, first);
}