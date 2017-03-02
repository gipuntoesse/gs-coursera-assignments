/**
 * Created by GiulioS on 01/03/2017.
 */
function test_jQ()
{

$('li#three').html(function()
{
    return '<b>'+$(this).text()+'</b>';
});

}
