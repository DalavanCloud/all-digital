import React from 'react'
import { Link } from 'react-router'

const PageSidebar = () => {
  return (
    <aside class="page-sidebar">
      <p><b>All Digital Styleguide</b></p>

      <nav>
        <ul>
          <li>
            <Link to="/">
              Overview
            </Link>
          </li>
          <li>
            Base

            <ul>
              <li>
                <Link to="/base/colors">
                  Colors
                </Link>
              </li>
              <li>
                <Link to="/base/forms">
                  Forms
                </Link>
              </li>
              <li>
                <Link to="/base/typography">
                  Typography
                </Link>
              </li>
              <li>
                <Link to="/base/headings">
                  Headings
                </Link>
              </li>
            </ul>
          </li>
          <li>
            Components

            <ul>
              <li>
                <Link to="/components/card-groups">
                  Card Groups
                </Link>
              </li>
              <li>
                <Link to="/components/actions">
                  Actions
                </Link>
              </li>
              <li>
                <Link to="/components/buttons">
                  Buttons
                </Link>
              </li>
              <li>
                <Link to="/components/badges">
                  Badges
                </Link>
              </li>
              <li>
                <Link to="/components/loading">
                  Loading
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default PageSidebar
