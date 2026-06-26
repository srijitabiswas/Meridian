
export const FEATURES = [
  {
    id: 'sync',
    icon: 'arrowPath',
    title: 'Real-time sync',
    description:
      'Every pipeline watches its own sources and re-syncs the moment something upstream changes — no nightly batch jobs, no stale dashboards.',
    metric: '4.2s',
    metricLabel: 'avg. sync latency',
    size: 'lg',
  },
  {
    id: 'builder',
    icon: 'cog',
    title: 'Visual pipeline builder',
    description:
      'Drag, drop, and connect steps on a canvas. Meridian compiles the graph into a versioned, testable pipeline behind the scenes.',
    metric: '0',
    metricLabel: 'lines of code required',
    size: 'lg',
  },
  {
    id: 'modeling',
    icon: 'cube',
    title: 'Smart data modeling',
    description: 'Meridian infers schema as data arrives, and flags drift before it breaks a downstream model.',
    size: 'md',
  },
  {
    id: 'insights',
    icon: 'arrowTrendingUp',
    title: 'Predictive insights',
    description: 'Surface anomalies and emerging trends days before they would show up in a weekly report.',
    size: 'md',
  },
  {
    id: 'integrations',
    icon: 'link',
    title: 'One-click integrations',
    description: 'Connect 120+ sources — warehouses, APIs, queues — without writing a single connector.',
    size: 'sm',
  },
  {
    id: 'catalog',
    icon: 'search',
    title: 'Searchable data catalog',
    description: 'Find any field, table, or metric in seconds, with full lineage back to its source.',
    size: 'sm',
  },
];