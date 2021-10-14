function evaluatePassword()
{
    correct_count=0;
    var user=document.getElementById('us').value;
    var pass=document.getElementById('pw').value;
    if(pass==user)
    {
        return true;
    }
    else{
        return false;
    }
}
function a1check()
{
    var choosen1=document.getElementById('q1o').value;
    var correct1=q2o3;
    if(choosen1==correct1)
    {
        return true;
        correct_count=correct_count+1;
    }
    else
    {
        return false;
    }
}
function a2check()
{
    var choosen2=document.getElementById('q2o').value;
    var correct2=q2o4;
    if(choosen2==correct2)
    {
        return true;
        correct_count=correct_count+1;
    }
    else
    {
        return false;
    }
}
function a3check()
{
    var choosen3=document.getElementById('q3o').value;
    var correct3=q3o3;
    if(choosen3==correct3)
    {
        return true;
        correct_count=correct_count+1;
    }
    else
    {
        return false;
    }
}
function a4check()
{
    var choosen4=document.getElementById('q4o').value;
    var correct4=q4o1;
    if(choosen4==correct4)
    {
        return true;
        correct_count=correct_count+1;
    }
    else
    {
        return false;
    }
}
function a5check()
{
    var choosen5=document.getElementById('q5o').value;
    var correct5=q5o3;
    if(choosen5==correct5)
    {
        return true;
        correct_count=correct_count+1;
    }
    else
    {
        return false;
    }
}
function result_print()
{
    return correct_count;
    //document.write("total score="+correct_count);
}