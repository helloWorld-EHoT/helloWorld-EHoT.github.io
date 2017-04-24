<a href="helloWorld-EHoT.github.io/theGrid-testTask">the Grid</a>
Входные данные в формате:
<code>
inputData = [
{
name: 'Name', //имя столбца *обязательно
dataType: 'string', // 'string'/'int'/'double'/'date'/'datetime'/'time'/'bool'/'enum'/'calc' *обязательно
isRequired: true, // false/true *обязательно
editable: false, // false *обязательно
// * обязательно для поля dataType:enum
options: ['', 'Male', 'Female'], // массив с вариантами выбора, *если dataType:enum
// * обязательно для поля dataType:calc
calculateFrom: 'Birth Date', // 
calculate:     'calcAge', // название глобальной функции, которая считает значение для поля dataType:calc,
                          // берет значение из calculateFrom:(имя поля с переменной для расчетов)
}]; 
</code>           
