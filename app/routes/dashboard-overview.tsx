import { AuthWrapper } from "../components/authwrap.tsx";
import { Navigate } from "react-router";
import { useOutletContext } from "react-router";

interface UserContext {
  userSessionData: {
    email: string;
    gravatar: string;
    uid: number;
  };
}

function Dashboard() {
  const { userSessionData } = useOutletContext<UserContext>();
  return (
    <>
      <AuthWrapper fallback={<Navigate to="/login" replace />}>
        <div className="drawer lg:drawer-open min-h-screen bg-base-200">
          {/* Toggle checkbox for mobile sidebar */}
          <input
            id="dashboard-drawer"
            type="checkbox"
            className="drawer-toggle"
          />

          {/* Main Content Area */}
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <header className="navbar bg-base-100 shadow-sm px-4">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="dashboard-drawer"
                  className="btn btn-square btn-ghost drawer-button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="flex-1">
                <h1 className="text-xl font-bold px-2">Dashboard</h1>
              </div>
              <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img alt="User Avatar" src={userSessionData.gravatar} />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>Profile</a>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <li>
                      <a>Logout</a>
                    </li>
                  </ul>
                </div>
              </div>
            </header>

            {/* Dashboard Main Grid Body */}
            <main className="p-6 space-y-6">
              {/* Key Metrics / Stats Section */}
              <div className="stats shadow w-full bg-base-100">
                <div className="stat">
                  <div className="stat-title">Total Revenue</div>
                  <div className="stat-value text-primary">$89,400</div>
                  <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                  <div className="stat-title">New Users</div>
                  <div className="stat-value text-secondary">4,200</div>
                  <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                  <div className="stat-title">Active Sessions</div>
                  <div className="stat-value">1,200</div>
                  <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
              </div>

              {/* Recent Activity Data Table */}
              <div className="card bg-base-100 shadow-sm">
                <div className="card-body">
                  <h2 className="card-title mb-4">Recent Transactions</h2>
                  <div className="overflow-x-auto">
                    <table className="table table-zebra">
                      <thead>
                        <tr>
                          <th></th>
                          <th>User</th>
                          <th>Status</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>1</th>
                          <td>Cy Ganderton</td>
                          <td>
                            <span className="badge badge-success badge-sm">
                              Completed
                            </span>
                          </td>
                          <td>$120.00</td>
                        </tr>
                        <tr>
                          <th>2</th>
                          <td>Hart Hagerty</td>
                          <td>
                            <span className="badge badge-warning badge-sm">
                              Pending
                            </span>
                          </td>
                          <td>$85.50</td>
                        </tr>
                        <tr>
                          <th>3</th>
                          <td>Brice Swyre</td>
                          <td>
                            <span className="badge badge-error badge-sm">
                              Failed
                            </span>
                          </td>
                          <td>$310.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </main>
          </div>

          {/* Sidebar Navigation */}
          <div className="drawer-side z-20">
            <label
              htmlFor="dashboard-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-100 text-base-content border-r border-base-200">
              <li className="text-lg font-bold px-4 py-2 mb-2">My App</li>
              <li>
                <a className="active">Overview</a>
              </li>
              <li>
                <a>Analytics</a>
              </li>
              <li>
                <a>Orders</a>
              </li>
              <li>
                <a>Customers</a>
              </li>
              <div className="divider"></div>
              <li>
                <a>Settings</a>
              </li>
            </ul>
          </div>
        </div>
      </AuthWrapper>
    </>
  );
}

export default Dashboard;
