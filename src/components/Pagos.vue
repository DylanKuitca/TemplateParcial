<template>

  <section class="src-components-pagos">
   <div class="container-fluid mt-3">
      <div class="jumbotron">
        <h1>Pagos</h1>
        <hr>
    
          <vue-form :state="formState" @submit.prevent="onSubmit">
            
            <validate tag="div">
              <label for="nombre">Nombre</label>
              <input 
              id="nombre"
              type="text" 
              name="nombre" 
              v-model="formData.nombre"
              v-model.trim="formData.nombre"
              class="form-control"
              required 
              />
              <field-messages name="nombre" show="$dirty">
                <div class="alert alert-success">Nombre OK!</div>
                <div slot="required" class="alert alert-danger">El nombre es requerido</div>
              </field-messages>
            </validate>

            <validate tag="div">
              <label for="dni">DNI</label>
              <input 
              id="dni"
              type="number" 
              name="dni" 
              v-model="formData.dni"
              class="form-control"
              required 
              />
              <field-messages name="dni" show="$dirty">
                <div class="alert alert-success">DNI OK!</div>
                <div slot="required" class="alert alert-danger">El DNI es requerido</div>
              </field-messages>
            </validate>

             <validate tag="div">
              <label for="montoDeuda">Monto Deuda</label>
              <input 
              id="montoDeuda"
              type="number" 
              name="montoDeuda" 
              v-model="formData.montoDeuda"
              class="form-control"
              required 
              />
              <field-messages name="montoDeuda" show="$dirty">
                <div class="alert alert-success">monto OK!</div>
                <div slot="required" class="alert alert-danger">El monto de la deuda es requerido</div>
              </field-messages>
            </validate>


             <validate tag="div">
              <label for="montoIngresado">Monto Ingresado</label>
              <input 
              id="montoIngresado"
              type="number" 
              name="montoIngresado" 
              v-model="formData.montoIngresado"
              class="form-control"
              required 
              />
              <field-messages name="montoIngresado" show="$dirty">
                <div class="alert alert-success">monto OK!</div>
                <div slot="required" class="alert alert-danger">El monto ingresado es requerido</div>
              </field-messages>
            </validate>

        
          <button @click="Pagar()" :disabled="formState.$invalid" type="submit" class="btn btn-info mt-4">Ingresar Pago</button>
          </vue-form>

          <br>
          <br>
          <h2>Tabla</h2>
            <hr>
            <table class="table">
              <thead>
                <tr>
                   <th scope="col">Index</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">DNI</th>
                  <th scope="col">Deuda Anterior</th>
                  <th scope="col">Monto Ingresado</th>
                  <th scope="col">Saldo</th>
                  <th scope="col">Fecha</th>
                </tr>
              </thead>
              <tbody>
              <tr v-for="(cliente, index) in clientes" :key="index" :style="{backgroundColor : cliente.estilo}"> 
                <td>{{ index + 1 }}</td>
                <td>{{cliente.nombre}}</td>
                <td>{{cliente.dni}}</td> 
                <td>{{cliente.montoDeuda}}</td>
                <td>{{cliente.montoIngresado}}</td>
                <td>{{cliente.deuda}}</td>
                <td>{{cliente.fecha}}</td>
              </tr>
            </tbody>
          </table>

      </div>
    </div> 
  </section>

</template>

<script>

  export default  {
    name: 'src-components-pagos',
    props: [],
    mounted () {

    },
    data () {
      return {
        formData: this.getInitialData(),
        formState: {},
        clientes: [],
      }
    },

    methods: {
        getInitialData() {
          return {
            nombre: '',
            dni: '',
            montoDeuda:'',
            montoIngresado:'',
            estilo:'',
            fecha: this.formatDate(this.getFechaActual())
          }
        },

        formatDate(date) {
          const yyyy = date.getFullYear();
          let mm = date.getMonth() + 1; // Months start at 0!
          let dd = date.getDate();
          if (dd < 10) dd = '0' + dd;
          if (mm < 10) mm = '0' + mm;
          const today = dd + '/' + mm + '/' + yyyy;

          return today
        },

        getFechaActual() {
          return new Date()
        },

        Pagar() {
          this.formData.deuda = this.formData.montoIngresado - this.formData.montoDeuda 
          this.formData.estilo = this.getEstilo()
          this.clientes.push(this.formData)
          this.formData = this.getInitialData()
          this.formState._reset()
        },

        getEstilo() {
        let estilo = '#28B463'
        if (this.formData.deuda > 0) {
          estilo = '#2E86C1'
        } if (this.formData.deuda < 0) {
           estilo = '#E74C3C'
        }
          return estilo
        },


    },

    computed: {
    }
  
  }

</script>

<style scoped lang="css">
  .src-components-pagos {

  }
  .jumbotron {
    background-color: grey;
  }

  

</style>
