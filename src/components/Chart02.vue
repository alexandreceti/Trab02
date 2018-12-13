<script>
import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['O Poder das Conexões', 'O retorno do cangaceiro JavaScript', 'Kotlin com Android', 'Coleção Node.js', 'O universo da programação'],
      datasets: [
        {
          backgroundColor: [
            '#41B883',
            '#E46651',
            '#00D8FF',
            '#DD1B16',
            '#726291'
          ],
          data: [40, 20, 12, 39, 10]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false, legend: { display: true , position: "bottom" }})
  }
}
</script>

<style>

</style>
