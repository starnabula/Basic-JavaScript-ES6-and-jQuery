

const array = [1, 2, 3]



/*for(let i = 0; i < array.length; i++) {
    array[i] = array[i] * 2
}


console.log(array);*/

const result =[]
    /*for(let i = 0; i < array.length; i++) {
        const  a = array[i] * 2
        result.push(a)

}*/

array.forEach(e => {
    const  a = e * 2
    result.push(a)
});

 console.log(result);
 console.log(array);




 //2_arrow_function.jsconst result_map = array.map(function(result => result * 2)

const multiplyBytwo = result => result * 2 
const multiplyByten = result => result * 10 
console.log(array.map(multiplyBytwo).map(multiplyByten));
//console.log(result_map);
console.log(array);

const pets = [
    {name:'Bebo'},
    {name:'mano'}
]

console.log("------------");

const result_data = pets.map(e => e.name)
console.log(result_data);


const fruits = ['banana', 'apple', 'orange']
/*[
    'Day 1, eat banana',
    'Day 2, eat apple',
    'Day 3, eat orange'
]*/

const result_fruit = fruits.map((e, i) => {
    return `Day ${i + 1}, eat ${e} ของเดิม ${e}`
})

console.log(result_fruit)