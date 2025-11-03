import {
  createRouter,
  createHashHistory,
  createMemoryHistory,
} from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Use hash history in the browser (for GitHub Pages) and memory history on the server (SSR)
const history =
  typeof window !== 'undefined'
    ? createHashHistory()
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
