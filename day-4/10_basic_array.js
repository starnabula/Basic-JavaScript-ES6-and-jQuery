
const numbers = [10, 20, 30, 40, ]
console.log(numbers.join());
console.log(numbers.join(','));
console.log(numbers.join('-'));
console.log(numbers.join('+'));
console.log(numbers.join(''));


console.log(numbers[0] + numbers[1] + numbers[2] + numbers[3])



let result = 0 
for(let i = 0; i < numbers.length; i++){
    result += numbers[i]
}
console.log(result);


const result_data = numbers.reduce((sum, number) => {
    return sum + number;
},0)

console.log(result_data);


const myarr1 = [4, 5, 6]
const myarr2 = [7, 8, 9]

//const myresult = myarr1 + myarr2
const myresult = myarr1.concat(myarr2)
console.log(myresult)
console.log(myarr1)
console.log(myarr2)


const mutate = ['red', 'green']
const count = mutate.push('blue')
console.log(mutate)
console.log(count)


const pop = mutate.pop()
console.log(mutate);
console.log(pop)


const shift = mutate.shift()
console.log(mutate);
console.log(shift)


const unshift = mutate.unshift('red')
mutate.unshift('yellow')
console.log(mutate);
console.log(unshift);

const mutate_arr = ['red', 'green', '0','1','blue']

//const splicad = mutate_arr.splice(0)
//const splicad = mutate_arr.splice(1)
//const splicad = mutate_arr.splice(1,1)
//const splicad = mutate_arr.splice(2, 2)
const splicad = mutate_arr.splice(2,2, 'white','pink')


console.log(mutate_arr);

console.log("-----------------")

const mutate_arr1 = ['red', 'green', '0','1','blue'  ]
//const sliced = mutate_arr1.slice(1)
//const sliced = mutate_arr1.slice(1,2)
const sliced = mutate_arr1.slice()
console.log(sliced);



const fruits = ['apple', 'banana', 'orange']

/*const newFruit = [
    ...fruits.slice(0,1),
    'strawberry',
    ...fruits.slice(1)
]

console.log(newFruit);
console.log(fruits);*/

const newFruit = [
    ...fruits.slice(0,1),
    ...fruits.slice(2)
]

console.log(newFruit);


const num_arr = ['one', 'two', 'three']
num_arr.forEach(result => {
   
    console.log("--------------")
})

for(const v of num_arr) {
    if(v === 'two') {
        continue
    }
    console.log(v);
}



const num_arrs =[1, 4, 8,10,8,11,12]
//const insex = num_arrs.indexOf(10)
const index = num_arrs.indexOf(8)
console.log(index);




const found = num_arrs.findIndex(num => num % 4 == 0)
console.log(found);