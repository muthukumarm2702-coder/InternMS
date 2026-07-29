import { useState } from 'react'
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./CompanyDashboard.css";
import internsIcon from '../assets/dashboard/interns.png'
import reportsIcon from '../assets/dashboard/reports.png'
import addInternIcon from '../assets/dashboard/add-intern.png'
import appsIcon from '../assets/dashboard/applications.png'
import docsIcon from '../assets/dashboard/documents.png'
import internshipsIcon from '../assets/dashboard/internships.png'
import arrowIcon from '../assets/dashboard/arrow-right.png'
import filterIcon from '../assets/dashboard/filter-chevron.png'
import appsBadge from '../assets/dashboard/applications-stat.png'
import deptBadge from '../assets/dashboard/departments-stat.png'
import completedBadge from '../assets/dashboard/completed-stat.png'
import activeBadge from '../assets/dashboard/active-stat.png'
import internsBadge from '../assets/dashboard/interns-stat.png'
import searchIcon from '../assets/dashboard/search.png'
import menuChevron from '../assets/dashboard/menu-chevron.png'
import activeMenuBg from '../assets/dashboard/active-menu.png'
import cyanBadgeBg from '../assets/dashboard/conversion-bg.png'
import purpleBadgeBg from '../assets/dashboard/completion-bg.png'
import greenBadgeBg from '../assets/dashboard/satisfaction-bg.png'
import blueBadgeBg from '../assets/dashboard/rating-bg.png'
import companyIcon from '../assets/dashboard/company.png'
import homeIcon from '../assets/dashboard/home.png'
import mentorsIcon from '../assets/dashboard/mentors.png'
import deptIcon from '../assets/dashboard/departments.png'
import tasksIcon from '../assets/dashboard/tasks.png'
import messagesIcon from '../assets/dashboard/messages.png'
import calendarIcon from '../assets/dashboard/calendar.png'
import settingsIcon from '../assets/dashboard/settings.png'
import trendIcon from '../assets/dashboard/rating.png'
import checkIcon from '../assets/dashboard/satisfaction.png'
import starIcon from '../assets/dashboard/completion.png'
import clockIcon from '../assets/dashboard/duration.png'
import medalIcon from '../assets/dashboard/conversion.png'
import megaphoneIcon from '../assets/dashboard/megaphone.png'

const NAV_ITEMS = [
  { key: 'dashboard', label: 'Dashboard', src: homeIcon },
  { key: 'internships', label: 'Internships', src: internshipsIcon },
  { key: 'applications', label: 'Applications', src: appsIcon },
  { key: 'interns', label: 'Interns', src: internsIcon },
  { key: 'mentors', label: 'Mentors', src: mentorsIcon },
  { key: 'departments', label: 'Departments', src: deptIcon },
  { key: 'tasks', label: 'Task & Evaluations', src: tasksIcon },
  { key: 'reports', label: 'Reports & Analytics', src: reportsIcon },
  { key: 'messages', label: 'Messages', src: messagesIcon },
  { key: 'calendar', label: 'Calendar', src: calendarIcon },
  { key: 'documents', label: 'Documents', src: docsIcon },
  { key: 'settings', label: 'Settings', src: settingsIcon },
]

const STAT_CARDS = [
  { label: 'Total Interns', value: '128', delta: '18%', badge: internsBadge },
  { label: 'New Applications', value: '56', delta: '12%', badge: appsBadge },
  { label: 'Active Internships', value: '96', delta: '16%', badge: activeBadge },
  { label: 'Completed Internships', value: '32', delta: '23%', badge: completedBadge },
  { label: 'Departments', value: '8', delta: 'Total departments', badge: deptBadge, noDelta: true },
]

const APPLICATION_SEGMENTS = [
  { label: 'Under Review', value: 20, pct: '36%', color: '#2F6FED' },
  { label: 'Shortlisted', value: 14, pct: '25%', color: '#2DBA98' },
  { label: 'Interview Scheduled', value: 10, pct: '18%', color: '#7246E8' },
  { label: 'Offered', value: 10, pct: '8%', color: '#DCA052' },
  { label: 'Rejected', value: 4, pct: '7%', color: '#C4CCD8' },
]

const DEPARTMENT_SEGMENTS = [
  { label: 'Engineering', value: 42, pct: '33%', color: '#246BF2' },
  { label: 'Marketing', value: 28, pct: '22%', color: '#2BB995' },
  { label: 'Design', value: 20, pct: '16%', color: '#6840D9' },
  { label: 'Product', value: 16, pct: '13%', color: '#E0A052' },
  { label: 'HR', value: 10, pct: '8%', color: '#69B4DD' },
  { label: 'Others', value: 12, pct: '8%', color: '#8C99AF' },
]

const INTERNSHIP_STATUS_DATA = [
  { date: 'May 06', active: 35, completed: 5 },
  { date: 'May 16', active: 45, completed: 14 },
  { date: 'May 26', active: 58, completed: 25 },
  { date: 'Jun 26', active: 84, completed: 36 },
  { date: 'Jul 06', active: 100, completed: 38 },
]

const RECENT_APPLICATIONS = [
  { name: 'Aarav Patel', position: 'UI/UX Design Intern', department: 'Design', appliedOn: 'May 26, 2026', status: 'Under Review' },
  { name: 'Sneha Priya', position: 'Backend Dev Intern', department: 'Engineering', appliedOn: 'May 20, 2026', status: 'Rejected' },
  { name: 'Rohan Kapoor', position: 'Marketing Intern', department: 'Marketing', appliedOn: 'May 18, 2026', status: 'Shortlisted' },
  { name: 'Neha Gupta', position: 'HR Intern', department: 'HR', appliedOn: 'May 16, 2026', status: 'Interview' },
  { name: 'Aditya Singh', position: 'Data Analyst Intern', department: 'Product', appliedOn: 'May 12, 2026', status: 'Offered' },
]

const UPCOMING_EVENTS = [
  { month: 'MAY', day: '30', title: 'Intern Orientation Program', when: 'May 30, 2026 - 10:00 AM' },
  { month: 'JUN', day: '05', title: 'Mid Internship Review', when: 'Jun 05, 2026 02:00 PM' },
  { month: 'JUN', day: '14', title: 'Project Submission Deadline', when: 'Jun 15, 2026 11:59 PM' },
  { month: 'JUN', day: '25', title: 'Final Presentation Day', when: 'Jun 25, 2026 - 10:00 AM' },
]

const QUICK_ACTIONS = [
  { label: 'Post New Internship', src: internshipsIcon },
  { label: 'Add New Intern', src: addInternIcon },
  { label: 'Assign Mentor', src: internsIcon },
  { label: 'Generate Reports', src: reportsIcon },
  { label: 'Send Announcement', src: megaphoneIcon },
  { label: 'Upload Document', src: docsIcon },
]

const PERFORMANCE_ITEMS = [
  { label: 'Average Rating', value: '4.5', suffix: '/5', delta: '10%', bg: blueBadgeBg, icon: trendIcon },
  { label: 'Intern Satisfaction', value: '92%', delta: '8%', bg: greenBadgeBg, icon: checkIcon },
  { label: 'Task Completion Rate', value: '88%', delta: '18%', bg: purpleBadgeBg, icon: starIcon },
  { label: 'Avg. Internship Duration', value: '10.2', suffix: ' Weeks', delta: '5%', down: true, bg: null, icon: clockIcon },
  { label: 'Conversion to Hire', value: '24%', delta: '15%', bg: cyanBadgeBg, icon: medalIcon },
]

function StatusPill({ status }) {
  const cls = status.toLowerCase().replace(/\s+/g, '-')
  return <span className={`status-pill status-${cls}`}>{status}</span>
}

function SidebarIcon({ item }) {
  return <img src={item.src} alt="" className="nav-icon-img" />
}

function BellIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18 9a6 6 0 1 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
    </svg>
  )
}

function PerformanceIcon({ icon }) {
  return <img src={icon} alt="" className="performance-icon-img" />
}

const DONUT_SIZE = 120
const DONUT_HOLE = 72
const DONUT_RADIUS = DONUT_SIZE / 2
const DONUT_INNER_RADIUS = DONUT_HOLE / 2

function polarPoint(radius, angle) {
  const radians = (angle * Math.PI) / 180
  return {
    x: DONUT_RADIUS + radius * Math.cos(radians),
    y: DONUT_RADIUS + radius * Math.sin(radians),
  }
}

function createDonutPath(startAngle, endAngle) {
  const outerStart = polarPoint(DONUT_RADIUS - 1, startAngle)
  const outerEnd = polarPoint(DONUT_RADIUS - 1, endAngle)
  const innerEnd = polarPoint(DONUT_INNER_RADIUS, endAngle)
  const innerStart = polarPoint(DONUT_INNER_RADIUS, startAngle)
  const largeArc = endAngle - startAngle > 180 ? 1 : 0

  return [
    `M ${outerStart.x} ${outerStart.y}`,
    `A ${DONUT_RADIUS - 1} ${DONUT_RADIUS - 1} 0 ${largeArc} 1 ${outerEnd.x} ${outerEnd.y}`,
    `L ${innerEnd.x} ${innerEnd.y}`,
    `A ${DONUT_INNER_RADIUS} ${DONUT_INNER_RADIUS} 0 ${largeArc} 0 ${innerStart.x} ${innerStart.y}`,
    'Z',
  ].join(' ')
}

function DonutChart({ data, total }) {
  const [hoveredSegment, setHoveredSegment] = useState(null)
  const dataTotal = data.reduce((sum, segment) => sum + segment.value, 0)
  const segments = data.reduce((result, segment) => {
    const startAngle = result.angle
    const endAngle = startAngle + (segment.value / dataTotal) * 360
    return {
      angle: endAngle,
      values: [
        ...result.values,
        {
          ...segment,
          path: createDonutPath(startAngle, endAngle),
        },
      ],
    }
  }, { angle: -90, values: [] }).values

  return (
    <div
      className="donut-chart-wrap"
      role="img"
      aria-label={`${total} total: ${data.map((item) => `${item.label} ${item.pct}`).join(', ')}`}
      onPointerLeave={() => setHoveredSegment(null)}
    >
      <svg className="donut-svg" viewBox={`0 0 ${DONUT_SIZE} ${DONUT_SIZE}`} aria-hidden="true">
        {segments.map((segment) => (
          <path
            key={segment.label}
            className="donut-segment"
            d={segment.path}
            fill={segment.color}
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            onPointerEnter={() => setHoveredSegment(segment)}
          />
        ))}
      </svg>
      <div className="donut-center">
        <strong>{total}</strong>
        <span>TOTAL</span>
      </div>
      {hoveredSegment && (
        <div className="donut-tooltip" role="status">
          <span className="donut-tooltip-dot" style={{ backgroundColor: hoveredSegment.color }} />
          <span className="donut-tooltip-label">{hoveredSegment.label}</span>
          <strong>{hoveredSegment.value} ({hoveredSegment.pct})</strong>
        </div>
      )}
    </div>
  )
}

export default function CompanyDashboard() {
  const [activeNav, setActiveNav] = useState('dashboard')
  const [companyMenuOpen, setCompanyMenuOpen] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="dash-root">
      <aside className={`dash-sidebar ${sidebarOpen ? 'dash-sidebar-open' : ''}`}>
        <div className="dash-brand">
          <strong>InternMS</strong>
          <span>Internship Management System</span>
        </div>
        <div className="sidebar-divider" aria-hidden="true" />
        <nav className="dash-nav">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.key}
              className={`dash-nav-item ${activeNav === item.key ? 'dash-nav-item-active' : ''}`}
              onClick={() => {
                setActiveNav(item.key)
                setSidebarOpen(false)
              }}
              style={activeNav === item.key ? { backgroundImage: `url(${activeMenuBg})` } : undefined}
            >
              <span className="nav-icon"><SidebarIcon item={item} /></span>
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>
      {sidebarOpen && (
        <button
          className="sidebar-backdrop"
          type="button"
          aria-label="Close sidebar"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="dash-main">
        <header className="dash-topbar">
          <button
            className="dash-hamburger dash-hamburger-dark"
            type="button"
            aria-label="Toggle sidebar"
            aria-expanded={sidebarOpen}
            onClick={() => setSidebarOpen((open) => !open)}
          >
            <span /><span /><span />
          </button>
          <div className="dash-welcome">
            <h1>Welcome back, Company Admin!</h1>
            <p>welcome back, Admin! Here's an overview of the internship ecosystem.</p>
          </div>
          <div className="dash-search">
            <img src={searchIcon} alt="" className="search-icon" />
            <input type="text" placeholder="Search anything...." />
          </div>
          <button className="dash-bell" aria-label="Notifications">
            <BellIcon />
            <span className="bell-dot" />
          </button>
          <div className="dash-company">
            <img src={companyIcon} alt="" className="company-icon" />
            <div className="company-text">
              <strong>Company</strong>
              <span>Tech Nova Solutions</span>
            </div>
            <button
              className="company-chevron-button"
              type="button"
              aria-label="Toggle company menu"
              aria-expanded={companyMenuOpen}
              onClick={() => setCompanyMenuOpen((open) => !open)}
            >
              <img
                src={menuChevron}
                alt=""
                className={`company-chevron ${companyMenuOpen ? 'company-chevron-open' : ''}`}
              />
            </button>
            {companyMenuOpen && (
              <div className="company-dropdown">
                <button type="button">Company Profile</button>
                <button type="button">Account Settings</button>
                <button type="button">Sign Out</button>
              </div>
            )}
          </div>
        </header>

        <main className="dash-content">
          <section className="stat-cards-row">
            {STAT_CARDS.map((card) => (
              <div className="dstat-card" key={card.label}>
                <img src={card.badge} alt="" className="dstat-badge" />
                <div className="dstat-text">
                  <span className="dstat-label">{card.label}</span>
                  <span className="dstat-value">{card.value}</span>
                  {card.noDelta ? (
                    <span className="dstat-delta dstat-delta-muted">{card.delta}</span>
                  ) : (
                    <span className="dstat-delta">
                      <span className="dstat-change">↑ {card.delta}</span>
                      <span className="dstat-context"> from last month</span>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </section>

          <section className="charts-row">
            <div className="chart-card">
              <div className="chart-card-header">
                <h3>Application Overview</h3>
                <button className="month-pill" type="button">This Month <img src={filterIcon} alt="" /></button>
              </div>
              <div className="donut-block">
                <DonutChart data={APPLICATION_SEGMENTS} total="56" />
                <ul className="donut-legend">
                  {APPLICATION_SEGMENTS.map((seg) => (
                    <li key={seg.label}>
                      <span className="legend-dot" style={{ background: seg.color }} />
                      <span className="legend-label">{seg.label}</span>
                      <span className="legend-value">{seg.value} ({seg.pct})</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a className="card-link" href="#">View all application <img src={arrowIcon} alt="" /></a>
            </div>

            <div className="chart-card internship-status-card">
              <div className="chart-card-header">
                <h3>Internship Status</h3>
                <button className="month-pill" type="button">This Month <img src={filterIcon} alt="" /></button>
              </div>
              <div className="line-content">
                <div className="line-legend">
                  <span className="legend-active">Active</span>
                  <span className="legend-completed">Completed</span>
                </div>
                <div className="line-chart-block">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={INTERNSHIP_STATUS_DATA}
                      margin={{ top: 10, right: 20, bottom: 0, left: 2 }}
                      accessibilityLayer
                    >
                    <XAxis
                      dataKey="date"
                      interval={0}
                      tick={{ fill: '#475569', fontSize: 9, fontWeight: 500 }}
                      axisLine={{ stroke: '#E2E8F0', strokeWidth: 1 }}
                      tickLine={false}
                      tickMargin={8}
                    />
                    <YAxis
                      width={36}
                      domain={[0, 105]}
                      ticks={[0, 25, 50, 75, 100]}
                      interval={0}
                      allowDecimals={false}
                      tick={{ fill: '#334155', fontSize: 9, fontWeight: 600 }}
                      axisLine={{ stroke: '#E2E8F0', strokeWidth: 1 }}
                      tickLine={false}
                      tickMargin={9}
                    />
                    <Tooltip
                      formatter={(value, name) => [Number(value), name]}
                      labelFormatter={(date) => `${date}`}
                      cursor={{ stroke: '#CBD5E1', strokeWidth: 1, strokeDasharray: '4 4' }}
                      contentStyle={{
                        background: 'rgba(255, 255, 255, 0.98)',
                        border: '1px solid #E2E8F0',
                        borderRadius: 8,
                        boxShadow: '0 8px 24px rgba(15, 23, 42, 0.12)',
                        padding: '8px 10px',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: 10,
                        lineHeight: 1.4,
                      }}
                      labelStyle={{
                        color: '#0F172A',
                        fontSize: 10,
                        fontWeight: 700,
                        marginBottom: 4,
                      }}
                      itemStyle={{
                        fontSize: 9,
                        fontWeight: 600,
                        padding: '1px 0',
                      }}
                    />
                    <Line
                      type="natural"
                      dataKey="active"
                      name="Active"
                      stroke="#2F6FED"
                      strokeWidth={1.6}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      dot={{ r: 4, fill: '#2F6FED', strokeWidth: 0 }}
                      activeDot={{ r: 5.5, fill: '#2F6FED', strokeWidth: 2, stroke: '#DBEAFE' }}
                      isAnimationActive
                      animationDuration={900}
                      animationEasing="ease-out"
                    />
                    <Line
                      type="natural"
                      dataKey="completed"
                      name="Completed"
                      stroke="#2DBA98"
                      strokeWidth={1.6}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      dot={{ r: 4, fill: '#2DBA98', strokeWidth: 0 }}
                      activeDot={{ r: 5.5, fill: '#2DBA98', strokeWidth: 2, stroke: '#D1FAE5' }}
                      isAnimationActive
                      animationDuration={900}
                      animationEasing="ease-out"
                    />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <a className="card-link" href="#">View full report <img src={arrowIcon} alt="" /></a>
            </div>

            <div className="chart-card">
              <div className="chart-card-header">
                <h3>Internship Departments</h3>
              </div>
              <div className="donut-block">
                <DonutChart data={DEPARTMENT_SEGMENTS} total="128" />
                <ul className="donut-legend">
                  {DEPARTMENT_SEGMENTS.map((seg) => (
                    <li key={seg.label}>
                      <span className="legend-dot" style={{ background: seg.color }} />
                      <span className="legend-label">{seg.label}</span>
                      <span className="legend-value">{seg.value} ({seg.pct})</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a className="card-link" href="#">View department details <img src={arrowIcon} alt="" /></a>
            </div>
          </section>

          <section className="bottom-row">
            <div className="panel-card recent-applications">
              <div className="panel-header">
                <h3>Recent Applications</h3>
                <a href="#">View all</a>
              </div>
              <table className="applications-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Department</th>
                    <th>Applied On</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {RECENT_APPLICATIONS.map((row) => (
                    <tr key={row.name}>
                      <td>{row.name}</td>
                      <td>{row.position}</td>
                      <td>{row.department}</td>
                      <td>{row.appliedOn}</td>
                      <td><StatusPill status={row.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <a className="card-link" href="#">View all application <img src={arrowIcon} alt="" /></a>
            </div>

            <div className="panel-card upcoming-events">
              <div className="panel-header">
                <h3>Upcoming Events</h3>
                <a href="#">View Calendar</a>
              </div>
              <ul className="events-list">
                {UPCOMING_EVENTS.map((ev) => (
                  <li key={ev.title}>
                    <div className="event-date">
                      <span className="event-month">{ev.month}</span>
                      <span className="event-day">{ev.day}</span>
                    </div>
                    <div className="event-info">
                      <strong>{ev.title}</strong>
                      <span>{ev.when}</span>
                    </div>
                    <span className="event-badge">Upcoming</span>
                  </li>
                ))}
              </ul>
              <a className="card-link" href="#">View all events <img src={arrowIcon} alt="" /></a>
            </div>

            <div className="panel-card quick-actions">
              <div className="panel-header">
                <h3>Quick Actions</h3>
              </div>
              <div className="quick-actions-grid">
                {QUICK_ACTIONS.map((action) => (
                  <button
                    key={action.label}
                    className="quick-action-btn"
                    type="button"
                  >
                    <img src={action.src} alt="" />
                    <span>{action.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section className="performance-row">
            <h3 className="performance-title">Performance Overview</h3>
            <div className="performance-grid">
              {PERFORMANCE_ITEMS.map((item) => (
                <div className="performance-item" key={item.label}>
                  <div
                    className="performance-icon-wrap"
                    style={item.bg ? { backgroundImage: `url(${item.bg})` } : { background: '#FDECD8' }}
                  >
                    <PerformanceIcon icon={item.icon} />
                  </div>
                  <div className="performance-text">
                    <span className="performance-label">{item.label}</span>
                    <span className="performance-value">
                      {item.value}
                      {item.suffix && <span className="performance-suffix">{item.suffix}</span>}
                    </span>
                  <span className="performance-delta">
                    <span className={item.down ? 'performance-change-down' : 'performance-change'}>
                      {item.down ? '↓' : '↑'} {item.delta}
                    </span>
                    <span className="performance-context"> from last month</span>
                  </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
