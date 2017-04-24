<a href="helloWorld-EHoT.github.io/theGrid-testTask">the Grid</a><br>
<hr>
Входные данные в формате:<br>
inputData = [<br>
{<br>
<h6>name: 'Name',</h6> //имя столбца *обязательно<br>
<h6>dataType: 'string',</h6> // 'string'/'int'/'double'/'date'/'datetime'/'time'/'bool'/'enum'/'calc' *обязательно<br>
<h6>isRequired: true,</h6> // false/true *обязательно<br>
<h6>editable: false,</h6> // false *обязательно<br>
// * обязательно для поля dataType:enum<br>
<h6>options: ['', 'Male', 'Female'],</h6> // массив с вариантами выбора, *если dataType:enum<br>
// * обязательно для поля dataType:calc<br>
<h6>calculateFrom: 'Birth Date',</h6> // <br>
<h6>calculate:     'calcAge'</h6> // название глобальной функции, которая считает значение для поля dataType:calc,<br>
                          // берет значение из calculateFrom:(имя поля с переменной для расчетов)<br>
}]; <br>         
