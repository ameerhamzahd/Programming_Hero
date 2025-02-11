let flag = 0;

for(let i = 1; i <= 100; i++)
{
    if(i !== 1)
    {
        for(let j = 1; j <= i; j++)
        {
            if(i === (j * j))
            {
                flag = 1;
                break;
            }
        }
    }

    console.log(i);

    if(flag)
    {
        break;
    }
}