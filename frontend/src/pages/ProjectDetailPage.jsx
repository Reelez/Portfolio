import { useParams, Navigate } from 'react-router-dom'
import SenderoPage from './Sendero'
import NovaMindPage from './NovaMind'

/**
 * Project registry — map project id → page component.
 * To add a new project: create pages/ProjectName/ and add it here.
 *
 * Example:
 *   import AmberAlertPage from './AmberAlert'
 *   2: AmberAlertPage,
 */
const registry = {
  1: SenderoPage,
  3: NovaMindPage,
}

export default function ProjectDetailPage() {
  const { id } = useParams()
  const Page = registry[Number(id)]

  if (!Page) return <Navigate to="/projects" replace />

  return <Page />
}
