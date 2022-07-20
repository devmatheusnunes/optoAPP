
const routes = [
  // Auth
  {
    path: '/',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: '', name: 'loginDefault', component: () => import('pages/auth/Login.vue') },
      { path: 'login', name: 'login', component: () => import('pages/auth/Login.vue') },
      { path: 'Register', name: 'register', component: () => import('pages/auth/Register.vue') },
      { path: 'forgot-password', name: 'forgot-password', component: () => import('pages/auth/ForgotPassword.vue') },
      { path: 'reset-password', name: 'reset-password', component: () => import('pages/auth/ResetPassword.vue') },
      { path: 'email-confirmation', name: 'email-confirmation', component: () => import('pages/auth/EmailConfirmation.vue') }
    ]
  },

  // Users
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'home', name: 'home', component: () => import('src/pages/Home.vue') },
      { path: 'list-client', name: 'list-client', component: () => import('pages/client/ListClient.vue') }
    ],
    meta: {
      requiresAuth: true
    }
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
