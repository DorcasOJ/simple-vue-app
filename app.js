const app = Vue.createApp({
  data() {
    return {
      title: "Ms",
      firstName: "Dorcas",
      lastName: "Doe",
      email: "dorcas@gmail.com",
      gender: "female",
      picture: "https://randomuser.me/api/portraits/women/10.jpg",
      phone: "1234-45678910",
    };
  },
  methods: {
    async getUser() {
      const res = await fetch("https://randomUser.me/api");
      const { results } = await res.json();
      console.log(results)
      this.title = results[0].name.title;
      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.email = results[0].email;
      this.gender = results[0].gender;
      this.picture = results[0].picture.large;
      this.phone = results[0].cell;
    },
  },
});
app.mount("#app");
