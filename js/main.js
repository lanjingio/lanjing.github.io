(function () {
    function getColor() {
        var color = "#";
        let arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        for (let i = 0; i < 6; i++) {
            let num = Math.floor(Math.random() * 15);
            color += arr[num];
        }
        return color;
    }
    setInterval(() => {
        $('#logo').css('backgroundColor',getColor());
        $('.title').css('color',getColor());
    }, 1000);

    //加载留言
    $.ajax({
        url:'http://localhost:3000/getMsg',
        success:function (backData) {
            const resHTML = template('template',backData);
            $('.list').html(resHTML);
        }
    });
    // 写留言
    $('#submit').on('click',()=>{
        let fd = new FormData($('form')[0]);
        $.ajax({
            type:'post',
            url:'http://localhost:3000/addMsg',
            data:fd,
            processData: false,
            contentType: false,
            success:function (backData) {
                if (backData.code == 200) {
                    alert(backData.msg);
                }else {
                    alert(backData.msg);
                }
                //模态框隐藏
                $('#myModal').modal('hide');
            }
        });
    });
}());