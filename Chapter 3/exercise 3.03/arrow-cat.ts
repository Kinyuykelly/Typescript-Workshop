import { words } from "lodash";

export const arrayToAnd= (words: string[]): string => {
     if(words.length < 1){
        return "";
     }
     if (words.length === 1){
        return `${words[0]}`; 
     }
let segment = "";
for (let i= 0; i < words.length; i++){
    if (i === words.length - 1){
        segment += ` and ${words[i]}`;
    }
    else{
        segment += `${words[i]},`;
    }
}    
 return segment;  
};
export const capitalize = (sentence: string): string => {
    return `${sentence.charAt(0).toUpperCase()}${sentence
        .slice(1)
        .toLowerCase()}`;
};

export const sentence = (
    subject: string,
    verb: string,
    ...objects: string[]
    ): string => {
        return `${subject}  ${verb}  ${arrayToAnd(objects)}.`;
    };

// console.log(sentence("the cat", "ate", "apples", "cheese", "pancakes"));
// console.log(sentence("the cat", "slept", "all day"));
// console.log(sentence("the cat", "sneezed"));