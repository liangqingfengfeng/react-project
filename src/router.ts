import { lazy } from 'react'

type Router = {
  path: string,
  component: any,
  children?: Router[],
}

const routers: Router[] =  [
  {
    path: '/',
    component: lazy(() => import('@/pages/Home')),
  },
  {
    path: '/about',
    component: lazy(() => import('@/pages/About')),
  },
  {
    path: '/test',
    component: lazy(() => import('@/pages/TestClass')),
  },
]

export default routers
