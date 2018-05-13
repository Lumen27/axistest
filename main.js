$(document).ready(() => {

    // Get value of 'a'
    const aRange = (aMin, aMax) => {
        return Math.floor(Math.random() * (aMax - aMin + 1)) + aMin;
    };

    const aNum = aRange(6, 9);


    // Range for 'sum'
    const sumRange = (sumMin, sumMax) => {
        return Math.floor(Math.random() * (sumMax - sumMin + 1)) + sumMin;
    };

    const sumNum = sumRange(11, 14);


    // Get value of 'b'
    const bNum = sumNum - aNum;


    // Render numbers
    $( ".aNum" ).html(aNum);
    $( ".bNum" ).html(bNum);
    $( ".sumNum .text" ).text("?");


    // Arrow width
    $(".aImg").css('width', aNum*39);


    //Check Inputs
    $( ".aInput" ).keyup((e) => {
        const inputValueA = parseInt($(e.currentTarget).val());
        inputChanged(inputValueA, 'a');
    });

    $( ".bInput" ).hide().keyup((e) => {
        const inputValueB = parseInt($(e.currentTarget).val());
        inputChanged(inputValueB, 'b');
    });

    $(".sumInput").keyup((e) => {
        const inputValueSum = parseInt($(e.currentTarget).val());
        if (inputValueSum === sumNum) {
            $(".sumInput").hide();
            $(".sumNum .text").text(sumNum).show();
        } else {
            $(".sumInput").css('color', 'red')
        }
    });


    // Чтобы не было дублирования кода
    const inputChanged = (value, inputName) => {
        const checkNum = inputName === 'a' ? aNum : bNum;
        if (value === checkNum) {
            $("."+inputName+"Num").css('background-color', 'white');
            $("."+inputName+"Number").text(checkNum).show();
            $("."+inputName+"Input").css('color', 'black').hide();

            switch (inputName) {
                case 'a':
                    $(".secondInput").show();
                    $(".bInput").show();
                    $(".bImg").css('width', bNum*39).show();

                    break;
                case 'b':
                    $(".sumNum .text").hide();
                    $(".sumNum label").show();
            }
        } else {
            $("."+inputName+"Num").css('background-color', 'orange');
            $("."+inputName+"Input").css('color', 'red');
        }
    }
});

