const arr = [45,34,69,80,29,58,]
let largest = arr[0]

for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>largest)
            largest = arr[i]
    }
    console.log(largest);