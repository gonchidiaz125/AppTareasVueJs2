new Vue({
    el: '#app',
    data: {
        tarea_txt: '',
        prioridad: '',
        lista_tareas: [
            {'id':0, 'tarea': 'Ejemplo de tarea 1', 'prioridad': 'N'},
            {'id':1, 'tarea': 'Ejemplo de tarea 2', 'prioridad': 'I'},
            {'id':2, 'tarea': 'Ejemplo de tarea 3', 'prioridad': 'M'},
        ],
        lista_tareas_original: [
            {'id':0, 'tarea': 'Ejemplo de tarea 1', 'prioridad': 'N'},
            {'id':1, 'tarea': 'Ejemplo de tarea 2', 'prioridad': 'I'},
            {'id':2, 'tarea': 'Ejemplo de tarea 3', 'prioridad': 'M'},
        ],
        search_text: '',
        error_msg: ''
    },
    watch:{
        search_text: function(val){
            this.BuscarTareas(val);
        }
    },
    methods: {
        AgregarTareas: function() {
            if (this.tarea_txt.trim() === '' || this.prioridad.trim() === '') {
                this.error_msg = 'Por favor completa todos los campos.';
                return;
            }
            var tarea = {
                'id':this.lista_tareas.length,
                'tarea':this.tarea_txt,
                'prioridad':this.prioridad,
            };
            this.lista_tareas.push(tarea);
            this.lista_tareas_original.push(tarea); 
            this.tarea_txt = ''; 
            this.prioridad = '';
            this.error_msg = '';
        },
        BuscarTareas: function(valor) {
            if (valor.trim() === '') {
                this.lista_tareas = [...this.lista_tareas_original];
            } else {
                this.lista_tareas = this.lista_tareas_original.filter(
                    (value) => {
                        return value.tarea.toLowerCase().indexOf(valor.toLowerCase()) >= 0;
                    }
                )
            }
        },
        EliminarTarea: function(tarea_id) {
           let index = this.lista_tareas.findIndex(e => e.id === tarea_id); 
           this.lista_tareas.splice(index, 1);
           this.lista_tareas_original.splice(index, 1); 
        }
    }
});