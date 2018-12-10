<template>
  <div id="login" class="container">
    
    <div class="columns is-centered">
      <div class="column is-two-fifths">
        <article class="card is-rounded">

        <div class="card-content">
          <div class="content">
            <h1 class="title has-text-centered"><img src="https://via.placeholder.com/200x200" alt="logo" width="200"></h1>
            
            <b-field label="Usuário">
              <b-input v-model="user.login"></b-input>
            </b-field>

            <b-field label="Senha">
              <b-input type="password"
                  password-reveal v-model="user.password">
              </b-input>
            </b-field>
            
            <button class="button is-fullwidth is-medium is-success is-outlined" v-on:click="login">
              Entrar
            </button>
          </div>
        </div>

        <footer class="card-footer">
          <p class="card-footer-item">
            <span>
              <a href="#">Esqueci minha senha</a>
            </span>
          </p>
          <p class="card-footer-item">
            <span>
              <button class="button is-success is-medium" type="submit">
                Novo usuário
              </button>
            </span>
          </p>
        </footer>
      </article>
      </div>
      
    </div>

  </div>
</template>

<script>
export default {
  name: 'login',
  props: {
    msg: String
  },
  data: () => {
    return {
      user: {
        token: '',
        name: 'alexandre',
        login: 'alexandre@example.com',
        password: '123456'
      },
      info: ''
    }
  },
  methods: {
    login: function(event) {
      event.preventDefault();
      // console.log(JSON.stringify(this.user));
      localStorage.setItem('@trab02:user', this.user);
      this.$router.push({ name: 'Dashboard' })
      this.loading = false
    }
    
  }

}
</script>


<style scoped>
#login {
  padding-top: 5rem;
}

</style>
