import inquirer from "inquirer";

const asnwer:{
    Sentence: string
} = await inquirer.prompt([
    {
        type: "input",
        name: "Sentence",
        message: "Enter your sentence to find the word count"
    }
])

const words = asnwer.Sentence.trim().split(" ")
console.log(`Your sentence word count is ${words.length}`)