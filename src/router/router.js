const route = [
  {
    path: '/',
    name: 'main',
    component: resolve => { require(['@/views/main'], resolve) },
    redirect: '/index',
    children: [
      { path: '/:id', name: 'index', component: resolve => { require(['@/views/bodys/body'], resolve) } }
    ]
  }
]

export default route
