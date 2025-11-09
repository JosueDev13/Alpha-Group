<template>
    <v-container :fluid="true">
        <h1 class="text-green-darken-4">Formulario</h1>
        <v-row>
<v-col>
<!-- Caja de texto -->
<v-text-field
label="Nombre"
color="green"
type="text"
counter
clearable
maxlength="20"
prepend-inner-icon="mdi-account"></v-text-field>
</v-col>
<v-col>
<!-- Lista de opciones (select html) -->
<v-select
label="País"
color="green"
clearable
:items="paises"
item-title="pais"
item-value="id"
v-model="paisSeleccionado"
></v-select>
</v-col>
</v-row>
<v-row>
<v-col>
<!-- Radio botones -->
<v-radio-group label="Departamento" v-model="departamento">
<v-radio color="green" label="San Salvador" value="San Salvador"></v-radio>
<v-radio color="green" label="Santa Ana" value="Santa Ana"></v-radio>
<v-radio color="green" label="San Miguel" value="San Miguel"></v-radio>
</v-radio-group>
</v-col>
<v-col>
<!-- Checkboxes -->
<v-checkbox color="green" label="Azul" value="Azul" v-model="colores"></v-checkbox>
<v-checkbox color="green" label="Negro" value="Negro" v-model="colores"></v-checkbox>
<v-checkbox color="green" label="Morado" value="Morado" v-model="colores"></v-checkbox>
</v-col>
</v-row>
<h3>Datos</h3>
Nombre:
<p>{{ nombre }} </p><hr>
País:
<p>{{paisSeleccionado}}</p><hr>
Departamento:
<p>{{departamento}}</p><hr>
Colores:
<p v-for="(color, i) in colores" :key="i">{{ color }}</p>
<!-- Botones -->
<v-row>
<v-col>
<v-btn color="red">Botón 1</v-btn>
</v-col>
<v-col>
<v-btn rounded="xl" color="green">Botón 1</v-btn>
</v-col>
<v-col>
<v-btn color="indigo" variant="outlined">Botón 1</v-btn>
</v-col>
<v-col>
<v-btn prepend-icon="mdi-check" color="blue">Guardar</v-btn>
</v-col>
<v-col>
<v-btn block color="purple" append-icon="mdi-cancel">Cancelar</v-btn>
</v-col>
</v-row>
    </v-container>
</template>
<script>
export default{
    name: 'BlogView',
    data(){
        return{
            paises: [
            { id: 1, pais: 'El Salvador'},
            { id: 2, pais: 'Francia' },
            { id: 3, pais: 'España' },
],
        paisSeleccionado : 1,
        colores: ['Azul'],
        nombre: 'Josuè Crespín',
        departamento: 'San Salvador'
        }
    }
}
</script>