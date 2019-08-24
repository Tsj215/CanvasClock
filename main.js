window.onload = function () {
    var canvas = document.getElementById("myCanvas02");
    var ctx = canvas.getContext("2d");

    function drawClock(color, size, x, y, r) {
        ctx.strokeStyle = color;
        ctx.lineWidth = size;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();


    }

    function drawHour(color, size) {
        ctx.strokeStyle = color;
        ctx.lineWidth = size;
        for (var i = 0; i < 12; i++) {
            ctx.save();
            ctx.beginPath();
            ctx.translate(350, 350);
            ctx.rotate(i * 2 * Math.PI / 12);
            ctx.moveTo(0, -250);
            ctx.lineTo(0, -225);
            ctx.stroke();
            ctx.closePath();
            ctx.restore();
        }
    }

    function drawMin(color, size) {
        ctx.strokeStyle = color;
        ctx.lineWidth = size;
        for (var i = 0; i < 60; i++) {
            ctx.save();
            ctx.beginPath();
            ctx.translate(350, 350);
            ctx.rotate(i * 2 * Math.PI / 60);
            ctx.moveTo(0, -245);
            ctx.lineTo(0, -232);
            ctx.stroke();
            ctx.closePath();
            ctx.restore()
        }
    }

    function darwNum() {
        ctx.font = "30px Microsoft";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "white";
        var allNum = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];

        for (var i = 0; i < 12; i++) {
            ctx.save();
            ctx.translate(350, 350);
            var deg = 2 * Math.PI / 12 * i;
            var x = Math.cos(deg) * 200;
            var y = Math.sin(deg) * 200;
            ctx.fillText(allNum[i], x, y);
            ctx.restore()
        }
    }


    setInterval(function () {
        var date = new Date();
        var sec = date.getSeconds();
        var min = date.getMinutes();
        var hour = date.getHours();

        ctx.fillStyle = "#222";
        ctx.fillRect(0, 0, 700, 700);
        ctx.beginPath();
        ctx.save();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "red";
        ctx.translate(350, 350);
        ctx.rotate(sec * 2 * Math.PI / 60);
        ctx.moveTo(0, -245);
        ctx.lineTo(0, 0);
        ctx.stroke();
        ctx.restore();
        ctx.closePath();

        ctx.beginPath();
        ctx.save();
        ctx.lineWidth = 3;
        ctx.strokeStyle = "#fff";
        ctx.translate(350, 350);
        ctx.rotate(min * 2 * Math.PI / 60);
        ctx.moveTo(0, -225);
        ctx.lineTo(0, 0);
        ctx.stroke();
        ctx.restore();
        ctx.closePath();

        ctx.beginPath();
        ctx.save();
        ctx.lineWidth = 6;
        ctx.strokeStyle = "#fff";
        ctx.translate(350, 350);
        ctx.rotate(hour * 2 * Math.PI / 12);
        ctx.moveTo(0, -150);
        ctx.lineTo(0, 0);
        ctx.stroke();
        ctx.restore();
        ctx.closePath();

        drawClock("#fff", 8, 350, 350, 250);
        drawClock("#fff", 20, 350, 350, 10);
        drawMin("#fff", 3);
        drawHour("#fff", 8);
        darwNum()

    }, 30)
};