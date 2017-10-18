// JavaScript source code
setTimeout(
    function ()
    {
        for (var i = 0; i < data.length; i++)
        {
            if (data[i] === undefined)
            {
                console.log("UNDEFINED");
            }
            else if (data[i] === null)
            {
                console.log("NULL");
            }
            else console.log("data[%d]=%d", i, data[i]);
        }
    }, 100);

/*for (var i = 0; i < 10 ; i++)
{
    setTimeout(console.log(i), 100);
}

console.log(i);???*/