"use client"

import { usePageTitle } from './usePageTitle'

// This component ensures the page title hook runs
export default function TitleUpdater() {
  usePageTitle()
  return null
}

