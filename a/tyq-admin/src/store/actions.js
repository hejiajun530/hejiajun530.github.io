const actions = {
  //异步
  saveRoutes(state, data) {
    const _self = this;
    state.routeList = data;
    console.log('ok')
    // _self.$router.addRoutes(state.routeList);
    // _self.$router.addRoutes([
    //   {
    //     path: "/category",
    //     name: "",
    //     component: () => import("@/views/home/category")
    //   },
    //   {
    //     path: "*",
    //     redirect: "/error"
    //   }
    // ]);
  }
}

export default actions