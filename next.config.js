module.exports = {
  env: {
    BASE_URL: "http://localhost:3005/backend5/api/v1",
  },
  async rewrites() {
    return [
      {
        source: "/login",
        destination: "/auth/login",
      },
      {
        source: "/signup",
        destination: "/auth/signup",
      },
      {
        source: "/admin-dashboard",
        destination: "/profile/AdminDashboard",
      },
      {
        source: "/product-cust",
        destination: "/product-cust",
      },
      {
        source: "/product-admin",
        destination: "/product-admin",
      },
      {
        source: "/admin-manage-order",
        destination: "/manage-order-admin",
      },
      {
        source: "/set-promo",
        destination: "/set-promo",
      },
    ];
  },
};
