import {
  createRouter,
  createBrowserHistory,
  createMemoryHistory,
} from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Use browser history in the browser and memory history on the server (SSR)
const history =
  typeof window !== 'undefined'
    ? createBrowserHistory()
    : createMemoryHistory({ initialEntries: ['/'] })

// Create a new router instance
export const getRouter = () => {
  const router = createRouter({
    routeTree,
    history,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  })

  return router
}
