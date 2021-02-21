/* 下面是来自MDN官方对indexOf的解释：
indexOf 使用strict equality (无论是 ===, 还是 triple-equals操作符都基于同样的方法)
进行判断 searchElement与数组中包含的元素之间的关系。
自己的补充理解：
那也就是说当用indexOf判断数组中是否存在某个对象的时候，其实是比较这两个对象的指针，所以下面的第一个clg是0，第二个clg是-1
而深拷贝之后的数组newArr，因为该数组的指针已经和原数组指针不一样了，所以indexOf以后都是-1
*/


const arr1 = []
const arr2 = [{
    name: 'zhangsan'
}]

const item = {
    name: 'zhangsan'
}

const item2 = {
    name: 'zhangsan'
}

arr1.push(item)

const newArr1 = JSON.parse(JSON.stringify(arr1))
const newArr2 = JSON.parse(JSON.stringify(arr2))

console.log(arr1.indexOf(item)); //0
console.log(arr2.indexOf(item)); //-1
console.log(newArr1.indexOf(item)); //-1
console.log(newArr2.indexOf(item)); //-1
console.log(item === item2); //false