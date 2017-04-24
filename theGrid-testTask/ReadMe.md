<a href="helloWorld-EHoT.github.io/theGrid-testTask">the Grid</a><br>
<hr>
Входные данные в формате:<br>
inputData = [<br>
{<br>
name: 'Name', //имя столбца *обязательно<br>
dataType: 'string', // 'string'/'int'/'double'/'date'/'datetime'/'time'/'bool'/'enum'/'calc' *обязательно<br>
isRequired: true, // false/true *обязательно<br>
editable: false, // false *обязательно<br>
// * обязательно для поля dataType:enum<br>
options: ['', 'Male', 'Female'], // массив с вариантами выбора, *если dataType:enum<br>
// * обязательно для поля dataType:calc<br>
calculateFrom: 'Birth Date', // <br>
calculate:     'calcAge', // название глобальной функции, которая считает значение для поля dataType:calc,<br>
                          // берет значение из calculateFrom:(имя поля с переменной для расчетов)<br>
}]; <br>         
