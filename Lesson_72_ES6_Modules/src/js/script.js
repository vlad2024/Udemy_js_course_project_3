//import{one as first} from "./main";с помощью такого стандарта ES6 мы можем експортировать и импортировать файлы
// когда мы что-то импортируем в наш проект, мы можем сразу же его переимонавать one as first значение one
// переиминовали в first
import * as data from "./main.js"; // таким образом мы ипортируем не отдельные сущьности, а все вместе

console.log(`${data.one} and ${data.two}`);
data.sayHi();