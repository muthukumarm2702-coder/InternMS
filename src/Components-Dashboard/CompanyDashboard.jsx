import { useState } from 'react'
import {
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./CompanyDashboard.css";

import internsIcon from '../assets/dashboard/interns.png'
import reportsIcon from '../assets/dashboard/reports.png'
import addInternIcon from '../assets/dashboard/add-intern.png'
import applicationsIcon from '../assets/dashboard/applications.png'
import documentsIcon from '../assets/dashboard/documents.png'
import internshipsIcon from '../assets/dashboard/internships.png'
import arrowRightIcon from '../assets/dashboard/arrow-right.png'
import filterArrowIcon from '../assets/dashboard/filter-arrow.png'
import applicationsStatIcon from '../assets/dashboard/applications-symbol.png'
import departmentsStatIcon from '../assets/dashboard/departments-symbol.png'
import completedStatIcon from '../assets/dashboard/completed-symbol.png'
import activeStatIcon from '../assets/dashboard/active-symbol.png'
import internsStatIcon from '../assets/dashboard/interns-symbol.png'
import searchIcon from '../assets/dashboard/search.png'
import menuArrowIcon from '../assets/dashboard/menu-arrow.png'
import companyIcon from '../assets/dashboard/company.png'
import homeIcon from '../assets/dashboard/home.png'
import mentorsIcon from '../assets/dashboard/mentors.png'
import departmentsIcon from '../assets/dashboard/departments.png'
import tasksIcon from '../assets/dashboard/tasks.png'
import messagesIcon from '../assets/dashboard/messages.png'
import calendarIcon from '../assets/dashboard/calendar.png'
import settingsIcon from '../assets/dashboard/settings.png'
import ratingIcon from '../assets/dashboard/rating.png'
import satisfactionIcon from '../assets/dashboard/satisfaction.png'
import completionIcon from '../assets/dashboard/completion.png'
import durationIcon from '../assets/dashboard/duration.png'
import conversionIcon from '../assets/dashboard/conversion.png'
import megaphoneIcon from '../assets/dashboard/megaphone.png'
import bellIcon from '../assets/dashboard/bell.png'
import trendUpIcon from '../assets/dashboard/trend-up.png'
import trendDownIcon from '../assets/dashboard/trend-down.png'

const NAV_ITEMS = [
  { key: 'dashboard', label: 'Dashboard', src: homeIcon },
  { key: 'internships', label: 'Internships', src: internshipsIcon },
  { key: 'applications', label: 'Applications', src: applicationsIcon },
  { key: 'interns', label: 'Interns', src: internsIcon },
  { key: 'mentors', label: 'Mentors', src: mentorsIcon },
  { key: 'departments', label: 'Departments', src: departmentsIcon },
  { key: 'tasks', label: 'Task & Evaluations', src: tasksIcon },
  { key: 'reports', label: 'Reports & Analytics', src: reportsIcon },
  { key: 'messages', label: 'Messages', src: messagesIcon },
  { key: 'calendar', label: 'Calendar', src: calendarIcon },
  { key: 'documents', label: 'Documents', src: documentsIcon },
  { key: 'settings', label: 'Settings', src: settingsIcon },
]

const STAT_CARDS = [
  { label: 'Total Interns', value: '128', delta: '18%', badge: internsStatIcon },
  { label: 'New Applications', value: '56', delta: '12%', badge: applicationsStatIcon },
  { label: 'Active Internships', value: '96', delta: '16%', badge: activeStatIcon },
  { label: 'Completed Internships', value: '32', delta: '23%', badge: completedStatIcon },
  { label: 'Departments', value: '8', delta: 'Total departments', badge: departmentsStatIcon, noDelta: true },
]

const APPLICATION_SEGMENTS = [
  { label: 'Under Review', value: 20, pct: '36%', color: '#2673F4' },
  { label: 'Shortlisted', value: 14, pct: '25%', color: '#27C090' },
  { label: 'Interview Scheduled', value: 10, pct: '18%', color: '#794BE3' },
  { label: 'Offered', value: 10, pct: '8%', color: '#DD9F5A' },
  { label: 'Rejected', value: 4, pct: '7%', color: '#C5CDDB' },
]

const DEPARTMENT_SEGMENTS = [
  { label: 'Engineering', value: 42, pct: '33%', color: '#226BF1' },
  { label: 'Marketing', value: 28, pct: '22%', color: '#2ABD99' },
  { label: 'Design', value: 20, pct: '16%', color: '#6B3FD3' },
  { label: 'Product', value: 16, pct: '13%', color: '#D49A58' },
  { label: 'HR', value: 10, pct: '8%', color: '#6BB2DC' },
  { label: 'Others', value: 12, pct: '8%', color: '#8C96AF' },
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
  { label: 'Upload Document', src: documentsIcon },
]

const PERFORMANCE_ITEMS = [
  { label: 'Average Rating', value: '4.5', suffix: '/5', delta: '10%', icon: ratingIcon },
  { label: 'Intern Satisfaction', value: '92%', delta: '8%', icon: satisfactionIcon },
  { label: 'Task Completion Rate', value: '88%', delta: '18%', icon: completionIcon },
  { label: 'Avg. Internship Duration', value: '10.2', suffix: ' Weeks', delta: '5%', down: true, icon: durationIcon },
  { label: 'Conversion to Hire', value: '24%', delta: '15%', icon: conversionIcon },
]

function StatusPill({ status }) {
  const cls = status
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join('')

  return <span className={`statusPill status${cls}`}>{status}</span>
}

function MonthFilter() {
  return (
    <button className="monthPill" type="button">
      This Month
      <img src={filterArrowIcon} alt="" />
    </button>
  )
}

function CardLink({ children }) {
  return (
    <a className="cardLink" href="#">
      {children}
      <img src={arrowRightIcon} alt="" />
    </a>
  )
}

function DonutChart({ data, total }) {
  let shouldAnimate = true
 if (typeof window !== 'undefined') {
    const reducedMotionSetting = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    )
    if (reducedMotionSetting.matches) {
      shouldAnimate = false
    }
  }

  return (
    <div className="donutChartWrap" role="img" aria-label={`${total} total`}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="label"
            cx="50%"
            cy="50%"
            innerRadius={36}
            outerRadius={60}
            startAngle={90}
            endAngle={-270}
            paddingAngle={2}
            stroke="none"
            isAnimationActive={shouldAnimate}
            animationBegin={120}
            animationDuration={900}
            animationEasing="ease-out"
          >
            {data.map((segment) => <Cell key={segment.label} fill={segment.color} />)}
          </Pie>
          <Tooltip
            formatter={(value, name) => [`${value} applications`, name]}
            contentStyle={{ borderRadius: 8, border: '1px solid #E3E3E3', fontSize: 11 }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="donutCenter">
        <strong>{total}</strong>
        <span>TOTAL</span>
      </div>
    </div>
  )
}

export const CompanyDashboard = () => {
  const [activeNav, setActiveNav] = useState('dashboard')
  const [companyMenuOpen, setCompanyMenuOpen] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [visibleSeries, setVisibleSeries] = useState({
    active: true,
    completed: true,
  })

  const toggleSeries = (series) => {
    setVisibleSeries((current) => ({
      ...current,
      [series]: !current[series],
    }))
  }

  return (
    <div className="adminPage">
      <aside className={`sidePanel ${sidebarOpen ? 'sidePanelOpen' : ''}`}>
        <div className="brand">
          <strong>InternMS</strong>
          <span>Internship Management System</span>
        </div>
        <nav className="sideNav">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.key}
              className={`navItem ${activeNav === item.key ? 'navItemActive' : ''}`}
              onClick={() => {
                setActiveNav(item.key)
                setSidebarOpen(false)
              }}
            >
              <img src={item.src} alt="" className="navIconImg" />
              <span className="navLabel">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>
      {sidebarOpen && (
        <button
          className="sidebarBackdrop"
          type="button"
          aria-label="Close sidebar"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="mainArea">
        <header className="topbar">
          <button
            className="menuBtn"
            type="button"
            aria-label="Toggle sidebar"
            aria-expanded={sidebarOpen}
            onClick={() => setSidebarOpen((open) => !open)}
          >
            <span /><span /><span />
          </button>
          <div className="welcomeText">
            <h1>Welcome back, Company Admin!</h1>
            <p>welcome back, Admin! Here's an overview of the internship ecosystem.</p>
          </div>
          <div className="searchBox">
            <img src={searchIcon} alt="" className="searchIcon" />
            <input type="text" placeholder="Search anything...." />
          </div>
          <button className="bellBtn" aria-label="Notifications">
            <img src={bellIcon} alt="" className="bellIcon" />
            <span className="bellDot" aria-hidden="true" />
          </button>
          <div className="companyInfo">
            <img src={companyIcon} alt="" className="companyIcon" />
            <div className="companyText">
              <strong>Company</strong>
              <span>Tech Nova Solutions</span>
            </div>
            <button
              className="companyChevronButton"
              type="button"
              aria-label="Toggle company menu"
              aria-expanded={companyMenuOpen}
              onClick={() => setCompanyMenuOpen((open) => !open)}
            >
              <img
                src={menuArrowIcon}
                alt=""
                className={`companyChevron ${companyMenuOpen ? 'companyChevronOpen' : ''}`}
              />
            </button>
            {companyMenuOpen && (
              <div className="companyDropdown">
                <button type="button">Company Profile</button>
                <button type="button">Account Settings</button>
                <button type="button">Sign Out</button>
              </div>
            )}
          </div>
        </header>

        <main className="contentArea">
          <section className="statCardsRow">
            {STAT_CARDS.map((card) => (
              <div className="dstatCard" key={card.label}>
                <img src={card.badge} alt="" className="dstatBadge" />
                <div className="dstatText">
                  <span className="dstatLabel">{card.label}</span>
                  <span className="dstatValue">{card.value}</span>
                  {card.noDelta ? (
                    <span className="dstatDelta dstatDeltaMuted">{card.delta}</span>
                  ) : (
                    <span className="dstatDelta">
                      <span className="dstatChange">
                        <img src={trendUpIcon} alt="" className="trendIcon" />
                        {card.delta}
                      </span>
                      <span className="dstatContext">from last month</span>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </section>

          <section className="chartsRow">
            <div className="chartCard">
              <div className="chartCardHeader">
                <h3>Application Overview</h3>
                <MonthFilter />
              </div>
              <div className="donutBlock">
                <DonutChart data={APPLICATION_SEGMENTS} total="56" />
                <ul className="donutLegend">
                  {APPLICATION_SEGMENTS.map((seg) => (
                    <li key={seg.label}>
                      <span className="legendDot" style={{ background: seg.color }} />
                      <span className="legendLabel">{seg.label}</span>
                      <span className="legendValue">{seg.value} ({seg.pct})</span>
                    </li>
                  ))}
                </ul>
              </div>
              <CardLink>View all application</CardLink>
            </div>

            <div className="chartCard">
              <div className="chartCardHeader">
                <h3>Internship Status</h3>
                <MonthFilter />
              </div>
              <div className="lineContent">
                <div className="lineLegend">
                  <button
                    type="button"
                    className={`legendActive ${visibleSeries.active ? '' : 'legendSeriesMuted'}`}
                    aria-pressed={visibleSeries.active}
                    onClick={() => toggleSeries('active')}
                  >
                    Active
                  </button>
                  <button
                    type="button"
                    className={`legendCompleted ${visibleSeries.completed ? '' : 'legendSeriesMuted'}`}
                    aria-pressed={visibleSeries.completed}
                    onClick={() => toggleSeries('completed')}
                  >
                    Completed
                  </button>
                </div>
                <div className="lineChartBlock">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={INTERNSHIP_STATUS_DATA} margin={{ top: 8, right: 4, bottom: 0, left: 0 }}>
                    <XAxis
                      dataKey="date"
                      tick={{
                        fill: '#000000',
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: 8,
                        fontWeight: 400,
                      }}
                      axisLine={{ stroke: '#E3E3E3', strokeWidth: 1 }}
                      tickLine={false}
                      tickMargin={8}
                    />
                    <YAxis
                      width={36}
                      domain={[0, 100]}
                      ticks={[0, 25, 50, 75, 100]}
                      tick={{
                        fill: '#000000',
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: 8,
                        fontWeight: 400,
                      }}
                      axisLine={{ stroke: '#E3E3E3', strokeWidth: 1 }}
                      tickLine={false}
                      tickMargin={9}
                    />
                    <Tooltip
                      cursor={{ stroke: '#C5CDDB', strokeWidth: 1, strokeDasharray: '4 4' }}
                      contentStyle={{
                        background: 'rgba(255, 255, 255, 0.98)',
                        border: '1px solid #E3E3E3',
                        borderRadius: 8,
                        boxShadow: '0 8px 24px rgba(15, 23, 42, 0.12)',
                        padding: '8px 10px',
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: 10,
                        lineHeight: 1.4,
                      }}
                      labelStyle={{
                        color: '#000000',
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
                    {visibleSeries.active && <Line
                      type="natural"
                      dataKey="active"
                      name="Active"
                      stroke="#296CF6"
                      strokeWidth={1}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      dot={{ r: 4.5, fill: '#296CF6', strokeWidth: 0 }}
                      activeDot={{ r: 6, fill: '#296CF6', strokeWidth: 2, stroke: '#EBF2FD' }}
                    />}
                    {visibleSeries.completed && <Line
                      type="natural"
                      dataKey="completed"
                      name="Completed"
                      stroke="#27C090"
                      strokeWidth={1}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      dot={{ r: 4.5, fill: '#27C090', strokeWidth: 0 }}
                      activeDot={{ r: 6, fill: '#27C090', strokeWidth: 2, stroke: '#E6F8F0' }}
                    />}
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <CardLink>View full report</CardLink>
            </div>

            <div className="chartCard">
              <div className="chartCardHeader">
                <h3>Internship Departments</h3>
              </div>
              <div className="donutBlock">
                <DonutChart data={DEPARTMENT_SEGMENTS} total="128" />
                <ul className="donutLegend">
                  {DEPARTMENT_SEGMENTS.map((seg) => (
                    <li key={seg.label}>
                      <span className="legendDot" style={{ background: seg.color }} />
                      <span className="legendLabel">{seg.label}</span>
                      <span className="legendValue">{seg.value} ({seg.pct})</span>
                    </li>
                  ))}
                </ul>
              </div>
              <CardLink>View department details</CardLink>
            </div>
          </section>

          <section className="bottomRow">
            <div className="panelCard recentApplications">
              <div className="panelHeader">
                <h3>Recent Applications</h3>
                <a href="#">View all</a>
              </div>
              <table className="applicationsTable">
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
              <CardLink>View all application</CardLink>
            </div>

            <div className="panelCard upcomingEvents">
              <div className="panelHeader">
                <h3>Upcoming Events</h3>
                <a href="#">View Calendar</a>
              </div>
              <ul className="eventsList">
                {UPCOMING_EVENTS.map((ev) => (
                  <li key={ev.title}>
                    <div className="eventDate">
                      <span className="eventMonth">{ev.month}</span>
                      <span className="eventDay">{ev.day}</span>
                    </div>
                    <div className="eventInfo">
                      <strong>{ev.title}</strong>
                      <span>{ev.when}</span>
                    </div>
                    <span className="eventBadge">Upcoming</span>
                  </li>
                ))}
              </ul>
              <CardLink>View all events</CardLink>
            </div>

            <div className="panelCard quickActions">
              <div className="panelHeader">
                <h3>Quick Actions</h3>
              </div>
              <div className="quickActionsGrid">
                {QUICK_ACTIONS.map((action) => (
                  <button
                    key={action.label}
                    className="quickActionBtn"
                  >
                    <img src={action.src} alt="" />
                    <span>{action.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section className="performanceRow">
            <h3 className="performanceTitle">Performance Overview</h3>
            <div className="performanceGrid">
              {PERFORMANCE_ITEMS.map((item) => (
                <div className="performanceItem" key={item.label}>
                  <div className="performanceIconWrap">
                    <img src={item.icon} alt="" className="performanceIconImg" />
                  </div>
                  <div className="performanceText">
                    <span className="performanceLabel">{item.label}</span>
                    <span className="performanceValue">
                      {item.value}
                      {item.suffix && <span className="performanceSuffix">{item.suffix}</span>}
                    </span>
                    <span className="performanceDelta">
                      <span className={item.down ? 'performanceChangeDown' : 'performanceChange'}>
                        <img
                          src={item.down ? trendDownIcon : trendUpIcon}
                          alt=""
                          className="trendIcon"
                        />
                        {item.delta}
                      </span>
                      <span className="performanceContext"> from last month</span>
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
