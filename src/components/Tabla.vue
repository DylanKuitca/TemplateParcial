<template>

  <section class="src-components-tabla">
    <div class="container-fluid mt-3">
      <div class="jumbotron">
        <h2>Tabla</h2>
        <hr>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Número de Pregunta</th>
              <th scope="col">Respuesta</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td>¿Qué es un componente en Vue.js?</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>¿Que función cumple el modificador number aplicado a v-model?</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>vue create se utiliza para:</td> 
          </tr>
        </tbody>
      </table>
      </div>

    </div>

  </section>

</template>

<script>

  export default  {
    name: 'src-components-tabla',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-tabla {

  }
  .jumbotron{
    background-color: teal
  }
  .hr {
    color: white;
  }
</style>
