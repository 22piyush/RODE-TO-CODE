const arr = [45,34,69,80,29,58,]

let sum = 0

for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%2==1)
            {
                sum = sum+arr[i]
            }
    }
    console.log(`Sum: ${sum}`);