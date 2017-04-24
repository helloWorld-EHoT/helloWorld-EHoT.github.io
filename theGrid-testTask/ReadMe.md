<a href="helloWorld-EHoT.github.io/theGrid-testTask">the Grid</a><br>
<hr>
<h2>Входные данные в формате:</h2><br>
<h4>inputData = [</h4><br>
<h4>{</h4><br>
<h4>name: 'Name',</h4> //имя столбца *обязательно<br>
<h4>dataType: 'string',</h4> // 'string'/'int'/'double'/'date'/'datetime'/'time'/'bool'/'enum'/'calc' *обязательно<br>
<h4>isRequired: true,</h4> // false/true *обязательно<br>
<h4>editable: false,</h4> // false *обязательно<br>
// * обязательно для поля dataType:enum<br>
<h4>options: ['', 'Male', 'Female'],</h4> // массив с вариантами выбора, *если dataType:enum<br>
// * обязательно для поля dataType:calc<br>
<h4>calculateFrom: 'Birth Date',</h4> // <br>
<h4>calculate:     'calcAge'</h4> // название глобальной функции, которая считает значение для поля dataType:calc,<br>
                          // берет значение из calculateFrom:(имя поля с переменной для расчетов)<br>
}]; <br>         
