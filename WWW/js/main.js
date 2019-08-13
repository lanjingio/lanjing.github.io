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

    // 写留言
    // $('.sayNote').on('click',()=>{
    //     e.preventDefault();
    //     $('#myModal').show();
    // });
}());