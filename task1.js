const dataArray = [
    {
        name: "salman",
        languages: "javascript,python",
        libs: ["reactjs", "react-native", "nodejs", "flask"],
    },
    {
        name: "faisal",
        languages: "javascript,python",
        libs: ["reactjs", "react-native", "nodejs", "flask"],
    },
    {
        name: "adnan",
        languages: "php,python",
        libs: ["laravel", "nodejs", "django"],
    },
    {
        name: "aazam",
        languages: "java,python",
        libs: ["spring", "springboot", "java"],
    },
];

let outputNamesArray = []
dataArray.forEach((items) => outputNamesArray.push(items.name))

let outputLibsArray = []
dataArray.filter((itm) => {

    if (itm.name === "adnan" || itm.name === "aazam") {
        itm.libs.forEach((i) => {
            outputLibsArray.push(i)
        })
    }

})

console.log('outputNamesArray:', outputNamesArray)
console.log('outputLibsArray:', outputLibsArray)
