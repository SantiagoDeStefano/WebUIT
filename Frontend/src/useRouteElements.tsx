import { useRoutes } from 'react-router-dom'

import TodoList from './pages'
import MainLayout from './layouts/MainLayout/MainLayout'

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: (
        <MainLayout>
          <TodoList />
        </MainLayout>
      )
    }
  ])
  return routeElements
}
