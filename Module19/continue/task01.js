let num = 40;

for(let i = 1; i <= num; i++)
{
    if(i % 2 !== 0)
    {
        continue;    
    }
    
    console.log(i);
}